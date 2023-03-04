import React from "react";
import {useTimer} from "react-timer-hook";

type Output = {
    seconds: number
}
export function useTimerHook(num:number):Output {
  const time = new Date();
  time.setSeconds(time.getSeconds() + num);
  const {seconds} = useTimer({
    expiryTimestamp: time,
    autoStart: true,
  });

  return {
    seconds: seconds
  }
}
