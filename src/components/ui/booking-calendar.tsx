"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, getDay, addDays } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon, VideoCameraIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

type Step = "date" | "time" | "form";

export function BookingCalendar() {
  const [step, setStep] = React.useState<Step>("date");
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  // Get the first day and last day of current month
  const firstDay = startOfMonth(currentDate);
  const lastDay = endOfMonth(currentDate);

  // Get all days in the current month
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });

  // Calculate empty days at the start (Monday = 1, Sunday = 0)
  const firstDayOfWeek = getDay(firstDay);
  const emptyDays = Array.from({ length: firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1 });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  // Get next 30 days for available dates
  const availableDates = Array.from({ length: 30 }, (_, i) => addDays(new Date(), i));

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM"
  ];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setStep("time");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("form");
  };

  const handleBack = () => {
    if (step === "time") {
      setStep("date");
      setSelectedTime(null);
    } else if (step === "form") {
      setStep("time");
    }
  };

  const renderDateSelection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full"
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

      <div className="text-center mb-6">
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
        {days.map((day) => {
          const isToday = isSameDay(day, new Date());
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const isAvailable = availableDates.some(d => isSameDay(d, day));
          const isCurrentMonth = isSameMonth(day, currentDate);

          return (
            <motion.button
              key={day.toISOString()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => isAvailable && handleDateSelect(day)}
              disabled={!isAvailable || !isCurrentMonth}
              className={cn(
                "p-2 w-full rounded-lg text-sm transition-colors relative",
                isSelected ? "bg-teal-500 text-white" : "",
                isToday && !isSelected ? "text-teal-500 border border-teal-500" : "",
                isAvailable && !isSelected && isCurrentMonth ? "text-zinc-300 hover:bg-zinc-800" : "",
                (!isAvailable || !isCurrentMonth) ? "text-zinc-700 cursor-not-allowed" : ""
              )}
            >
              {format(day, "d")}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );

  const renderTimeSelection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full"
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

      <div className="text-center mb-6">
        <p className="text-zinc-400">
          {selectedDate && format(selectedDate, "EEEE, MMMM d")}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
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

  const renderBookingForm = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full"
    >
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </button>
        <h2 className="text-2xl font-semibold text-white">Complete Booking</h2>
      </div>

      <div className="text-center mb-6">
        <p className="text-zinc-400">
          {selectedDate && format(selectedDate, "EEEE, MMMM d")} at {selectedTime}
        </p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-zinc-400">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-zinc-400">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-zinc-400">
            Phone Number
          </label>
          <input
            type="tel"
            required
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-zinc-400">
            Additional Notes
          </label>
          <textarea
            rows={3}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          />
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="w-full p-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Schedule Meeting
          </button>
        </div>
      </form>
    </motion.div>
  );

  return (
    <div id="booking" className="w-full max-w-6xl mx-auto scroll-mt-20">
      <div className="grid md:grid-cols-2 bg-[#0A0A0A] rounded-2xl overflow-hidden border border-zinc-800">
        {/* Left Panel */}
        <div className="p-8 border-r border-zinc-800">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
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
                step === "date" ? "bg-teal-500" : "bg-teal-500"
              )}>
                <span className="text-white text-sm">1</span>
              </div>
              <div className={cn(
                "flex-1 h-0.5",
                step === "time" || step === "form" ? "bg-teal-500" : "bg-zinc-800"
              )} />
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                step === "time" || step === "form" ? "bg-teal-500" : "bg-zinc-800"
              )}>
                <span className="text-white text-sm">2</span>
              </div>
              <div className={cn(
                "flex-1 h-0.5",
                step === "form" ? "bg-teal-500" : "bg-zinc-800"
              )} />
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                step === "form" ? "bg-teal-500" : "bg-zinc-800"
              )}>
                <span className="text-white text-sm">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === "date" && renderDateSelection()}
            {step === "time" && renderTimeSelection()}
            {step === "form" && renderBookingForm()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}