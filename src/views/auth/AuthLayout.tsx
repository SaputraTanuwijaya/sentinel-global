import { Html } from "@elysiajs/html";

// Auth pages are a standalone shell (no 3D/HTMX layout).
//
// Three layers of defense ensure styles survive every load path:
//   1. Source links use hx-boost="false" (src/index.tsx)
//   2. Router returns HX-Refresh on HX-Request (auth router GET handlers)
//   3. The <style> block is duplicated INSIDE <body> here, so even a stray
//      hx-boost body-swap drags the CSS along with the content
//
// We don't use CDN Tailwind anymore — all styles are explicit CSS classes,
// applied synchronously from the inline <style> block.
const AUTH_STYLES = `
  * { box-sizing: border-box; margin: 0; padding: 0; }

  html, body {
    background: #060608;
    color: white;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
  }

  /* ── Main wrapper ────────────────────────────────────────────── */
  .auth-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 72px 16px;
    background-image:
      linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px);
    background-size: 52px 52px;
  }

  /* ── Atmospheric glow ────────────────────────────────────────── */
  .auth-glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(ellipse 65% 55% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 68%);
  }

  /* ── Classification bars ─────────────────────────────────────── */
  .auth-top-bar, .auth-bottom-bar {
    position: absolute;
    left: 0; right: 0;
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;
    opacity: 0;
    animation: fade-in 0.8s ease-out 0.1s forwards;
  }
  .auth-top-bar { top: 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .auth-bottom-bar { bottom: 0; border-top: 1px solid rgba(255,255,255,0.06); }
  .bar-text {
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.2);
    font-weight: 300;
  }
  .bar-badge { display: flex; align-items: center; gap: 7px; }
  .bar-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    display: inline-block;
  }

  /* ── Back link ───────────────────────────────────────────────── */
  .auth-back {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 24px;
    font-size: 10px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: #d4af37;
    text-decoration: none;
    transition: opacity 0.15s;
    z-index: 10;
    opacity: 0;
    animation: fade-in 0.6s ease-out 0.2s forwards;
  }
  .auth-back:hover { opacity: 0.55; }

  /* ── Card ────────────────────────────────────────────────────── */
  .auth-card {
    position: relative;
    width: 100%;
    max-width: 392px;
    background: rgba(5,5,7,0.9);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 36px 32px 28px;
    z-index: 10;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    opacity: 0;
    animation: card-enter 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s forwards;
  }

  .auth-card::before, .auth-card::after {
    content: '';
    position: absolute;
    width: 0; height: 0;
    pointer-events: none;
    animation: corner-draw 0.3s ease-out 0.55s forwards;
  }
  .auth-card::before {
    top: -1px; left: -1px;
    border-top: 1px solid rgba(212,175,55,0.65);
    border-left: 1px solid rgba(212,175,55,0.65);
  }
  .auth-card::after {
    bottom: -1px; right: -1px;
    border-bottom: 1px solid rgba(212,175,55,0.65);
    border-right: 1px solid rgba(212,175,55,0.65);
  }
  .corner-tr, .corner-bl {
    position: absolute;
    width: 0; height: 0;
    pointer-events: none;
    animation: corner-draw 0.3s ease-out 0.55s forwards;
  }
  .corner-tr {
    top: -1px; right: -1px;
    border-top: 1px solid rgba(212,175,55,0.65);
    border-right: 1px solid rgba(212,175,55,0.65);
  }
  .corner-bl {
    bottom: -1px; left: -1px;
    border-bottom: 1px solid rgba(212,175,55,0.65);
    border-left: 1px solid rgba(212,175,55,0.65);
  }

  /* ── Scanline ─────────────────────────────────────────────────── */
  @keyframes scan {
    0%   { top: -3px; opacity: 0; }
    5%   { opacity: 1; }
    95%  { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }
  .scanline {
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212,175,55,0.3) 20%,
      rgba(255,230,80,0.75) 50%,
      rgba(212,175,55,0.3) 80%,
      transparent 100%
    );
    box-shadow: 0 0 10px rgba(212,175,55,0.5), 0 0 24px rgba(212,175,55,0.2);
    animation: scan 4.5s ease-in-out infinite;
    animation-delay: 0.9s;
    pointer-events: none;
  }

  /* ── Section header inside card ──────────────────────────────── */
  .auth-header { margin-bottom: 28px; }
  .auth-tag {
    font-size: 9px;
    color: rgba(212,175,55,0.6);
    letter-spacing: 0.38em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 10px;
  }
  .auth-tag-slash { color: rgba(212,175,55,0.3); }
  .auth-title {
    font-size: 22px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: white;
    font-weight: 300;
    margin-bottom: 5px;
    line-height: 1.2;
  }
  .auth-subtitle {
    font-size: 10px;
    color: rgba(255,255,255,0.3);
    letter-spacing: 0.28em;
    text-transform: uppercase;
  }

  /* ── Form elements (uniform 44px height for inputs & selects) ─── */
  .form-field { margin-bottom: 18px; }
  .form-label {
    display: block;
    font-size: 10px;
    letter-spacing: 0.28em;
    color: rgba(255,255,255,0.38);
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"],
  select.form-select {
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    background: rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 0;
    color: white;
    padding: 0 14px;
    font-size: 13px;
    line-height: 42px;
    font-family: 'JetBrains Mono', 'Courier New', monospace !important;
    font-weight: 400;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s, background-color 0.15s;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    vertical-align: middle;
  }
  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus,
  input[type="tel"]:focus,
  select.form-select:focus {
    border-color: rgba(212,175,55,0.45);
    box-shadow: inset 3px 0 0 rgba(212,175,55,0.7), 0 0 0 1px rgba(212,175,55,0.07);
    background-color: rgba(212,175,55,0.035);
  }
  input::placeholder { color: rgba(255,255,255,0.2); font-family: 'JetBrains Mono','Courier New',monospace; }

  /* Select-specific: custom dropdown chevron + native list font reset */
  select.form-select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(212,175,55,0.55)'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  select.form-select option {
    background: #0e0e10;
    color: white;
    font-family: 'JetBrains Mono','Courier New',monospace;
    font-size: 13px;
    padding: 8px 12px;
  }
  /* Dim the placeholder option (the disabled one shown when nothing chosen) */
  select.form-select:invalid,
  select.form-select option[value=""] {
    color: rgba(255,255,255,0.35);
  }

  .form-hint {
    font-size: 9px;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 5px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 18px;
  }
  .form-row .form-field { margin-bottom: 0; }

  .form-check {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.35);
    text-transform: uppercase;
    cursor: pointer;
    user-select: none;
    margin-bottom: 18px;
  }
  .form-check input[type="checkbox"] {
    width: 13px;
    height: 13px;
    min-width: 13px;
    padding: 0;
    background: rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.2);
    accent-color: #d4af37;
    cursor: pointer;
  }

  .auth-error {
    border: 1px solid rgba(239,68,68,0.25);
    background: rgba(239,68,68,0.06);
    padding: 10px 14px;
    text-align: center;
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(252,129,129,1);
    margin-bottom: 18px;
  }

  .auth-btn {
    width: 100%;
    background: #d4af37;
    color: black;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    padding: 14px;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    margin-bottom: 4px;
  }
  .auth-btn:hover { background: white; }

  .auth-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 20px 0;
  }
  .auth-divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.07); }
  .auth-divider-text {
    font-size: 9px;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  .auth-switch {
    text-align: center;
    font-size: 10px;
    color: rgba(255,255,255,0.28);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-top: 20px;
  }
  .auth-switch a {
    color: #d4af37;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .auth-switch a:hover { opacity: 0.65; }

  /* ── Card footer ─────────────────────────────────────────────── */
  .card-footer {
    margin-top: 24px;
    padding-top: 14px;
    border-top: 1px solid rgba(255,255,255,0.07);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .secure-label {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 9px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
  }
  .enc-label {
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.16);
  }

  /* ── Secure dot pulse ────────────────────────────────────────── */
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; box-shadow: 0 0 5px rgba(34,197,94,0.8); }
    50%       { opacity: 0.3; box-shadow: none; }
  }
  .secure-dot {
    display: inline-block;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #22c55e;
    animation: pulse-dot 2.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  /* ── Keyframes ───────────────────────────────────────────────── */
  @keyframes card-enter {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes corner-draw {
    to { width: 20px; height: 20px; }
  }
`;

export const AuthLayout = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{`Sentinel Global | ${title}`}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      {/* Critical styles in <head> for normal page loads. */}
      <style>{AUTH_STYLES}</style>
    </head>
    <body>
      {/* Duplicate styles inside <body> as defense-in-depth: if an
          hx-boost link somehow still swaps body-only, this <style>
          element travels along with the content and keeps the page
          looking correct. Browsers parse and apply <style> in body. */}
      <style>{AUTH_STYLES}</style>

      <div class="auth-wrapper">
        <div class="auth-glow"></div>

        <div class="auth-top-bar">
          <span class="bar-text">Sentinel Global · Secure Access Terminal</span>
          <div class="bar-badge">
            <span class="bar-dot"></span>
            <span class="bar-text" style="color:rgba(255,255,255,0.15);">Restricted</span>
          </div>
        </div>

        <a href="/" class="auth-back">
          <span>←</span>
          <span>Sentinel Global</span>
        </a>

        <div class="auth-card">
          <span class="corner-tr"></span>
          <span class="corner-bl"></span>

          <div style="position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:1;">
            <div class="scanline"></div>
          </div>

          <div style="position:relative;z-index:10;">
            {children}

            <div class="card-footer">
              <div class="secure-label">
                <span class="secure-dot"></span>
                <span>Secure Connection</span>
              </div>
              <span class="enc-label">TLS 1.3 · AES-256</span>
            </div>
          </div>
        </div>

        <div class="auth-bottom-bar">
          <span class="bar-text" style="color:rgba(255,255,255,0.14);">© Sentinel Global Operations</span>
          <span class="bar-text" style="color:rgba(255,255,255,0.14);">v2.4</span>
        </div>
      </div>
    </body>
  </html>
);
