"use client"

import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function DatePicker() {
  const [range, setRange] = useState();

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }
  const handleDayClick = (day) => setSelectedDay(day);

  return (
    <DayPicker
      defaultMonth={new Date(2022, 8)}
      mode="range"
      min={1}
      max={6}
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
}
