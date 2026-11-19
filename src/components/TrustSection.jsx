import { motion } from 'framer-motion';
import { Headphones, LifeBuoy, TrendingUp, Building2 } from 'lucide-react';

const categories = [
  { label: 'Sales Teams', icon: Headphones },
  { label: 'Customer Support', icon: LifeBuoy },
  { label: 'Growing Businesses', icon: TrendingUp },
  { label: 'Enterprise Teams', icon: Building2 },
];

export default function TrustSection() {
  return (
    <section className="relative border-y border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium uppercase tracking-widest text-ink-400"
        >
          Built for teams that communicate at scale.
        </motion.p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 text-center transition-colors hover:border-brand-200 hover:bg-brand-50"
            >
              <c.icon className="h-5 w-5 text-ink-400 transition-colors group-hover:text-brand-600" />
              <span className="text-sm font-semibold text-ink-700">{c.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink-400">
          Sample industry categories shown for demonstration. Not actual customer endorsements.
        </p>
      </div>
    </section>
  );
}
