import { motion } from 'framer-motion';
import { PhoneCall, Rocket, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: PhoneCall,
    title: 'AI Voice Calling',
    points: [
      'Intelligent automated calling.',
      'Natural conversational workflows.',
      'Consistent customer communication.',
    ],
    iconTone: 'bg-brand-50 text-brand-600',
    dot: 'bg-brand-500',
  },
  {
    icon: Rocket,
    title: 'Smart Campaign Management',
    points: [
      'Organize calling campaigns.',
      'Manage multiple campaigns.',
      'Monitor campaign progress.',
    ],
    iconTone: 'bg-cyan-50 text-cyan-600',
    dot: 'bg-cyan-500',
  },
  {
    icon: Users,
    title: 'Lead Management',
    points: [
      'Organize customer information.',
      'Track lead status.',
      'Manage follow-ups.',
    ],
    iconTone: 'bg-violet-50 text-violet-600',
    dot: 'bg-violet-500',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    points: [
      'Track call performance.',
      'View success rates.',
      'Understand communication trends.',
    ],
    iconTone: 'bg-emerald-50 text-emerald-600',
    dot: 'bg-emerald-500',
  },
];

const card = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Everything you need for smarter conversations.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-ink-500"
          >
            A complete communication toolkit — from AI-driven calling to deep analytics — built
            for modern revenue and support teams.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="card-base card-hover p-6"
            >
              <div className={`grid h-11 w-11 place-items-center rounded-xl ${f.iconTone}`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{f.title}</h3>
              <ul className="mt-4 space-y-2">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink-500">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${f.dot}`} />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
