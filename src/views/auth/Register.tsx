import { Html } from "@elysiajs/html";
import { AuthLayout } from "./AuthLayout";
import { GoogleButton } from "./GoogleButton";

type RegisterValues = {
  email?: string;
  name?: string;
  phone?: string;
  country?: string;
};

export const RegisterPage = ({
  error,
  values,
}: {
  error?: string;
  values?: RegisterValues;
} = {}) => (
  <AuthLayout title="Register">
    <h1 class="text-2xl tracking-[0.25em] uppercase text-white text-center mb-2">
      Register
    </h1>
    <p class="text-gray-500 text-xs tracking-widest text-center uppercase mb-8">
      Create Operator Profile
    </p>

    <form method="POST" action="/auth/register" class="space-y-4">
      <div>
        <label class="block text-xs tracking-widest text-gray-400 uppercase mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={values?.name ?? ""}
          autofocus
          class="w-full bg-zinc-950 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-sentinel-accent/50 transition-colors"
        />
      </div>
      <div>
        <label class="block text-xs tracking-widest text-gray-400 uppercase mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={values?.email ?? ""}
          class="w-full bg-zinc-950 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-sentinel-accent/50 transition-colors"
        />
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs tracking-widest text-gray-400 uppercase mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={values?.phone ?? ""}
            placeholder="+1 555 0123"
            class="w-full bg-zinc-950 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-sentinel-accent/50 transition-colors"
          />
        </div>
        <div>
          <label class="block text-xs tracking-widest text-gray-400 uppercase mb-2">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={values?.country ?? ""}
            placeholder="USA"
            class="w-full bg-zinc-950 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-sentinel-accent/50 transition-colors"
          />
        </div>
      </div>

      <div>
        <label class="block text-xs tracking-widest text-gray-400 uppercase mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          minlength="8"
          class="w-full bg-zinc-950 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-sentinel-accent/50 transition-colors"
        />
        <p class="text-[10px] text-gray-600 tracking-widest uppercase mt-1">
          Min 8 characters
        </p>
      </div>

      <label class="flex items-center gap-2 text-xs tracking-widest text-gray-400 uppercase cursor-pointer select-none">
        <input
          type="checkbox"
          name="remember"
          value="on"
          checked
          class="w-3.5 h-3.5 accent-sentinel-accent cursor-pointer"
        />
        Stay signed in
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
        Create Account
      </button>
    </form>

    <div class="my-6 flex items-center gap-3">
      <div class="flex-1 h-px bg-white/10"></div>
      <span class="text-xs text-gray-500 tracking-widest uppercase">or</span>
      <div class="flex-1 h-px bg-white/10"></div>
    </div>

    <GoogleButton label="Sign up with Google" />

    <p class="text-center text-xs text-gray-500 tracking-widest uppercase mt-8">
      Have an account?{" "}
      <a
        href="/auth/login"
        class="text-sentinel-accent hover:opacity-70 transition-opacity"
      >
        Sign In
      </a>
    </p>
  </AuthLayout>
);
