import React from 'react';
import './Home.css'; // Ensure you have the CSS file for styles
import lr from './images/lr.png';
import html from './images/html.svg';
import bootstrap from './images/bootstrap.svg';
import css from './images/css.svg';
import jquery from './images/jquery.svg';
import mysql from './images/mysql.svg';
import php from './images/php.svg';
import javascript from './images/javascript.svg';
import xampp from './images/xampp.svg';

// Sample experience data
const experiences = [
  {
    id: 1,
    companyName: 'LR Tech Computer Installation Services',
    location: 'Sagay City, Negros Occidental',
    role: 'Web Developer',
    duration: '07/17/19 – 07/14/22',
    description: [
      'Work with clients to determine the needs and requirements of a website or application and to meet deliverables of the project. ',
      'Design website architecture and website interface using HTML, CSS, CMS and page builders.',
      'Write efficient and testable code using best software practices.',
      'Integrate data from back-end services and databases',
      'Provide hardware, software support and training to end user.',
      'Manage cPanel, hosting, domain, databases and mail servers'
    ],
    technologies: [html, bootstrap, javascript, css, jquery, php, mysql, xampp]
  }
  // Add more experience objects here
];

function Experience() {
  return (
    <section id="Experience" className="py-16 px-8 bg-gray-100 transition duration-300 transform translate-y-6 opacity-0 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="wow fadeInUp mb-10 w-full mx-auto text-center" data-wow-delay=".1s" style={{ maxWidth: '570px' }}>
          <h2 className="text-4xl font-bold !leading-tight text-black dark:text-white flex flex-row justify-center items-center">
            Experience
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="ml-4 text-[#8c5543]"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path>
            </svg>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">I have 2 years of experience as a full-stack web developer.</p>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="w-[180px] bg-primary h-[2px] flex justify-center items-center">
              <div className="w-[35px] bg-primary h-[10px] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 hover:scale-105 hover:shadow-xl relative flex flex-col items-center">
              <img
                alt="Company Logo"
                className="w-24 h-24 rounded-full border-4 border-primary mb-4"
                src={lr} // Replace with company logo if available
              />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {exp.role} ▪ {exp.duration}
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {exp.companyName} ▪ {exp.location}
              </h4>
              <div className="mt-4">
                {exp.description.map((desc, index) => (
                  <p key={index} className="text-gray-700 dark:text-gray-300">
                    ▪ {desc}
                  </p>
                ))}
              </div>
              <div className="mt-4">
                <h5 className="font-bold text-gray-900 text-center dark:text-gray-100">Technologies</h5>
                <ul className="flex flex-wrap gap-4 mt-2">
                  {exp.technologies.map((tech, index) => (
                    <li key={index} className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300">
                      <img alt="Technology" className="w-6 h-6" src={tech} />
                      {['HTML', 'Bootstrap', 'JavaScript', 'CSS', 'jQuery', 'PHP', 'MySQL', 'XAMPP'][index]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          </div>
      </div>
    </section>
  );
}

export default Experience;
