import { useState } from "react";

const FirstHook = (initialState: number) => {
  const [count, setCount] = useState(initialState);

  const newCount = (count: number) => setCount(count + 1);

  return [count, newCount];
};

export default FirstHook;
