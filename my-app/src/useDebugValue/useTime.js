import { useDebugValue, useState } from "react";

export function useTime(data){
  const [time, setTime] = useState(data);
  useDebugValue(time, time => new Date(time));
  return [time, setTime];
}