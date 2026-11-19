import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  PhoneCall,
  Rocket,
  Users,
  BarChart3,
  Settings,
  Search,
  Bell,
  PhoneIncoming,
  PhoneOutgoing,
  TrendingUp,
  CheckCircle2,
  Clock,
  XCircle,
} from 'lucide-react';
import { useModal } from '../context/ModalContext.jsx';
import { MODALS } from '../lib/modals.js';

const nav = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Calls', icon: PhoneCall },
  { label: 'Campaigns', icon: Rocket },
  { label: 'Leads', icon: Users },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Settings', icon: Settings },
];

const overviewCards = [
  { label: 'Total Calls', value: '12,480', change: '+12.4%', tone: 'text-emerald-600' },
  { label: 'Answered', value: '9,832', change: '+8.1%', tone: 'text-emerald-600' },
  { label: 'Avg. Duration', value: '2m 14s', change: '-3.2%', tone: 'text-red-500' },
  { label: 'Conversion', value: '23.7%', change: '+5.6%', tone: 'text-emerald-600' },
];

const campaignBars = [
  { name: 'Spring Outreach', pct: 82, calls: '3,210' },
  { name: 'Renewal Drive', pct: 64, calls: '2,108' },
  { name: 'Win-back', pct: 47, calls: '1,560' },
];

const callRows = [
  { name: 'Aarav Sharma', num: '+91 98•••• 2103', status: 'Answered', dur: '3:12', time: '10:24' },
  { name: 'Priya Nair', num: '+91 90•••• 8842', status: 'Follow-up', dur: '1:48', time: '10:18' },
  { name: 'Rohit Verma', num: '+91 88•••• 0571', status: 'Answered', dur: '4:02', time: '10:05' },
  { name: 'Sneha Iyer', num: '+91 70•••• 3390', status: 'Missed', dur: '0:00', time: '09:51' },
  { name: 'Karthik Rao', num: '+91 99•••• 1126', status: 'Answered', dur: '2:35', time: '09:40' },
];

const statusStyle = {
  Answered: 'bg-emerald-50 text-emerald-700',
  'Follow-up': 'bg-amber-50 text-amber-700',
  Missed: 'bg-red-50 text-red-600',
};

const analytics = [42, 58, 50, 70, 64, 80, 74, 92, 86, 96];

export default function DashboardPreview() {
  const { open } = useModal();

  return (
    <section id="product" className="relative bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            Product Preview
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            A command center for every conversation.
          </h2>
          <p className="mt-4 text-ink-500">
            A glimpse of the CallPilot dashboard — built to monitor campaigns, review calls, and
            understand performance at a glance.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-pop"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-ink-400 sm:flex">
              <Search className="h-3.5 w-3.5" />
              Search calls, campaigns, leads…
            </div>
            <div className="flex items-center gap-3">
              <Bell className="h-4 w-4 text-ink-400" />
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                CP
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[220px_1fr]">
            <aside className="hidden border-r border-slate-100 bg-slate-50 p-3 lg:block">
              <nav className="space-y-1">
                {nav.map((n) => (
                  <div
                    key={n.label}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                      n.active
                        ? 'bg-brand-100 font-medium text-brand-700'
                        : 'text-ink-500'
                    }`}
                  >
                    <n.icon className="h-4 w-4" />
                    {n.label}
                  </div>
                ))}
              </nav>
              <div className="mt-6 rounded-xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-4">
                <p className="text-xs font-semibold text-brand-800">Upgrade to Growth</p>
                <p className="mt-1 text-[11px] text-ink-500">Unlock AI workflows & lead tools.</p>
                <button
                  type="button"
                  onClick={() => open(MODALS.demo)}
                  className="mt-3 inline-block w-full rounded-lg bg-brand-600 px-3 py-1.5 text-center text-xs font-semibold text-white hover:bg-brand-700"
                >
                  See plans
                </button>
              </div>
            </aside>

            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-ink-900">Overview</h3>
                  <p className="text-xs text-ink-400">Welcome back — here&apos;s today&apos;s snapshot.</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-400">
                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5">
                    Last 24h
                  </span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {overviewCards.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <p className="text-[11px] uppercase tracking-wide text-ink-400">{c.label}</p>
                    <p className="mt-1 text-xl font-bold text-ink-900 sm:text-2xl">{c.value}</p>
                    <p className={`mt-1 text-xs ${c.tone}`}>{c.change}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-ink-800">Campaign performance</h4>
                    <Rocket className="h-4 w-4 text-violet-600" />
                  </div>
                  <div className="mt-4 space-y-4">
                    {campaignBars.map((b, i) => (
                      <div key={b.name}>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-ink-600">{b.name}</span>
                          <span className="text-ink-400">{b.calls} calls</span>
                        </div>
                        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${b.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-ink-800">Call analytics</h4>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
                      <TrendingUp className="h-3.5 w-3.5" /> +18%
                    </span>
                  </div>
                  <div className="mt-5 flex h-40 items-end gap-2">
                    {analytics.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                        className="flex-1 rounded-t bg-gradient-to-t from-brand-100 to-brand-400"
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-ink-400">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>24:00</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
                  <h4 className="text-sm font-semibold text-ink-800">Recent calls</h4>
                  <span className="text-xs text-ink-400">5 of 9,832</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead>
                      <tr className="text-[11px] uppercase tracking-wide text-ink-400">
                        <th className="px-5 py-2.5 font-medium">Contact</th>
                        <th className="px-5 py-2.5 font-medium">Direction</th>
                        <th className="px-5 py-2.5 font-medium">Status</th>
                        <th className="px-5 py-2.5 font-medium">Duration</th>
                        <th className="px-5 py-2.5 font-medium">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {callRows.map((r) => (
                        <tr
                          key={r.name}
                          className="border-t border-slate-100 text-ink-700 transition-colors hover:bg-slate-50"
                        >
                          <td className="px-5 py-3">
                            <div className="font-medium text-ink-900">{r.name}</div>
                            <div className="text-xs text-ink-400">{r.num}</div>
                          </td>
                          <td className="px-5 py-3">
                            <span className="inline-flex items-center gap-1.5 text-xs">
                              {r.status === 'Missed' ? (
                                <XCircle className="h-4 w-4 text-red-500" />
                              ) : r.dur === '0:00' ? (
                                <PhoneOutgoing className="h-4 w-4 text-violet-600" />
                              ) : (
                                <PhoneIncoming className="h-4 w-4 text-cyan-600" />
                              )}
                              {r.dur === '0:00' ? 'Outbound' : 'Inbound'}
                            </span>
                          </td>
                          <td className="px-5 py-3">
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${statusStyle[r.status]}`}
                            >
                              {r.status === 'Answered' ? (
                                <CheckCircle2 className="h-3 w-3" />
                              ) : r.status === 'Missed' ? (
                                <XCircle className="h-3 w-3" />
                              ) : (
                                <Clock className="h-3 w-3" />
                              )}
                              {r.status}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-ink-500">{r.dur}</td>
                          <td className="px-5 py-3 text-ink-400">{r.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
