
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../lib/site.js';
import { useModal } from '../context/ModalContext.jsx';
import { MODALS } from '../lib/modals.js';

function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2 group"
      aria-label="CallPilot home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 shadow-sm">
        <PhoneCall className="h-5 w-5 text-white" strokeWidth={2.4} />
      </span>

      <span className="text-lg font-bold tracking-tight text-ink-900">
        Call<span className="text-gradient-accent">Pilot</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock background scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close sidebar using Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleNavClick = () => setOpen(false);

  const handleModal = (modal) => {
    setOpen(false);
    openModal(modal);
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200 bg-white/85 backdrop-blur-xl shadow-sm'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-lg px-3 py-2 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => openModal(MODALS.signIn)}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-ink-600 transition-colors hover:text-brand-700"
            >
              Sign in
            </button>

            <button
              type="button"
              onClick={() => openModal(MODALS.demo)}
              className="btn-primary"
            >
              Get a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-sidebar"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-ink-700 transition-colors hover:bg-slate-50 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] cursor-default bg-slate-950/40 backdrop-blur-sm lg:hidden"
            />

            {/* Sliding Sidebar */}
            <motion.aside
              id="mobile-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-[85%] max-w-[360px] flex-col border-l border-slate-200 bg-white shadow-2xl lg:hidden"
            >

              {/* Sidebar Header */}
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 px-5">
                <Logo />

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-ink-600 transition-colors hover:bg-slate-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Sidebar Content */}
              <div className="flex flex-1 flex-col overflow-y-auto px-5 py-7">

                <div>
                  <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-ink-400">
                    Navigation
                  </p>

                  <ul className="space-y-1">
                    {NAV_LINKS.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.08 + index * 0.06,
                          duration: 0.3,
                        }}
                      >
                        <a
                          href={link.href}
                          onClick={handleNavClick}
                          className="group flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-medium text-ink-600 transition-all hover:bg-brand-50 hover:text-brand-700"
                        >
                          {link.label}

                          <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Account Actions */}
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-ink-400">
                    Your Account
                  </p>

                  <button
                    type="button"
                    onClick={() => handleModal(MODALS.signIn)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-center text-sm font-semibold text-ink-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Sign in
                  </button>

                  <button
                    type="button"
                    onClick={() => handleModal(MODALS.demo)}
                    className="btn-primary mt-3 flex w-full items-center justify-center gap-2"
                  >
                    Get a Demo
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Bottom Information */}
                <div className="mt-auto pt-10">
                  <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-violet-50 p-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-semibold text-brand-700">
                        AI Voice Agents
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-semibold text-ink-800">
                      Smarter conversations start here.
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-ink-500">
                      Automate calls, manage campaigns, and grow your business with AI.
                    </p>
                  </div>

                  <p className="mt-5 text-center text-xs text-ink-400">
                    © {new Date().getFullYear()} CallPilot
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
