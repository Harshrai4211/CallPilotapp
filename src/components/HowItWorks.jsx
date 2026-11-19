import { motion } from 'framer-motion';
import { Settings2, Bot, BarChart3 } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: Settings2,
    title: 'Set Up Your Campaign',
    desc: 'Configure your communication campaign and target audience.',
  },
  {
    n: '02',
    icon: Bot,
    title: 'Let AI Handle Conversations',
    desc: 'Automate calling workflows and manage interactions.',
  },
  {
    n: '03',
    icon: BarChart3,
    title: 'Analyze Your Results',
    desc: 'Review reports, performance and customer engagement.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Up and running in three steps.
          </h2>
          <p className="mt-4 text-ink-500">
            From campaign setup to AI-driven conversations and clear reporting — CallPilot keeps
            the whole flow simple.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent md:block"
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative card-base p-6"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 shadow-sm">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-4xl font-extrabold text-slate-200">{s.n}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
