"use client";

import * as React from "react";
import { format, addDays, startOfToday, isSameDay } from "date-fns";
import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface BookingCalendarProps {
  onSelect: (date: string, time: string) => void;
}

export function BookingCalendar({ onSelect }: BookingCalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = React.useState<string>("");
  const [selectedMinute, setSelectedMinute] = React.useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = React.useState<"AM" | "PM">("AM");

  const today = startOfToday();
  const availableDates = Array.from({ length: 14 }, (_, i) => addDays(today, i));

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const minutes = ["00", "30"];
  const periods = ["AM", "PM"];

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleNext = () => {
    if (selectedDate && selectedHour && selectedMinute && selectedPeriod) {
      const formattedDate = format(selectedDate, "MMMM d, yyyy");
      const formattedTime = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;
      onSelect(formattedDate, formattedTime);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-7 gap-2">
        {availableDates.map((date, i) => (
          <motion.button
            key={date.toISOString()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            onClick={() => handleDateClick(date)}
            className={cn(
              "p-2 rounded-lg text-sm transition-colors",
              selectedDate && isSameDay(date, selectedDate)
                ? "bg-teal-500 text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            )}
          >
            <span className="block text-xs mb-1">{format(date, "EEE")}</span>
            <span className="block font-semibold">{format(date, "d")}</span>
          </motion.button>
        ))}
      </div>

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-zinc-400">
                Hour
              </label>
              <select
                value={selectedHour}
                onChange={(e) => setSelectedHour(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-white focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-zinc-400">
                Minute
              </label>
              <select
                value={selectedMinute}
                onChange={(e) => setSelectedMinute(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-white focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select</option>
                {minutes.map((minute) => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-zinc-400">
                AM/PM
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value as "AM" | "PM")}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2 text-white focus:ring-2 focus:ring-teal-500"
              >
                {periods.map((period) => (
                  <option key={period} value={period}>
                    {period}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {selectedHour && selectedMinute && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-end"
            >
              <Button
                onClick={handleNext}
                className="bg-teal-500 hover:bg-teal-600 text-white"
              >
                Next
              </Button>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
} 