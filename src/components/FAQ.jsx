import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'What is CallPilot?',
    a: 'CallPilot is an AI-powered business communication platform that helps teams automate customer calls, run calling campaigns, organize leads, and analyze conversation performance — all from a single dashboard.',
  },
  {
    q: 'How does AI-powered calling work?',
    a: 'CallPilot uses conversational AI agents to handle outbound and inbound calls using natural language workflows. You configure the campaign and audience, and the AI manages the conversation flow, follow-ups, and outcome capture.',
  },
  {
    q: 'Can I manage multiple campaigns?',
    a: 'Yes. You can create, organize, and monitor multiple campaigns in parallel, each with its own target audience, scripts, and performance metrics tracked independently.',
  },
  {
    q: 'Does CallPilot provide analytics?',
    a: 'Yes. CallPilot provides real-time analytics including call volume, answer rates, AI success rate, conversion, campaign performance, and recent activity — so you can understand communication trends at a glance.',
  },
  {
    q: 'Can I request a product demonstration?',
    a: 'Absolutely. Use the "Book a Demo" form on this page to share your details and our team will arrange a tailored walkthrough. This is a front-end prototype, so the request is validated locally for demonstration.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-ink-500">
            Everything you need to know about CallPilot. Can&apos;t find an answer? Request a demo.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-xl border bg-white transition-colors ${
                  isOpen ? 'border-brand-200' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-ink-900 sm:text-base">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-slate-200 bg-slate-50"
                  >
                    <Plus className="h-4 w-4 text-ink-600" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <p className="px-5 pb-4 text-sm leading-relaxed text-ink-500">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
