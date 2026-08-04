'use client';
import { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export function EnquireModal({ isOpen, onClose, defaultProduct = '' }: EnquireModalProps) {
  const [product, setProduct] = useState(defaultProduct);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  });

  useEffect(() => {
    if (defaultProduct) {
      setProduct(defaultProduct);
    }
  }, [defaultProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate inquiry submission
    setSubmitted(true);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 cursor-default"
      >
        {/* Header */}
        <div className="bg-[var(--color-spano-dark)] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
          <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase block mb-1">
            SPANO Industry
          </span>
          <h3 className="font-heading font-bold text-xl leading-tight">
            Product Inquiry / Get Quote
          </h3>
          <p className="text-white/70 text-xs mt-1 font-body">
            Fill out the details below and our racking experts will get back to you within 2 hours.
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="font-heading font-bold text-xl text-[var(--color-spano-dark)]">
                Inquiry Received!
              </h4>
              <p className="text-[var(--color-spano-text)] text-sm max-w-xs mx-auto font-body">
                Thank you <strong className="text-black">{formData.name}</strong>. Our team will contact you shortly regarding <strong className="text-emerald-700">{product || 'Racking Solutions'}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[var(--color-spano-dark)] text-white font-bold rounded-xl text-xs font-heading hover:bg-[var(--color-spano-bright)] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-body">
              <div>
                <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1">
                  Product / Requirement
                </label>
                <input
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="e.g. Supermarket Racks / Heavy Duty Storage"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="City Name"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share store dimensions, rack quantity, or specific layout needs..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[var(--color-spano-bright)] text-white font-bold rounded-xl hover:bg-[var(--color-spano-dark)] transition-colors duration-300 flex items-center justify-center gap-2 font-heading shadow-md hover:shadow-lg"
              >
                <Send size={16} />
                Send Inquiry Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
