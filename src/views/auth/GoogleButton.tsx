import { Html } from "@elysiajs/html";

export const GoogleButton = ({
  label = "Continue with Google",
  next,
}: { label?: string; next?: string } = {}) => (
  <a
    href={next ? `/auth/google?next=${encodeURIComponent(next)}` : "/auth/google"}
    style="display:flex;align-items:center;justify-content:center;gap:12px;width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.65);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;padding:13px;text-decoration:none;font-family:'JetBrains Mono','Courier New',monospace;transition:border-color 0.15s,color 0.15s,background-color 0.15s;cursor:pointer;"
    onmouseover="this.style.borderColor='rgba(212,175,55,0.45)';this.style.color='white';this.style.backgroundColor='rgba(255,255,255,0.06)';"
    onmouseout="this.style.borderColor='rgba(255,255,255,0.12)';this.style.color='rgba(255,255,255,0.65)';this.style.backgroundColor='rgba(255,255,255,0.03)';"
  >
    <svg width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
    </svg>
    {label}
  </a>
);
