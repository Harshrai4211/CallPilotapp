import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { useModal } from '../context/ModalContext.jsx';
import { MODALS } from '../lib/modals.js';

const plans = [
  {
    name: 'Starter',
    price: '₹0',
    cadence: '/mo',
    tagline: 'For teams getting started with AI calling.',
    features: [
      'Basic campaign management',
      'Essential call analytics',
      'Standard support',
    ],
    cta: 'Request Demo',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₹2,499',
    cadence: '/mo',
    tagline: 'For growing teams that need full automation.',
    features: [
      'Advanced campaign management',
      'AI calling workflows',
      'Lead management',
      'Advanced analytics',
    ],
    cta: 'Request Demo',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    tagline: 'For organizations with custom requirements.',
    features: [
      'Custom workflows',
      'Advanced reporting',
      'Priority support',
      'Custom integrations',
    ],
    cta: 'Talk to Sales',
    highlight: false,
  },
];

export default function Pricing() {
  const { open } = useModal();

  return (
    <section id="pricing" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple plans that scale with you.
          </h2>
          <p className="mt-4 text-ink-500">
            Sample pricing shown for demonstration only — not actual commercial CallPilot prices.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                p.highlight
                  ? 'border-brand-300 bg-gradient-to-b from-brand-50 to-white shadow-card'
                  : 'border-slate-200 bg-white shadow-soft hover:shadow-card hover:border-brand-200'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                  <Sparkles className="h-3 w-3" /> Recommended
                </span>
              )}

              <h3 className="text-lg font-semibold text-ink-900">{p.name}</h3>
              <p className="mt-1 text-sm text-ink-500">{p.tagline}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-ink-900">{p.price}</span>
                <span className="text-sm text-ink-400">{p.cadence}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50">
                      <Check className="h-3 w-3 text-emerald-600" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => open(MODALS.demo)}
                className={
                  p.highlight
                    ? 'btn-primary mt-8 w-full'
                    : 'btn-secondary mt-8 w-full'
                }
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
