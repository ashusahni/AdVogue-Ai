"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { BookingCalendar } from "./BookingCalendar";

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingDialog({ isOpen, onClose }: BookingDialogProps) {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    selectedDate: "",
    selectedTime: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateTimeSelect = (date: string, time: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedDate: date,
      selectedTime: time,
    }));
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    onClose();
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      selectedDate: "",
      selectedTime: "",
    });
    setStep(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-zinc-900 border border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {step === 1 ? "Select Date & Time" : "Complete Your Booking"}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          {step === 1 ? (
            <BookingCalendar onSelect={handleDateTimeSelect} />
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-zinc-800 border-zinc-700 text-white h-24"
                />
              </div>

              <div className="pt-4 space-x-4 flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="text-white border-zinc-700 hover:bg-zinc-800"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white"
                >
                  Book Appointment
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 