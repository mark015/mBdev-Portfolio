import React from 'react';
import './Skills.css'; // Ensure you have the CSS file for styles
import html from './images/html.svg';
import apache from './images/apache.svg';
import bitbucket from './images/bitbucket-icon.svg';
import bootstrap from './images/bootstrap.svg';
import chrome from './images/chrome.svg';
import css from './images/css.svg';
import git from './images/git.svg'; 
import jquery from './images/jquery.svg';
import laravel from './images/laravel-2.svg';
import mysql from './images/mysql.svg';
import php from './images/php.svg';
import react from './images/react.svg';
import javascript from './images/javascript.svg';
import tailwind from './images/tailwind-css.svg';
import xampp from './images/xampp.svg';
import dev from './images/dev.jpg';
import blur from './images/blur.svg';
import github from './images/githublogo.svg';

function Skills() {
  const skills = [
    { name: 'HTML', icon: html },
    { name: 'JavaScript', icon: javascript },
    { name: 'PHP', icon: php },
    { name: 'CSS', icon: bootstrap },
    { name: 'Bootstrap', icon:css },
    { name: 'JQUERY', icon: jquery },
    { name: 'MySql', icon: mysql },
    { name: 'React', icon: react },
    { name: 'Laravel', icon:laravel },
    { name: 'Tailwind CSS', icon:tailwind },
    { name: 'GIT', icon: git },
    { name: 'Github', icon: github },
    { name: 'Bitbucket', icon: bitbucket },
    { name: 'Apache', icon: apache },
    { name: 'Xampp', icon: xampp },
    { name: 'DevTools', icon: chrome },
  ];

  return (
    <section id="Skills" className="py-16 px-8 bg-gray-100 transition duration-300 transform translate-y-6 opacity-0 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="wow fadeInUp mb-10 w-full mx-auto text-center" data-wow-delay=".1s" style={{ maxWidth: '570px' }}>
          <h2 className="text-4xl font-bold !leading-tight text-black dark:text-white flex flex-row justify-center items-center">
            My Skills
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 352 512"
              className="text-[#fabe2e] ml-4 shadow-lg"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path>
            </svg>
          </h2>
          <p className="mt-1 text-base !leading-relaxed text-body-color">Coding with Compassion, Communicating with Clarity</p>
          <div className="w-full flex justify-center items-center mt-2">
            <div className="w-[180px] bg-primary h-[2px] flex justify-center items-center">
              <div className="w-[35px] bg-primary h-[10px] rounded-full"></div>
            </div>
          </div>
        </div>
        <h2 className='text-2xl font-bold !leading-tight text-black dark:text-white flex flex-row'>Technical Skills</h2>
        <div className="marquee-container">
          <div className="marquee-content">
            {skills.concat(skills).map((skill, index) => (
            <div key={index} className="marquee-item flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md shadow-lg w-32 h-40">
            <img
              alt={skill.name}
              loading="lazy"
              width="50"
              height="50"
              decoding="async"
              className="w-16 h-16 mb-2"
              src={skill.icon}
              style={{ color: 'transparent' }}
            />
            <span className="text-center text-sm font-medium">{skill.name}</span>
          </div>
            
            ))}
          </div>
        </div>
        <h2 className='text-2xl font-bold !leading-tight text-black dark:text-white flex flex-row mt-5'>Soft Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center md:pr-8">
              
            <div className="glow-container-experience-1 glow-container mb-5" style={{ "--gap": 32, "--blur": 12, "--spread": 80, "--direction": "row" }}>
              <article className="glow-card glow-card-experience-1 h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-opacity-20 dark:bg-dark text-gray-200 rounded-xl hover:border-transparent w-full" style={{ "--active": 0, "--start": 256.4273442001659 }}>
                <div className="glows"></div>
                <div className="relative p-3">
                  <img
                    alt="Hero"
                    loading="lazy"
                    width="1080"
                    height="200"
                    decoding="async"
                    className="absolute bottom-0 opacity-80"
                    src={blur}
                    style={{ color: "transparent" }}
                  />
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-primary transition-all duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="1"
                        viewBox="0 0 48 48"
                        enableBackground="new 0 0 48 48"
                        height="50"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle fill="#FFF59D" cx="24" cy="22" r="20"></circle>
                        <path
                          fill="#FBC02D"
                          d="M37,22c0-7.7-6.6-13.8-14.5-12.9c-6,0.7-10.8,5.5-11.4,11.5c-0.5,4.6,1.4,8.7,4.6,11.3c1.4,1.2,2.3,2.9,2.3,4.8V37h12v-0.1c0-1.8,0.8-3.6,2.2-4.8C35.1,29.7,37,26.1,37,22z"
                        ></path>
                        <path
                          fill="#FFF59D"
                          d="M30.6,20.2l-3-2c-0.3-0.2-0.8-0.2-1.1,0L24,19.8l-2.4-1.6c-0.3-0.2-0.8-0.2-1.1,0l-3,2c-0.2,0.2-0.4,0.4-0.4,0.7s0,0.6,0.2,0.8l3.8,4.7V37h2V26c0-0.2-0.1-0.4-0.2-0.6l-3.3-4.1l1.5-1l2.4,1.6c0.3,0.2,0.8,0.2,1.1,0l2.4-1.6l1.5,1l-3.3,4.1C25.1,25.6,25,25.8,25,26v11h2V26.4l3.8-4.7c0.2-0.2,0.3-0.5,0.2-0.8S30.8,20.3,30.6,20.2z"
                        ></path>
                        <circle fill="#5C6BC0" cx="24" cy="44" r="3"></circle>
                        <path
                          fill="#9FA8DA"
                          d="M26,45h-4c-2.2,0-4-1.8-4-4v-5h12v5C30,43.2,28.2,45,26,45z"
                        ></path>
                        <g fill="#5C6BC0">
                          <path d="M30,41l-11.6,1.6c0.3,0.7,0.9,1.4,1.6,1.8l9.4-1.3C29.8,42.5,30,41.8,30,41z"></path>
                          <polygon points="18,38.7 18,40.7 30,39 30,37"></polygon>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-2 text-base font-medium text-black sm:text-xl">
                        Problem Solving and Critical Thinking
                      </p>
                      <p className="text-sm text-black text-body-color">
                        Being adept at identifying issues, analyzing them logically, and finding effective solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="glow-container-experience-1 glow-container mb-5" style={{ "--gap": 32, "--blur": 12, "--spread": 80, "--direction": "row" }}>
              <article className="glow-card glow-card-experience-1 h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-opacity-20 dark:bg-dark text-gray-200 rounded-xl hover:border-transparent w-full" style={{ "--active": 0, "--start": 256.4273442001659 }}>
                <div className="glows"></div>
                <div className="relative p-3">
                  <img
                    alt="Hero"
                    loading="lazy"
                    width="1080"
                    height="200"
                    decoding="async"
                    className="absolute bottom-0 opacity-80"
                    src={blur}
                    style={{ color: "transparent" }}
                  />
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-primary transition-all duration-300">
                      <svg
                        stroke="currentColor"
                        fill="#FF0000"  // This sets the color to red
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="50"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="mb-2 text-base font-medium text-black sm:text-xl">
                        Empathy and User-Centered Thinking
                      </p>
                      <p className="text-sm text-black text-body-color">
                        Understanding others‘ perspectives and needs, and designing solutions with users in mind.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="glow-container-experience-1 glow-container mb-5" style={{ "--gap": 32, "--blur": 12, "--spread": 80, "--direction": "row" }}>
              <article className="glow-card glow-card-experience-1 h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-opacity-20 dark:bg-dark text-gray-200 rounded-xl hover:border-transparent w-full" style={{ "--active": 0, "--start": 256.4273442001659 }}>
                <div className="glows"></div>
                <div className="relative p-3">
                  <img
                    alt="Hero"
                    loading="lazy"
                    width="1080"
                    height="200"
                    decoding="async"
                    className="absolute bottom-0 opacity-80"
                    src={blur}
                    style={{ color: "transparent" }}
                  />
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-primary transition-all duration-300">
                      <svg
                        stroke="currentColor"
                        fill="#007BFF" // Set to blue
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="50"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path>
                      </svg>

                    </div>
                    <div>
                      <p className="mb-2 text-base font-medium text-black sm:text-xl">
                        Teamwork and Collaboration
                      </p>
                      <p className="text-sm text-black text-body-color">
                        Working effectively with others, communicating ideas, and achieving shared goals as a team.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex items-center order-first md:order-last justify-center">
            <img
              src={dev}
              alt="Sample"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
