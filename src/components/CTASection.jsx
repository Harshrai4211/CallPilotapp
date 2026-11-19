import { motion } from 'framer-motion';
import { CalendarClock, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext.jsx';
import { MODALS } from '../lib/modals.js';

export default function CTASection() {
  const { open } = useModal();

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-14 text-center shadow-pop sm:px-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-20" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-2xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
              <CalendarClock className="h-4 w-4" />
              30-minute personalized walkthrough
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to see CallPilot in action?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-brand-100">
              Book a free demo and we&apos;ll tailor the walkthrough to your team and use case.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => open(MODALS.demo)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 shadow-sm transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => open(MODALS.signUp)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 sm:w-auto"
              >
                Create an account
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
