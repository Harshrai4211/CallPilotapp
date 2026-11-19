
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Lock,
  Building2,
  UserPlus,
  Eye,
  EyeOff,
} from 'lucide-react';
import { useModal } from '../context/ModalContext.jsx';
import { MODALS } from '../lib/modals.js';

export default function SignUpForm() {
  const { open } = useModal();
  const [showPwd, setShowPwd] = useState(false);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-2 space-y-5"
      aria-label="Sign up form"
    >
      {/* First Name & Last Name */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="signup-first"
            className="mb-1.5 block text-sm font-medium text-ink-700"
          >
            First name
          </label>

          <div className="relative">
            <User className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300" />

            <input
              id="signup-first"
              type="text"
              placeholder="First"
              className="input-base w-full"
              style={{
                paddingLeft: '44px',
                paddingRight: '16px',
              }}
              autoComplete="given-name"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="signup-last"
            className="mb-1.5 block text-sm font-medium text-ink-700"
          >
            Last name
          </label>

          <div className="relative">
            <User className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300" />

            <input
              id="signup-last"
              type="text"
              placeholder="Last"
              className="input-base w-full"
              style={{
                paddingLeft: '44px',
                paddingRight: '16px',
              }}
              autoComplete="family-name"
            />
          </div>
        </div>
      </div>

      {/* Work Email */}
      <div>
        <label
          htmlFor="signup-email"
          className="mb-1.5 block text-sm font-medium text-ink-700"
        >
          Work email
        </label>

        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300" />

          <input
            id="signup-email"
            type="email"
            placeholder="You@company.com"
            className="input-base w-full"
            style={{
              paddingLeft: '44px',
              paddingRight: '16px',
            }}
            autoComplete="email"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="signup-company"
          className="mb-1.5 block text-sm font-medium text-ink-700"
        >
          Company
        </label>

        <div className="relative">
          <Building2 className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300" />

          <input
            id="signup-company"
            type="text"
            placeholder="Your Company."
            className="input-base w-full"
            style={{
              paddingLeft: '44px',
              paddingRight: '16px',
            }}
            autoComplete="organization"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="signup-password"
          className="mb-1.5 block text-sm font-medium text-ink-700"
        >
          Password
        </label>

        <div className="relative">
          <Lock className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300" />

          <input
            id="signup-password"
            type={showPwd ? 'text' : 'password'}
            placeholder="At least 8 characters"
            className="input-base w-full"
            style={{
              paddingLeft: '44px',
              paddingRight: '44px',
            }}
            autoComplete="new-password"
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

        <p className="mt-1.5 text-xs text-ink-400">
          Use 8+ characters with a mix of letters and numbers.
        </p>
      </div>

      {/* Terms & Conditions */}
      <label className="flex items-start gap-2 text-sm text-ink-500 cursor-pointer">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-brand-600 focus:ring-brand-300"
        />
        <span>
          I agree to the Terms of Service and Privacy Policy.
        </span>
      </label>

      {/* Create Account */}
      <motion.button
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="btn-primary w-full"
      >
        <UserPlus className="h-4 w-4" />
        Create account
      </motion.button>

      {/* Sign In Link */}
      <p className="text-center text-sm text-ink-400">
        Already have an account?{' '}
        <button
          type="button"
          onClick={() => open(MODALS.signIn)}
          className="font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          Sign in
        </button>
      </p>
    </form>
  );
}
