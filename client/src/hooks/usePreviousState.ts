import { useEffect, useRef } from "react";

export const usePreviousState = <T>(value: T): T => {
  const ref: any = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
