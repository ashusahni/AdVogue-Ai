"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BookingCalendar } from "./BookingCalendar";
import { BookingForm, BookingFormData } from "./BookingForm";

export function Booking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"calendar" | "form">("calendar");

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setStep("form");
  };

  const handleBack = () => {
    setStep("calendar");
  };

  const handleSubmit = async (formData: BookingFormData) => {
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", {
      ...formData,
      date: selectedDate,
      time: selectedTime,
    });
    // You can add your form submission logic here
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {step === "calendar" && (
          <BookingCalendar onDateSelect={handleDateTimeSelect} />
        )}
        {step === "form" && selectedDate && selectedTime && (
          <BookingForm
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>
    </div>
  );
} 