import { motion } from 'framer-motion';
import {
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Activity,
  Users,
} from 'lucide-react';
import { useModal } from '../context/ModalContext.jsx';
import { MODALS } from '../lib/modals.js';

const stats = [
  { label: 'Total Calls', value: '12,480', icon: PhoneCall, tone: 'brand' },
  { label: 'Answered', value: '9,832', icon: PhoneIncoming, tone: 'cyan' },
  { label: 'Active Campaigns', value: '24', icon: Rocket, tone: 'violet' },
  { label: 'AI Success Rate', value: '78.8%', icon: TrendingUp, tone: 'emerald' },
];

const toneMap = {
  brand: 'bg-brand-50 text-brand-600',
  cyan: 'bg-cyan-50 text-cyan-600',
  violet: 'bg-violet-50 text-violet-600',
  emerald: 'bg-emerald-50 text-emerald-600',
};

const chartBars = [38, 52, 44, 64, 58, 72, 66, 84, 78, 92, 86, 96];

const recentCalls = [
  { name: 'Aarav Sharma', status: 'Answered', time: '2m', type: 'in' },
  { name: 'Priya Nair', status: 'Follow-up', time: '6m', type: 'out' },
  { name: 'Rohit Verma', status: 'Answered', time: '11m', type: 'in' },
  { name: 'Sneha Iyer', status: 'Missed', time: '18m', type: 'out' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
  const { open } = useModal();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-100/60 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[320px] w-[400px] rounded-full bg-violet-100/50 blur-[100px]" />
        <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Now in private beta — AI voice agents are live
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Every Conversation.
            <br />
            <span className="text-gradient-accent">Smarter with AI.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg lg:mx-0">
            Transform customer communication with intelligent AI-powered calling,
            automated campaigns, and real-time conversation insights.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a href="#product" className="btn-primary w-full sm:w-auto">
              Explore Platform
            </a>
            <button
              type="button"
              onClick={() => open(MODALS.demo)}
              className="btn-secondary w-full sm:w-auto"
            >
              Book a Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <motion.div
            aria-hidden
            className="absolute -left-6 -top-6 hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-ink-600 shadow-card lg:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-cyan-600" />
              <span>Live call flow</span>
            </div>
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute -right-4 bottom-8 hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-ink-600 shadow-card lg:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand-600" />
              <span>+1,204 leads</span>
            </div>
          </motion.div>

          <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-pop sm:p-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-ink-400">callpilot.app / overview</span>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 gap-3 pt-4 sm:gap-4"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={item}
                  className="rounded-xl border border-slate-200 bg-white p-3 sm:p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className={`grid h-8 w-8 place-items-center rounded-lg ${toneMap[s.tone]}`}>
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-wide text-ink-300">
                      today
                    </span>
                  </div>
                  <div className="mt-2 text-xl font-bold text-ink-900 sm:text-2xl">{s.value}</div>
                  <div className="text-[11px] text-ink-400 sm:text-xs">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-ink-400">Call volume</p>
                  <p className="text-sm font-semibold text-ink-800">Last 12 hours</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                  <TrendingUp className="h-3 w-3" /> +18%
                </span>
              </div>
              <div className="mt-4 flex h-24 items-end gap-1.5">
                {chartBars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.05, ease: 'easeOut' }}
                    className="flex-1 rounded-t bg-gradient-to-t from-brand-200 to-brand-500"
                  />
                ))}
              </div>
            </div>

            {/* <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
              <p className="mb-3 text-xs text-ink-400">Recent activity</p>
              <ul className="space-y-2">
                {recentCalls.map((c) => (
                  <li key={c.name} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      {c.type === 'in' ? (
                        <PhoneIncoming className="h-4 w-4 text-cyan-600" />
                      ) : (
                        <PhoneOutgoing className="h-4 w-4 text-violet-600" />
                      )}
                      <span className="text-ink-800">{c.name}</span>
                    </span>
                    <span className="flex items-center gap-2 text-xs text-ink-400">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${
                          c.status === 'Answered'
                            ? 'bg-emerald-50 text-emerald-700'
                            : c.status === 'Missed'
                            ? 'bg-red-50 text-red-600'
                            : 'bg-amber-50 text-amber-700'
                        }`}
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {c.status}
                      </span>
                      {c.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
