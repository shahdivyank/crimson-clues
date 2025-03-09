"use client";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return Math.min(prevCount + 1, target);
        }
        clearInterval(interval);
        return target;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
};

export default AnimatedNumber;
