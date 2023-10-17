import React, { useEffect, useState } from "react";
import { calculateDays } from "../functions";

export default function VideoSlice(props) {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(calculateDays(props.time));
  }, []);
  return (
    <div className = "flex justify-center h-1/4">
    <div className="flex w-[1280px] sm:min-w-[600px] my-2 sm:my-4">
      <img
        src={props.thumbnails}
        alt="img"
        className="object-cover rounded-xl w-1/3 sm:w-1/2 md:w-1/4"
      />
      <div className = "mx-4">
        <div>
          <div className = "font-bold text-[2.2vw] sm:text-lg">{props.title}</div>
          
        </div>

        <div className = "flex text-[1.8vw] sm:text-base">
          <div>{props.channel}</div>
          <div className = "mx-2">|</div>
          <div>{time}</div>
        </div>

        <div className = "text-[1.5vw] sm:text-base">{props.description}</div>
      </div>
    </div>
    </div>
  );
}
