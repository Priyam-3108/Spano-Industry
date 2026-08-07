'use client';
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    category: 'Supermarket Racks',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const ACCESS_KEY = "2a6bc4c0-9b5a-4d31-9791-be40d412d600";

    const data = {
      access_key: ACCESS_KEY,
      subject: `New Web Inquiry | ${formData.name} - ${formData.category}`,
      from_name: "SPANO Industry Website",
      "Name": formData.name,
      "Phone": formData.phone,
      "Email": formData.email || 'N/A',
      "City / State": formData.city || 'N/A',
      "Product Category": formData.category,
      "Message": formData.message || 'No additional message provided.'
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const resData = await response.json();
      setIsSubmitting(false);

      if (resData.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(resData.message || "Submission failed. Please check your credentials.");
      }
    } catch (error: any) {
      setIsSubmitting(false);
      setErrorMessage(error?.message || "Network error. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Banner */}
        <section className="relative pt-28 pb-20 bg-[var(--color-spano-dark)] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase block mb-3 font-heading">
                Contact &amp; Inquiry
              </span>
              <h1 className="font-heading font-black text-white leading-tight text-3xl sm:text-5xl max-w-2xl">
                Get in Touch With Our Racking Experts
              </h1>
              <p className="mt-4 text-white/70 text-base max-w-xl font-body">
                Have a store layout plan or need a customized quote for supermarket or warehouse racks? Contact our sales team today.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Contact Info (5 cols) */}
              <div className="lg:col-span-5 space-y-8">
                <AnimatedSection direction="left">
                  <SectionHeader title="Contact" subtitle="Details" />
                  <p className="text-[var(--color-spano-text)] text-sm font-body -mt-4 mb-6">
                    Our sales engineers are ready to guide you on store measurements, rack load selection, and manufacturing timelines.
                  </p>
                </AnimatedSection>

                {/* Cards */}
                <div className="space-y-4">
                  {/* Phone */}
                  <AnimatedSection delay={0.1} direction="left">
                    <div className="group p-6 rounded-2xl bg-[var(--color-spano-light)]/50 hover:bg-white border border-gray-100 hover:border-[var(--color-spano-bright)]/30 hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-spano-dark)] to-[var(--color-spano-mid)] text-[var(--color-spano-bright)] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-[var(--color-spano-dark)] text-sm uppercase">Phone Numbers</h4>
                        <a href="tel:+919173564015" className="block text-base font-bold text-[var(--color-spano-mid)] hover:underline mt-1 font-body">
                          +91 91735 64015
                        </a>
                        <a href="tel:+919104925353" className="block text-sm font-medium text-[var(--color-spano-text)] hover:underline font-body">
                          +91 91049 25353
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Email */}
                  <AnimatedSection delay={0.15} direction="left">
                    <div className="group p-6 rounded-2xl bg-[var(--color-spano-light)]/50 hover:bg-white border border-gray-100 hover:border-[var(--color-spano-bright)]/30 hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-spano-dark)] to-[var(--color-spano-mid)] text-[var(--color-spano-bright)] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-[var(--color-spano-dark)] text-sm uppercase">Email Inquiries</h4>
                        <a href="mailto:info@spanoindustry.com" className="block text-base font-bold text-[var(--color-spano-mid)] hover:underline mt-1 font-body">
                          info@spanoindustry.com
                        </a>
                        <a href="mailto:Sales@spanoindustry.com" className="block text-xs font-semibold text-gray-600 hover:underline mt-0.5 font-body">
                          Sales@spanoindustry.com
                        </a>
                        <p className="text-xs text-[var(--color-spano-text)] mt-1">Quick response guaranteed within 2 hours</p>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Factory Address */}
                  <AnimatedSection delay={0.2} direction="left">
                    <div className="group p-6 rounded-2xl bg-[var(--color-spano-light)]/50 hover:bg-white border border-gray-100 hover:border-[var(--color-spano-bright)]/30 hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-spano-dark)] to-[var(--color-spano-mid)] text-[var(--color-spano-bright)] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-[var(--color-spano-dark)] text-sm uppercase">Factory &amp; Works Address</h4>
                        <address className="not-italic text-sm text-[var(--color-spano-text)] leading-relaxed font-body mt-1">
                          Plot 143 to 145, VR Eco Park,<br />
                          Kosmadi, Kamrej NH-8,<br />
                          Surat – 394326, Gujarat, India
                        </address>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Hours */}
                  <AnimatedSection delay={0.25} direction="left">
                    <div className="group p-6 rounded-2xl bg-[var(--color-spano-light)]/50 hover:bg-white border border-gray-100 hover:border-[var(--color-spano-bright)]/30 hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-spano-dark)] to-[var(--color-spano-mid)] text-[var(--color-spano-bright)] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-[var(--color-spano-dark)] text-sm uppercase">Factory Operating Hours</h4>
                        <p className="text-sm text-[var(--color-spano-text)] font-body mt-1">
                          Monday – Saturday: 9:00 AM – 7:00 PM<br />
                          Sunday: By appointment only
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* WhatsApp Quick Box */}
                <AnimatedSection delay={0.3} direction="left">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--color-spano-mid)] to-[var(--color-spano-dark)] text-white flex items-center justify-between shadow-lg">
                    <div>
                      <h4 className="font-heading font-bold text-base">Instant WhatsApp Quote</h4>
                      <p className="text-white/80 text-xs font-body">Share your layout plan or sketch directly on WhatsApp.</p>
                    </div>
                    <a
                      href="https://wa.me/919173564015"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-white text-[var(--color-spano-dark)] font-bold text-xs rounded-xl hover:bg-[var(--color-spano-light)] transition-colors font-heading shadow flex items-center gap-1.5"
                    >
                      <MessageCircle size={16} />
                      Chat Now
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Inquiry Form (7 cols) */}
              <div className="lg:col-span-7">
                <AnimatedSection direction="right">
                  <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-2xl">
                    <h3 className="font-heading font-bold text-2xl text-[var(--color-spano-dark)] mb-2">
                      Send an Online Inquiry
                    </h3>
                    <p className="text-[var(--color-spano-text)] text-sm font-body mb-8">
                      Fill out the form below to receive a detailed quote, layout assistance, or product catalog.
                    </p>

                    {submitted ? (
                      <div className="py-12 text-center space-y-4">
                        <div className="w-20 h-20 rounded-full bg-[var(--color-spano-bright)]/15 text-[var(--color-spano-bright)] flex items-center justify-center mx-auto">
                          <CheckCircle2 size={44} />
                        </div>
                        <h4 className="font-heading font-bold text-2xl text-[var(--color-spano-dark)]">
                          Thank You for Your Inquiry!
                        </h4>
                        <p className="text-[var(--color-spano-text)] text-sm max-w-md mx-auto font-body">
                          We have received your message regarding <strong className="text-black">{formData.category}</strong>. One of our sales engineers will call you at <strong className="text-[var(--color-spano-mid)]">{formData.phone}</strong> shortly.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="mt-6 px-6 py-3 bg-[var(--color-spano-dark)] text-white font-bold rounded-xl text-xs font-heading hover:bg-[var(--color-spano-bright)] transition-colors"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5 font-body">
                        {errorMessage && (
                          <div className="p-4 text-xs font-bold text-red-600 bg-red-50 border border-red-200 rounded-xl">
                            {errorMessage}
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1 font-heading">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Full Name"
                              className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1 font-heading">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1 font-heading">
                              Email Address
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="name@company.com"
                              className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1 font-heading">
                              City / State
                            </label>
                            <input
                              type="text"
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              placeholder="Surat, Mumbai, Ahmedabad..."
                              className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1 font-heading">
                            Product Category of Interest
                          </label>
                          <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all bg-white"
                          >
                            <option value="Supermarket Racks">Supermarket Racks (Wall &amp; Double Side)</option>
                            <option value="Display & Retail Fixtures">Display &amp; Retail Fixtures (Garment, Toys, Cosmetics)</option>
                            <option value="Customized Retail Solutions">Customized Retail Solutions (Wood &amp; Metal)</option>
                            <option value="Heavy Duty Storage Racks">Heavy Duty Storage Racks (Warehouse Pallet)</option>
                            <option value="Slotted Angle Racks">Slotted Angle Racks</option>
                            <option value="Retail Accessories & Counters">Retail Accessories &amp; Cash Counters</option>
                            <option value="Complete Store Setup">Complete Store Setup / Turnkey Project</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[var(--color-spano-dark)] uppercase mb-1 font-heading">
                            Message / Store Specifications
                          </label>
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Share your store dimensions (sq. ft.), expected rack height, product type, or target installation date..."
                            className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none transition-all resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 px-6 bg-[var(--color-spano-bright)] hover:bg-[var(--color-spano-dark)] disabled:opacity-60 text-white font-bold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 font-heading text-sm shadow-lg"
                        >
                          <Send size={18} />
                          <span>{isSubmitting ? 'Sending Inquiry...' : 'Submit Racking Inquiry'}</span>
                        </button>
                      </form>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="mt-20">
              <AnimatedSection>
                <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-[var(--color-spano-light)]/40 p-4">
                  <div className="mb-4 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[var(--color-spano-dark)]">
                        Visit Our Factory in Surat
                      </h3>
                      <p className="text-xs text-[var(--color-spano-text)] font-body">
                        Plot 143 to 145, VR Eco Park, Kosmadi, Kamrej NH-8, Surat – 394326
                      </p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Kamrej+NH8+Surat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-spano-mid)] hover:underline font-heading"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                  <div className="w-full h-80 rounded-2xl overflow-hidden bg-gray-200">
                    <iframe
                      title="SPANO Industry Factory Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14872.787680123512!2d72.9610114!3d21.2636735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f47a61d157b%3A0x6b80bc8a9b3a98ef!2sKamrej%2C%20Gujarat%20394326!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
