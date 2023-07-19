import { useEffect } from "react";

export function useDocTitle(value) { 
  useEffect(() => { 
    document.title = value;
  },[value])
}