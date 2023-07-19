import { useState } from "react";

export function useIpt(init){
  const [value, setValue] = useState(init);
  const clear = () => { setValue(init) };
  const bind = {
    value,
    onChange : eve =>{setValue(eve.target.value)}
  }
  return [value, clear, bind];
}