import React, { useState, useEffect } from "react";
import { useInterval } from "usehooks-ts";
import { motion } from 'framer-motion'

const Countdown = () => {
  
  const [today, setTodayDate] = useState(new Date());
  const [weddingDate, setWeddingDate] = useState(
    new Date("Sun Aug 20 2023 13:30:00")
  );
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();
  const [secs, setSecs] = useState();

  useInterval(() => {
    setTodayDate(new Date());
    setWeddingDate(weddingDate);
    const distance = weddingDate - today;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMins(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSecs(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);
  

  return (
    <>
      <div className="m-auto my-8 max-w-md">
        <div className=" flex justify-center text-center">
          <div>
            <p className="mr-3 pr-3 text-2xl font-extrabold border-neutral-50 border-r-2">
              {days}
            </p>
            <p className="mr-3 pr-3 font-extralight">Days</p>
          </div>
          <div>
            <p className="mr-3 pr-3 text-2xl font-extrabold border-neutral-50 border-r-2">
              {hours}
            </p>
            <p className="mr-3 pr-3">Hours</p>
          </div>
          <div>
            <p className="mr-3 pr-3 text-2xl font-extrabold border-neutral-50 border-r-2">
              {mins}
            </p>
            <p className="mr-3 pr-3">Minutes</p>
          </div>
          <div>
            <p className="mr-3 text-2xl font-extrabold">
              {secs}
            </p>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
