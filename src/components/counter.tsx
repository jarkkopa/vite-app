import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Increase
      </button>
      <p>Counter: {count}</p>
    </div>
  );
};
