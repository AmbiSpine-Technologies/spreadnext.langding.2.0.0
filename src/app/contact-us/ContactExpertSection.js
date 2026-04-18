// components/EnquiryForm.jsx
"use client";
import React, { useState } from "react";
import { Check, MoveRight } from "lucide-react";

// Service options (from HTML form)
const SERVICES = [
  { value: "Income Tax Consultancy", label: "Income Tax Consultancy" },
  { value: "ITR Filing", label: "ITR Filing" },
  { value: "GST Services", label: "GST Services" },
  { value: "Transfer Pricing", label: "Transfer Pricing" },
  { value: "TDS Compliance", label: "TDS Compliance" },
  { value: "Bookkeeping & Accounting", label: "Bookkeeping & Accounting" },
  { value: "Payroll Processing", label: "Payroll Processing" },
  { value: "Company Incorporation", label: "Company Incorporation" },
  { value: "LLP Registration", label: "LLP Registration" },
  { value: "ROC Filing & Annual Returns", label: "ROC Filing & Annual Returns" },
  { value: "Virtual CFO Services", label: "Virtual CFO Services" },
  { value: "Startup Advisory", label: "Startup Advisory" },
  { value: "Project Financing / CMA Report", label: "Project Financing / CMA Report" },
  { value: "Business Valuation", label: "Business Valuation" },
  { value: "Due Diligence / M&A", label: "Due Diligence / M&A" },
  { value: "NRI Taxation", label: "NRI Taxation" },
  { value: "FSSAI Registration", label: "FSSAI Registration" },
  { value: "IEC Registration", label: "IEC Registration" },
  { value: "ESG Reporting", label: "ESG Reporting" },
  { value: "DSC Services", label: "DSC Services" },
  { value: "NGO / Trust / Society Registration", label: "NGO / Trust / Society Registration" },
  { value: "Other", label: "Other" },
];

// Entity type options
const ENTITY_TYPES = [
  { value: "Individual", label: "Individual" },
  { value: "Proprietorship", label: "Proprietorship" },
  { value: "Partnership", label: "Partnership" },
  { value: "LLP", label: "LLP" },
  { value: "Private Limited Company", label: "Private Limited Company" },
  { value: "Public Limited Company", label: "Public Limited Company" },
  { value: "Startup / New Business", label: "Startup / New Business" },
  { value: "NRI", label: "NRI" },
  { value: "NGO / Trust / Society", label: "NGO / Trust / Society" },
];

// Budget options
const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "Under ₹10,000", label: "Under ₹10,000" },
  { value: "₹10,000 – ₹25,000", label: "₹10,000 – ₹25,000" },
  { value: "₹25,000 – ₹50,000", label: "₹25,000 – ₹50,000" },
  { value: "₹50,000 – ₹1,00,000", label: "₹50,000 – ₹1,00,000" },
  { value: "Above ₹1,00,000", label: "Above ₹1,00,000" },
  { value: "Need consultation first", label: "Need consultation first" },
];

// Callback options
const CALLBACK_OPTIONS = [
  { value: "As soon as possible", label: "As soon as possible" },
  { value: "10 AM – 1 PM", label: "10 AM – 1 PM" },
  { value: "1 PM – 4 PM", label: "1 PM – 4 PM" },
  { value: "4 PM – 7 PM", label: "4 PM – 7 PM" },
  { value: "Email first", label: "Email first" },
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    // Basic Info
    name: "",
    company: "",
    email: "",
    phone: "",
    // Service & Entity
    service: "",
    otherServiceDetails: "",
    entityType: "",
    // Location & Budget
    city: "",
    budget: "",
    // Requirements
    message: "",
    callback: "As soon as possible",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = () => {
    const requiredFields = ["name", "company", "email", "phone", "service", "entityType"];
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        setError(`Please fill in all required fields. ${field} is missing.`);
        return false;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return false;
    }

    // Consent validation
    if (!formData.consent) {
      setError("Please consent to storing your information.");
      return false;
    }

    // Other service details validation
    if (formData.service === "Other" && (!formData.otherServiceDetails || formData.otherServiceDetails.trim() === "")) {
      setError("Please specify your service requirement.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for API
      const payload = {
        name: formData.name,
        phone: formData.phone.replace(/\D/g, ""), // Clean phone number
        email: formData.email,
        company: formData.company,
        service: formData.service,
        otherServiceDetails: formData.service === "Other" ? formData.otherServiceDetails : "",
        entity_type: formData.entityType,
        city: formData.city,
        budget_range: formData.budget,
        requirement_notes: formData.message,
        preferred_callback: formData.callback,
        consent_given: formData.consent,
      };

      const response = await fetch(`${API_URL}/enquiries/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          otherServiceDetails: "",
          entityType: "",
          city: "",
          budget: "",
          message: "",
          callback: "As soon as possible",
          consent: false,
        });
        
        // Auto hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-20 px-6 md:px-12 lg:px-24 font-sans text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT CONTENT - Same as before */}
        <div className="flex flex-col items-start">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-4 py-1.5 rounded-full mb-6">
            Business & Compliance Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6">
            Talk to an expert.<br />Get the right <span className="text-[#2563EB]">advice fast.</span>
          </h2>
          <p className="text-[#64748B] text-lg font-light leading-relaxed mb-10 max-w-lg">
            Whether you're filing GST, incorporating a company, or need a Virtual CFO — our partner experts respond within 24 hours. No jargon, no delays.
          </p>

          <div className="space-y-6 mb-10">
            {[
              { title: "Expert CA & advisory partners", desc: "Verified professionals across taxation, law, and finance" },
              { title: "Response within 24 hours", desc: "No waiting. A dedicated expert picks up your query same day" },
              { title: "Free first consultation", desc: "Understand your needs before any commitment" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold">{item.title}</h4>
                  <p className="text-[13px] text-[#64748B]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 p-4 bg-white border border-[#E2E8F0] rounded-xl w-full max-w-sm mb-8">
            <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center font-bold text-[#1D4ED8] text-sm">
              CA
            </div>
            <div>
              <div className="text-[14px] font-semibold">SpreadNext Advisory Team</div>
              <div className="text-[12px] text-[#64748B]">CA & Compliance Experts · Pan India</div>
            </div>
            <div className="ml-auto w-2.5 h-2.5 rounded-full bg-[#16A34A] shadow-[0_0_0_3px_#F0FDF4]"></div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="relative">
          {!submitted ? (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-bold mb-1">Get in touch</h3>
              <p className="text-[#94A33B] text-sm mb-8">Fill in your details — our team will reach out within 24 hours</p>

              {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase text-[#475569]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange} 
                      className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50/50 transition-all" 
                      placeholder="Rajesh Kumar" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase text-[#475569]">
                      Company / Firm Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange} 
                      className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB]" 
                      placeholder="Acme Pvt. Ltd." 
                    />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase text-[#475569]">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange} 
                      className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB]" 
                      placeholder="rajesh@company.com" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase text-[#475569]">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      name="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange} 
                      className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB]" 
                      placeholder="9876543210" 
                    />
                  </div>
                </div>

                {/* Row 3: Service + Entity Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase text-[#475569]">
                      Primary Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange} 
                      className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase text-[#475569]">
                      Entity Type <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="entityType" 
                      value={formData.entityType}
                      onChange={handleChange} 
                      className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
                    >
                      <option value="">Select entity type</option>
                      {ENTITY_TYPES.map(e => (
                        <option key={e.value} value={e.value}>{e.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Other Service Details (conditional) */}
                {formData.service === "Other" && (
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase text-[#475569]">
                      Please specify your requirement <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="otherServiceDetails"
                      value={formData.otherServiceDetails}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB] h-24"
                      placeholder="Briefly describe what you are looking for..."
                    />
                  </div>
                )}

                {/* Row 4: City + Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase text-[#475569]">
                      City / State
                    </label>
                    <input 
                      name="city" 
                      value={formData.city}
                      onChange={handleChange} 
                      className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB]" 
                      placeholder="Ex: Rewa, Madhya Pradesh" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase text-[#475569]">
                      Approx Monthly / Project Budget
                    </label>
                    <select 
                      name="budget" 
                      value={formData.budget}
                      onChange={handleChange} 
                      className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
                    >
                      {BUDGET_OPTIONS.map(b => (
                        <option key={b.value} value={b.value}>{b.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase text-[#475569]">
                    Brief Requirement
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB] h-24"
                    placeholder="Tell us what you need, timeline, and any urgent issue."
                  />
                  <p className="text-[11px] text-[#94A3B8]">
                    Example: GST registration for a new private limited company, expected within 7 days.
                  </p>
                </div>

                {/* Callback Preference */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase text-[#475569]">
                    Preferred Callback Time
                  </label>
                  <select 
                    name="callback" 
                    value={formData.callback}
                    onChange={handleChange} 
                    className="w-full p-3 border border-[#E2E8F0] rounded-lg text-sm outline-none focus:border-[#2563EB] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
                  >
                    {CALLBACK_OPTIONS.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>

                {/* Consent Checkbox */}
                <div className="space-y-1.5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-[#E2E8F0] text-[#2563EB] focus:ring-[#2563EB]"
                      required
                    />
                    <span className="text-[13px] text-[#64748B]">
                      I consent to SpreadNext storing my submitted information so the team can contact me regarding my enquiry. <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#2563EB] text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1D4ED8] transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Request free consultation"}
                  {!isSubmitting && <MoveRight className="w-4 h-4" />}
                </button>
              </form>
              <p className="text-center text-[11px] text-[#94A3B8] mt-4">No spam. No commitment. Just expert advice.</p>
            </div>
          ) : (
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-16 text-center shadow-sm">
              <div className="w-14 h-14 bg-[#F0FDF4] border border-[#BBF7D0] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-[#16A34A] w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">We've got your enquiry!</h4>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Our advisory team will reach out within 24 hours.<br />Check your email for a confirmation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-[#2563EB] text-sm font-medium hover:underline"
              >
                Submit another enquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}