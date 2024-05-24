import { MutableRefObject, useRef } from "react";

export const Component = () => {
  const ref: MutableRefObject<string | null> = useRef<string>(null);

  // Why is this not allowed?
  ref.current = "Hello";

  return null;
};
