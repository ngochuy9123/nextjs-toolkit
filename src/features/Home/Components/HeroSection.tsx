"use client";

import React, { useState, useEffect } from "react";

const TYPING_STRINGS = [
  "The Ultimate Developer Toolkit",
  "Your Daily Utilities Hub",
  "Fast. Secure. Completely Free.",
];

const HeroSection: React.FC = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = TYPING_STRINGS[phraseIndex];

      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === currentPhrase) {
        setIsDeleting(true);
        setTypingSpeed(2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_STRINGS.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[60vh] px-6 bg-surface">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-content min-h-[4rem] md:min-h-[5rem] flex items-center justify-center">
        <span>{text}</span>
        <span className="inline-block w-1 h-10 md:h-14 ml-1 bg-primary animate-pulse" />
      </h1>

      <p className="max-w-2xl mt-6 text-lg md:text-xl text-muted leading-relaxed">
        All-in-one toolkit for developers and creators.{" "}
        <br className="hidden md:block" />
        Image processing, security tools, text utilities, and document
        conversion—all in one place.
        <br />
        <span className="font-medium mt-2 inline-block">
          Fast, secure, and completely free. No sign-up required.
        </span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <button className="flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-surface rounded-full font-semibold shadow-md hover:opacity-90 transition-opacity">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
          </svg>
          Only Tools
        </button>
        <button className="px-8 py-3.5 bg-base text-content rounded-full font-semibold border border-muted hover:bg-surface transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
