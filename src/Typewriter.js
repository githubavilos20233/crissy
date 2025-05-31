import React, { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    console.log("Typewriter text:", text);
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <code>{displayedText}</code>;
}
