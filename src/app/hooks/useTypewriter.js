'use client';

import { useState, useEffect } from 'react';

export const useTypewriter = (texts, typingSpeed = 100, deletingSpeed = 50, delay = 1500) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    const currentText = texts[textIndex];

    if (!isDeleting) {
      typingInterval = setInterval(() => {
        setDisplayText((prevText) => prevText + currentText.charAt(charIndex));
        setCharIndex((prevIndex) => prevIndex + 1);

        if (charIndex + 1 === currentText.length) {
          clearInterval(typingInterval);
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, typingSpeed);
    } else {
      typingInterval = setInterval(() => {
        setDisplayText((prevText) => prevText.slice(0, -1));
        setCharIndex((prevIndex) => prevIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          clearInterval(typingInterval);
        }
      }, deletingSpeed);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delay]);

  return displayText + '|';
}; 