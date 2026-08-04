'use client';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phone = '919173564015';
  const text = encodeURIComponent(
    'Hello SPANO Industry! I am interested in your Modern Retail Racking Solutions. Please provide more information.'
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-full shadow-2xl transition-all duration-300 hover:scale-105 font-heading border-2 border-white/40 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} className="fill-white/20 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
