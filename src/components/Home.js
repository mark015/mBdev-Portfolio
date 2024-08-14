import React, { useState, useEffect } from 'react';
import './Home.css'; // Ensure you have the CSS file for styles
import myLogo from './images/myLogo-1.PNG';

function TypewriterText() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Web Developer';
  const typingSpeed = 200; // Speed in milliseconds
  const deletingSpeed = 175; // Speed in milliseconds

  useEffect(() => {
    let index = 0;
    let timer;

    const type = () => {
      timer = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index += 1;
        if (index === fullText.length) {
          setIsDeleting(true);
          clearInterval(timer);
        }
      }, typingSpeed);
    };

    const erase = () => {
      timer = setInterval(() => {
        setText(fullText.slice(0, index));
        index -= 1;
        if (index < 0) {
          setIsDeleting(false);
          clearInterval(timer);
          setTimeout(() => type(), typingSpeed); // Restart typing
        }
      }, deletingSpeed);
    };

    if (isDeleting) {
      erase();
    } else {
      type();
    }

    return () => clearInterval(timer);
  }, [isDeleting]);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
      {text}
      <span className="blink-caret">|</span>
    </div>
  );
}

function Home() {
  return (
    <section id="Home" className="animate-home py-16 px-8 transition duration-300 transform translate-y-6 opacity-0 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center md:pr-8">
            <p className="text-2xl">
              Hi there <span className="hi inline text-4xl">👋</span>, I'm
            </p>
            <h1 className="text-4xl font-bold leading-tight text-primary sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight text-blue-700">
              MARK BALINARIO
            </h1>
            <div className="mt-3 flex flex-row text-lg sm:text-3xl font-bold text-dark dark:text-secondary  sm:justify-start">
              <span className="pr-2">👨‍💻</span>
              <TypewriterText />
            </div>
            <div className="m-2">
              <p className="text-lg mb-6">
                I'm passionate web developer with a knack for crafting modern, responsive, and user-friendly web applications. I thrive on solving complex problems and continually improving my skills. My approach to development is grounded in a commitment to quality, efficiency, and user-centric design.
              </p>
            </div>
            <div className="flex justify-center items-center space-x-6">
              {/* GitHub Icon */}
              <a
                href="https://github.com/mark015"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full text-white hover:bg-gray-600 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.47 0 1.06-.01 1.92-.01 2.18 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="https://web.facebook.com/kramaneloj15/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full text-white hover:bg-gray-600 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>

              {/* Gmail Icon */}
              <a
                href="mailto:mbalinario015@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full text-white hover:bg-gray-600 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 2h-11A1.5 1.5 0 001 3.5v9A1.5 1.5 0 002.5 14h11a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0013.5 2zM12 3h1.5c.276 0 .5.224.5.5V5l-6 4.5L2 5V3.5c0-.276.224-.5.5-.5H4v2.205l3.5 2.625L11 5.205V3zm-9.5 10A.5.5 0 012 12.5v-7l5.747 4.31a.502.502 0 00.507 0L14 5.5v7a.5.5 0 01-.5.5h-11z"/>
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/mark-balinario-44a2ba22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full text-white hover:bg-gray-600 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center order-first md:order-last justify-center">
            <img
              src={myLogo}
              alt="Sample"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
