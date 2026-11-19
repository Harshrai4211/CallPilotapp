
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  User,
  Mail,
  Building2,
  Phone,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Send,
  RotateCcw,
  AlertCircle,
} from 'lucide-react';
import PropTypes from 'prop-types';

const INTEREST_OPTIONS = [
  'AI Voice Calling',
  'Smart Campaign Management',
  'Lead Management',
  'Real-Time Analytics',
  'Full Platform Demo',
];

const initialForm = {
  fullName: '',
  email: '',
  company: '',
  phone: '',
  interest: '',
  message: '',
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function isValidIndianPhone(value) {
  const digits = value.replace(/\D/g, '');
  const national = digits.replace(/^(91|0)/, '');
  return /^[6-9]\d{9}$/.test(national);
}

export default function DemoForm({ onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const validateField = (name, raw) => {
    const value = (raw ?? '').trim();

    switch (name) {
      case 'fullName':
        if (!value) return 'Full name is required.';
        if (value.length < 2)
          return 'Full name must contain at least two characters.';
        return '';

      case 'email':
        if (!value) return 'Work email is required.';
        if (!isValidEmail(value))
          return 'Please enter a valid email address.';
        return '';

      case 'company':
        if (!value) return 'Company name is required.';
        return '';

      case 'phone':
        if (!value) return 'Phone number is required.';
        if (!isValidIndianPhone(value))
          return 'Enter a valid 10-digit Indian mobile number.';
        return '';

      case 'interest':
        if (!value) return 'Please select an option.';
        return '';

      case 'message':
        if (!value) return 'Message is required.';
        if (value.length < 10)
          return 'Message must contain at least 10 characters.';
        return '';

      default:
        return '';
    }
  };

  const updateField = (name, value) => {
    const v = typeof value === 'string' ? value : '';

    setForm((prev) => ({ ...prev, [name]: v }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, v),
      }));
    }
  };

  const validateAll = () => {
    const next = {};

    Object.keys(initialForm).forEach((k) => {
      next[k] = validateField(k, form[k]);
    });

    setErrors(next);

    setTouched(
      Object.keys(initialForm).reduce(
        (acc, k) => ({ ...acc, [k]: true }),
        {}
      )
    );

    return Object.values(next).every((e) => !e);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({ ...prev, [name]: true }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitting || success) return;
    if (!validateAll()) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);

      setSuccess({
        name: form.fullName.trim(),
        email: form.email.trim(),
      });

      setForm(initialForm);
      setErrors({});
      setTouched({});
    }, 1100);
  };

  const handleReset = () => {
    setSuccess(null);
    setForm(initialForm);
    setErrors({});
    setTouched({});
  };

  const fieldClass = (name) =>
    `input-base w-full ${
      errors[name]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
        : ''
    }`;

  // Consistent spacing for icon-based fields
  const inputPadding = {
    paddingLeft: '44px',
    paddingRight: '16px',
  };

  if (success) {
    return (
      <div className="py-2 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.05 }}
          className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100"
        >
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        </motion.div>

        <h3 className="mt-5 text-xl font-bold text-ink-900">
          Demo request submitted
        </h3>

        <p className="mt-2 text-sm text-ink-500">
          Thank you! Your demo request has been submitted successfully.
        </p>

        <div className="mx-auto mt-6 max-w-sm rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-sm">
          <p className="text-ink-400">Confirmation summary</p>

          <p className="mt-2 text-ink-800">
            <span className="text-ink-400">Name:</span> {success.name}
          </p>

          <p className="text-ink-800">
            <span className="text-ink-400">Email:</span> {success.email}
          </p>
        </div>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleReset}
            className="btn-secondary"
          >
            <RotateCcw className="h-4 w-4" />
            Submit another request
          </button>

          <button
            type="button"
            onClick={onSuccess}
            className="btn-primary"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="mt-2 space-y-5"
      aria-label="Demo request form"
    >
      {/* Full Name & Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          error={errors.fullName}
          htmlFor="demo-fullName"
        >
          <div className="relative">
            <User className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300" />

            <input
              id="demo-fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              value={form.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
              onBlur={handleBlur}
              className={fieldClass('fullName')}
              style={inputPadding}
            />
          </div>
        </Field>

        <Field
          label="Work Email"
          error={errors.email}
          htmlFor="demo-email"
        >
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300" />

            <input
              id="demo-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              onBlur={handleBlur}
              className={fieldClass('email')}
              style={inputPadding}
            />
          </div>
        </Field>
      </div>

      {/* Company & Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Company Name"
          error={errors.company}
          htmlFor="demo-company"
        >
          <div className="relative">
            <Building2 className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300" />

            <input
              id="demo-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Acme Inc."
              value={form.company}
              onChange={(e) => updateField('company', e.target.value)}
              onBlur={handleBlur}
              className={fieldClass('company')}
              style={inputPadding}
            />
          </div>
        </Field>

        <Field
          label="Phone Number"
          error={errors.phone}
          htmlFor="demo-phone"
          hint="10-digit Indian mobile"
        >
          <div className="relative">
            <Phone className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300" />

            <input
              id="demo-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="98765 43210"
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              onBlur={handleBlur}
              className={fieldClass('phone')}
              style={inputPadding}
            />
          </div>
        </Field>
      </div>

      {/* Interested In */}
      <Field
        label="Interested In"
        error={errors.interest}
        htmlFor="demo-interest"
      >
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-ink-300" />

          <select
            id="demo-interest"
            name="interest"
            value={form.interest}
            onChange={(e) => updateField('interest', e.target.value)}
            onBlur={handleBlur}
            className={`${fieldClass('interest')} appearance-none`}
            style={{
              paddingLeft: '44px',
              paddingRight: '40px',
            }}
          >
            <option value="">Select an option…</option>

            {INTEREST_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </Field>

      {/* Message */}
      <Field
        label="Message"
        error={errors.message}
        htmlFor="demo-message"
        hint="Minimum 10 characters"
      >
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-4 top-4 z-10 h-4 w-4 text-ink-300" />

          <textarea
            id="demo-message"
            name="message"
            rows={4}
            placeholder="Tell us about your team and what you'd like to see in the demo…"
            value={form.message}
            onChange={(e) => updateField('message', e.target.value)}
            onBlur={handleBlur}
            className={`${fieldClass('message')} resize-none`}
            style={{
              paddingLeft: '44px',
              paddingRight: '16px',
              paddingTop: '12px',
            }}
          />
        </div>
      </Field>

      {/* Submit Button */}
      <motion.button
        whileTap={{ scale: 0.99 }}
        type="submit"
        disabled={submitting}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Request Demo
          </>
        )}
      </motion.button>
    </form>
  );
}

function Field({ label, error, htmlFor, hint, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-ink-700"
      >
        {label}
      </label>

      {children}

      <AnimatePresence>
        {error && (
          <motion.p
            key={error}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600"
            role="alert"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      {hint && !error && (
        <p className="mt-1.5 text-xs text-ink-400">{hint}</p>
      )}
    </div>
  );
}

DemoForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  hint: PropTypes.string,
  children: PropTypes.node.isRequired,
};
