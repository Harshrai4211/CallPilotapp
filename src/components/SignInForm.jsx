
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';
import { useModal } from '../context/ModalContext.jsx';
import { MODALS } from '../lib/modals.js';

export default function SignInForm() {
  const { open } = useModal();
  const [showPwd, setShowPwd] = useState(false);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-2 space-y-5"
      aria-label="Sign in form"
    >
      {/* Email Field */}
      <div>
        <label
          htmlFor="signin-email"
          className="mb-1.5 block text-sm font-medium text-ink-700"
        >
          Email
        </label>

        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300"
          />

          <input
            id="signin-email"
            type="email"
            placeholder="you@company.com"
            className="input-base w-full"
            style={{
              paddingLeft: '44px',
              paddingRight: '16px',
            }}
            autoComplete="email"
          />
        </div>
      </div>

      {/* Password Field */}
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label
            htmlFor="signin-password"
            className="block text-sm font-medium text-ink-700"
          >
            Password
          </label>

          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="text-xs font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            Forgot?
          </button>
        </div>

        <div className="relative">
          <Lock
            className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300"
          />

          <input
            id="signin-password"
            type={showPwd ? 'text' : 'password'}
            placeholder="Enter your password"
            className="input-base w-full"
            style={{
              paddingLeft: '44px',
              paddingRight: '44px',
            }}
            autoComplete="current-password"
          />

          <button
            type="button"
            onClick={() => setShowPwd((v) => !v)}
            aria-label={showPwd ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md text-ink-400 transition-colors hover:bg-slate-100 hover:text-ink-700"
          >
            {showPwd ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <label className="flex items-center gap-2 text-sm text-ink-500 cursor-pointer">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-300"
        />
        Keep me signed in
      </label>

      {/* Sign In Button */}
      <motion.button
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="btn-primary w-full"
      >
        <LogIn className="h-4 w-4" />
        Sign in
      </motion.button>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-ink-400">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={() => open(MODALS.signUp)}
          className="font-semibold text-brand-600 hover:text-brand-700 transition-colors"
        >
          Create one
        </button>
      </p>
    </form>
  );
}
