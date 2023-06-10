"use client"

import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function DatePicker() {
  const [range, setRange] = useState(null);
  const [show, setShow] = useState(false);

  let footer = <p>Pilih tanggal terlebih dahulu.</p>;
  if (range?.from) {
    console.log(range.from, range.to);
    if (!range.to) {
      footer = <p>{format(range.from, 'PP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PP')} – {format(range.to, 'PP')}
        </p>
      );
    }
  }

  return (
    <div>
      <button onClick={()=>setShow(!show)} className="px-4 py-1 bg-red-600 text-white rounded-md hover:bg-red-500" >{show ? (range? 'Oke': 'Pilih tanggal') : 'Pilih tanggal'}</button>
      <br />
      {/* {range ? footer : <span>Pick a date</span>} */}
      {
         show && (
           <DayPicker
             defaultMonth={new Date()}
             mode="range"
             min={2}
             max={30}
             selected={range}
             onSelect={setRange}
             modifiersClassNames={{
              selected: 'selected',
              today: 'today',
              range_start: 'range-start',
              range_end: 'range-end',
            }}
            modifiersStyles={{
              disabled: { fontSize: '75%' }
            }}
             footer={footer}
           />
         )
      }

    </div>
  );
}
