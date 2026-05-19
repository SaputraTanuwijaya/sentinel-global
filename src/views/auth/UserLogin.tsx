import { Html } from "@elysiajs/html";
import { AuthLayout } from "./AuthLayout";
import { GoogleButton } from "./GoogleButton";

export const UserLoginPage = ({
  error,
  values,
  next,
}: {
  error?: string;
  values?: { email?: string };
  /** Path to bounce to after successful login. Server validates safety. */
  next?: string;
} = {}) => (
  <AuthLayout title="Sign In">
    <div class="auth-header">
      <div class="auth-tag">
        <span class="auth-tag-slash">///</span>
        <span>Operator Access</span>
      </div>
      <h1 class="auth-title">Sign In</h1>
      <p class="auth-subtitle">
        {next ? "Sign in to complete deployment" : "Authentication Required"}
      </p>
    </div>

    <form method="POST" action="/auth/login">
      {next && <input type="hidden" name="next" value={next} />}
      <div class="form-field">
        <label class="form-label">Email Address</label>
        <input
          type="text"
          name="email"
          required
          autofocus
          value={values?.email ?? ""}
          placeholder="you@example.com"
        />
      </div>

      <div class="form-field">
        <label class="form-label">Password</label>
        <input type="password" name="password" required />
      </div>

      <label class="form-check">
        <input type="checkbox" name="remember" value="on" />
        Remember me
      </label>

      {error && <div class="auth-error">{error}</div>}

      <button type="submit" class="auth-btn">Authenticate</button>
    </form>

    <div class="auth-divider">
      <div class="auth-divider-line"></div>
      <span class="auth-divider-text">or</span>
      <div class="auth-divider-line"></div>
    </div>

    <GoogleButton next={next} />

    <p class="auth-switch">
      No account?{" "}
      <a href={next ? `/auth/register?next=${encodeURIComponent(next)}` : "/auth/register"}>
        Register
      </a>
    </p>
  </AuthLayout>
);
