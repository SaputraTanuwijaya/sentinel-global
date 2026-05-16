import { Html } from "@elysiajs/html";
import { AuthLayout } from "./AuthLayout";
import { GoogleButton } from "./GoogleButton";

export const UserLoginPage = ({
  error,
  values,
}: {
  error?: string;
  values?: { email?: string };
} = {}) => (
  <AuthLayout title="Sign In">
    <h1 class="text-2xl tracking-[0.25em] uppercase text-white text-center mb-2">
      Sign In
    </h1>
    <p class="text-gray-500 text-xs tracking-widest text-center uppercase mb-8">
      Operator Access
    </p>

    <form method="POST" action="/auth/login" class="space-y-4">
      <div>
        <label class="block text-xs tracking-widest text-gray-400 uppercase mb-2">
          Email
        </label>
        <input
          type="text"
          name="email"
          required
          autofocus
          value={values?.email ?? ""}
          placeholder="you@example.com"
          class="w-full bg-zinc-950 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-sentinel-accent/50 transition-colors"
        />
      </div>
      <div>
        <label class="block text-xs tracking-widest text-gray-400 uppercase mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          class="w-full bg-zinc-950 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-sentinel-accent/50 transition-colors"
        />
      </div>

      <label class="flex items-center gap-2 text-xs tracking-widest text-gray-400 uppercase cursor-pointer select-none">
        <input
          type="checkbox"
          name="remember"
          value="on"
          class="w-3.5 h-3.5 accent-sentinel-accent cursor-pointer"
        />
        Remember me
      </label>

      {error && (
        <p class="text-red-400 text-xs tracking-widest uppercase text-center">
          {error}
        </p>
      )}

      <button
        type="submit"
        class="w-full bg-sentinel-accent text-black text-xs font-bold tracking-widest uppercase py-3 hover:bg-white transition-colors cursor-pointer"
      >
        Sign In
      </button>
    </form>

    <div class="my-6 flex items-center gap-3">
      <div class="flex-1 h-px bg-white/10"></div>
      <span class="text-xs text-gray-500 tracking-widest uppercase">or</span>
      <div class="flex-1 h-px bg-white/10"></div>
    </div>

    <GoogleButton />

    <p class="text-center text-xs text-gray-500 tracking-widest uppercase mt-8">
      No account?{" "}
      <a
        href="/auth/register"
        class="text-sentinel-accent hover:opacity-70 transition-opacity"
      >
        Register
      </a>
    </p>
  </AuthLayout>
);
