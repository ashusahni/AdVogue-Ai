"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CalendarIcon, ClockIcon, VideoCameraIcon, UserIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";
import { BookingDialog } from "./booking-dialog";
import { cn } from "@/lib/utils";

const meetingTypes = [
  {
    title: "30 Minute Meeting",
    description: "Quick consultation to discuss your needs",
    duration: "30 min",
    icon: ClockIcon,
  },
  {
    title: "1 Hour Strategy Call",
    description: "In-depth discussion about your business goals",
    duration: "60 min",
    icon: ClockIcon,
  },
  {
    title: "Product Demo",
    description: "See our AI voice agents in action",
    duration: "45 min",
    icon: VideoCameraIcon,
  },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

export function CalendlySection() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [selectedMeetingType, setSelectedMeetingType] = React.useState<number | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Schedule a Meeting
          </h2>
          <p className="text-lg text-zinc-400">
            Choose a meeting type and time that works best for you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {meetingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "p-6 rounded-xl border transition-all cursor-pointer",
                  selectedMeetingType === index
                    ? "bg-teal-500/10 border-teal-500"
                    : "bg-zinc-900/50 border-zinc-800 hover:border-teal-500/50"
                )}
                onClick={() => setSelectedMeetingType(index)}
              >
                <type.icon className="w-8 h-8 text-teal-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                <p className="text-zinc-400 mb-4">{type.description}</p>
                <div className="flex items-center text-sm text-teal-500">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  {type.duration}
                </div>
              </motion.div>
            ))}
          </div>

          {selectedMeetingType !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Select a Time
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <motion.button
                    key={time}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedTime(time)}
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

              {selectedTime && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 flex justify-end"
                >
                  <Button
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-teal-500 hover:bg-teal-600 text-white"
                  >
                    Confirm Booking
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
} 