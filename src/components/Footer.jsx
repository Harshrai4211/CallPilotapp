
import {
  PhoneCall,
  Globe,
  AtSign,
  MessageCircle,
  Send,
  ExternalLink,
} from 'lucide-react';
import { useModal } from '../context/ModalContext.jsx';
import { MODALS } from '../lib/modals.js';

const productLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', action: 'demo' },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 shadow-sm">
        <PhoneCall className="h-5 w-5 text-white" strokeWidth={2.4} />
      </span>

      <span className="text-lg font-bold tracking-tight text-ink-900">
        Call<span className="text-gradient-accent">Pilot</span>
      </span>
    </div>
  );
}

export default function Footer() {
  const { open } = useModal();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />

            <p className="mt-4 max-w-xs text-sm text-ink-500">
              AI-powered business communication — automate calls,
              run campaigns, and understand every conversation.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {[Globe, AtSign, MessageCircle, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link placeholder"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-ink-500 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-ink-900">
              Product
            </h4>

            <ul className="mt-4 space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-500 transition-colors hover:text-brand-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-ink-900">
              Company
            </h4>

            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) =>
                l.action ? (
                  <li key={l.label}>
                    <button
                      type="button"
                      onClick={() => open(MODALS.demo)}
                      className="text-sm text-ink-500 transition-colors hover:text-brand-700"
                    >
                      {l.label}
                    </button>
                  </li>
                ) : (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-500 transition-colors hover:text-brand-700"
                    >
                      {l.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-ink-900">
              Contact
            </h4>

            <ul className="mt-4 space-y-2.5 text-sm text-ink-500">
              <li>hello@callpilot.demo</li>
              <li>+91 99999 99999</li>
              <li>Company Address, District, State, Country</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} CallPilot. A fictional SaaS prototype for demonstration.
          </p>

          <div className="flex items-center gap-5 text-xs text-ink-400">
            <a href="#" className="hover:text-brand-700">
              Privacy
            </a>
            <a href="#" className="hover:text-brand-700">
              Terms
            </a>
            <a href="#" className="hover:text-brand-700">
              Security
            </a>
          </div>
        </div>

        
{/* Developer Credit - Fully Clickable */}
<a
  href="https://harshkumarrai.netlify.app"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Harsh Kumar Rai's portfolio"
  className="group mt-6 block border-t border-slate-100 pt-6 text-center transition-colors"
>
  <p className="text-sm text-ink-500">
    Designed & Developed with{' '}
    <span className="text-red-500">♥</span> by{' '}
    <span className="inline-flex items-center gap-1 font-semibold text-brand-600 transition-colors group-hover:text-brand-700 group-hover:underline">
      Harsh Kumar Rai
      <ExternalLink className="h-3 w-3" />
    </span>
  </p>

  <p className="mt-2 text-xs text-ink-400 transition-colors group-hover:text-brand-600">
    Built as an assignment for Sankar Group through Internshala.
  </p>
</a>

      </div>
    </footer>
  );
}
