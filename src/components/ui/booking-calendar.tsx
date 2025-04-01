"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, getDay } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon, VideoCameraIcon, UserIcon, EnvelopeIcon, PhoneIcon, BuildingOfficeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

type Step = "date" | "time" | "form" | "success";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export function BookingCalendar() {
  const [step, setStep] = React.useState<Step>("date");
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  // Calculate empty cells for the start of the month
  const firstDayOfMonth = getDay(startOfMonth(currentDate));
  const emptyDays = Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setStep("time");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("form");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setStep("success");
  };

  const handleBack = () => {
    switch (step) {
      case "time":
        setStep("date");
        break;
      case "form":
        setStep("time");
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setStep("date");
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const renderStep = () => {
    switch (step) {
      case "date":
        return (
          <motion.div
            key="date-step"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-white">Select a Date</h2>
              <div className="flex gap-2">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="text-center mb-4">
              <h3 className="text-lg font-medium text-white">
                {format(currentDate, "MMMM yyyy")}
              </h3>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-zinc-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {emptyDays.map((_, idx) => (
                <div key={`empty-${idx}`} className="p-2" />
              ))}
              {days.map((day, idx) => {
                const isToday = isSameDay(day, new Date());
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isAvailable = day >= new Date();

                return (
                  <motion.button
                    key={day.toISOString()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => isAvailable && handleDateSelect(day)}
                    disabled={!isAvailable}
                    className={cn(
                      "p-2 w-full rounded-lg text-sm transition-colors",
                      isSelected ? "bg-teal-500 text-white" : "",
                      isToday && !isSelected ? "border border-teal-500 text-teal-500" : "",
                      isAvailable && !isSelected ? "text-zinc-300 hover:bg-zinc-800" : "",
                      !isAvailable ? "text-zinc-700 cursor-not-allowed" : "",
                      !isSameMonth(day, currentDate) ? "text-zinc-700" : ""
                    )}
                  >
                    {format(day, "d")}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        );

      case "time":
        return (
          <motion.div
            key="time-step"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Back
              </button>
              <h2 className="text-2xl font-semibold text-white">Select a Time</h2>
            </div>

            <div className="text-center mb-4">
              <p className="text-zinc-400">
                {format(selectedDate!, "EEEE, MMMM d")}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <motion.button
                  key={time}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTimeSelect(time)}
                  className={cn(
                    "p-3 rounded-lg text-sm transition-colors",
                    selectedTime === time
                      ? "bg-teal-500 text-white"
                      : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  )}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          </motion.div>
        );

      case "form":
        return (
          <motion.div
            key="form-step"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              Complete Booking
            </h2>
            <div className="mb-6">
              <p className="text-zinc-400">
                {format(selectedDate!, "EEEE, MMMM d")} at {selectedTime}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <BuildingOfficeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name (Optional)"
                  className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Additional Notes (Optional)"
                rows={3}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 border border-zinc-700 rounded-lg text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
                </button>
              </div>
            </form>
          </motion.div>
        );

      case "success":
        return (
          <motion.div
            key="success-step"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-teal-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Meeting Scheduled!
            </h2>
            <p className="text-zinc-400 mb-6">
              You're scheduled for {format(selectedDate!, "MMMM d")} at {selectedTime}.<br />
              We've sent a calendar invitation to your email.
            </p>
            <button
              onClick={resetForm}
              className="px-8 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              Schedule Another Meeting
            </button>
          </motion.div>
        );
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden">
        {/* Left Panel */}
        <div className="p-8 border-r border-zinc-800">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">INFLATE AI</h3>
              <p className="text-sm text-zinc-400">AI Voice Agent Discovery Call</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-400">
              <ClockIcon className="w-5 h-5" />
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <VideoCameraIcon className="w-5 h-5" />
              <span>Web conferencing details provided upon confirmation.</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-zinc-300">
              Book a 30-minute discovery call to discuss your AI Voice Agent project.
            </p>
            <p className="mt-4 text-sm text-zinc-400">
              If you're unable to find the Google Meet link or wish to reschedule, please let us know in advance.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mt-12">
            <div className="flex items-center space-x-4">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                step === "date" ? "bg-teal-500" : "bg-zinc-800"
              )}>
                <span className="text-white text-sm">1</span>
              </div>
              <div className={cn(
                "flex-1 h-0.5",
                step === "date" ? "bg-zinc-800" : "bg-teal-500"
              )} />
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                step === "time" ? "bg-teal-500" : "bg-zinc-800"
              )}>
                <span className="text-white text-sm">2</span>
              </div>
              <div className={cn(
                "flex-1 h-0.5",
                step === "form" || step === "success" ? "bg-teal-500" : "bg-zinc-800"
              )} />
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                step === "form" || step === "success" ? "bg-teal-500" : "bg-zinc-800"
              )}>
                <span className="text-white text-sm">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 