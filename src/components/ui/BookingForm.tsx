"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { format } from "date-fns";

interface BookingFormProps {
  selectedDate: Date;
  selectedTime: string;
  onBack: () => void;
  onSubmit: (formData: BookingFormData) => void;
}

export interface BookingFormData {
  name: string;
  email: string;
  requirements: string;
  description: string;
  revenue: string;
  guests?: string[];
}

export function BookingForm({ selectedDate, selectedTime, onBack, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    requirements: "",
    description: "",
    revenue: "",
    guests: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addGuest = () => {
    setFormData((prev) => ({
      ...prev,
      guests: [...(prev.guests || []), ""],
    }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-xl shadow-lg overflow-hidden">
      <div className="flex">
        <div className="w-64 p-6 border-r border-zinc-800">
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full bg-zinc-800" />
            <div>
              <h3 className="font-semibold text-white">INFLATE AI</h3>
              <p className="text-sm text-zinc-400">AI Voice Agent Discovery Call</p>
            </div>
          </div>
          <div className="space-y-4 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 4v7a4 4 0 004 4h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Web conferencing details provided upon confirmation.</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>{format(selectedDate, "h:mma, EEEE, MMMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>India Standard Time</span>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <button
                onClick={onBack}
                className="p-2 hover:bg-zinc-800 rounded-full mr-2 text-zinc-400"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-semibold text-white">Enter Details</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-zinc-500"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-zinc-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={addGuest}
                  className="text-teal-500 hover:text-teal-400 text-sm font-medium"
                >
                  + Add Guests
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">
                  Do you have a defined scope or requirement for your voice agent? <span className="text-red-500">*</span>
                </label>
                <select
                  name="requirements"
                  required
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="maybe">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">
                  If yes, please provide a detailed description of your project requirements (2-3 Sentences). <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-zinc-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">
                  How much monthly revenue is your team generating? <span className="text-red-500">*</span>
                </label>
                <select
                  name="revenue"
                  required
                  value={formData.revenue}
                  onChange={handleChange}
                  className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                >
                  <option value="">Select...</option>
                  <option value="0-10k">$0 - $10k</option>
                  <option value="10k-50k">$10k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white px-8 py-2 rounded-md hover:bg-teal-600 transition-colors"
                >
                  Schedule Meeting
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 