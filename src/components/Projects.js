import React, { useState } from 'react';
import aics from './images/projects/system.png';
import bugasong from './images/projects/bugasong.png';
import rhu from './images/projects/rhu.png';
import teamasenso from './images/projects/teamasenso.png';
import anotherProject from './images/projects/toboso.png'; // Add your new project's image import here
import cdrrmo from './images/projects/cdrrmo-1.png'; // Add your new project's image import here
import scshs from './images/projects/scshs-1.png'; // Add your new project's image import here

import Modal from './ProjectsModal'; // Adjust the import path if needed
import githublogo from './images/githublogo.svg';
import browser from './images/browser.svg';
import html from './images/html.svg';
import bootstrap from './images/bootstrap.svg';
import css from './images/css.svg';
import jquery from './images/jquery.svg';
import mysql from './images/mysql.svg';
import php from './images/php.svg';
import javascript from './images/javascript.svg';
import xampp from './images/xampp.svg';
import hostinger from './images/hostinger.svg';

const projects = [
  {
    name: 'AICS Information System',
    icon: aics,
    logo: githublogo,
    logoName: 'GitHub',
    text: 'The AICS Information System manages various aspects of the Assistance to Individuals in Crisis Situation (AICS) program, improving efficiency, transparency, and effectiveness in delivering aid.',
    technologies: [
      { image: html, name: 'HTML' },
      { image: bootstrap, name: 'Bootstrap' },
      { image: css, name: 'CSS' },
      { image: jquery, name: 'JQuery' },
      { image: javascript, name: 'JavaScript' },
      { image: php, name: 'PHP' },
      { image: mysql, name: 'MySQL' },
      { image: xampp, name: 'XAMPP' },
    ],
    moreInfoLink: 'https://github.com/mark015/AICS-MIS.git',
  },
  {
    name: 'Barbaza RHU Record and Appointment System',
    icon: rhu,
    logo: githublogo,
    logoName: 'GitHub',
    text: 'A digital solution for Barbaza RHU that streamlines patient record management and appointment scheduling, with SMS notifications for better compliance.',
    technologies: [
      { image: html, name: 'HTML' },
      { image: bootstrap, name: 'Bootstrap' },
      { image: css, name: 'CSS' },
      { image: jquery, name: 'JQuery' },
      { image: javascript, name: 'JavaScript' },
      { image: php, name: 'PHP' },
      { image: mysql, name: 'MySQL' },
      { image: xampp, name: 'XAMPP' },
    ],
    moreInfoLink: 'https://github.com/mark015/RHU.git',
  },
  {
    name: 'Bugasong Enterprise Online Application System',
    icon: bugasong,
    logo: githublogo,
    logoName: 'GitHub',
    text: 'A platform for grocery businesses in Bugasong, enabling customers to browse, order, and pay for products online, with tools for inventory and order management.',
    technologies: [
      { image: html, name: 'HTML' },
      { image: bootstrap, name: 'Bootstrap' },
      { image: css, name: 'CSS' },
      { image: jquery, name: 'JQuery' },
      { image: javascript, name: 'JavaScript' },
      { image: php, name: 'PHP' },
      { image: mysql, name: 'MySQL' },
      { image: xampp, name: 'XAMPP' },
    ],
    moreInfoLink: 'https://github.com/mark015/Bugason-Enterprise-Online-Application-System.git',
  },
  {
    name: 'Team Asenso Management Information System',
    icon: teamasenso,
    logo: browser,
    logoName: 'Website',
    text: 'A system for tracking and managing voting participation, with QR code scanning to record voting status and reporting features for analyzing voter turnout.',
    technologies: [
      { image: html, name: 'HTML' },
      { image: bootstrap, name: 'Bootstrap' },
      { image: css, name: 'CSS' },
      { image: jquery, name: 'JQuery' },
      { image: javascript, name: 'JavaScript' },
      { image: php, name: 'PHP' },
      { image: mysql, name: 'MySQL' },
      { image: hostinger, name: 'Hostinger' },
    ],
    moreInfoLink: 'https://example.com/team-asenso',
  },
  {
    name: ' Municipality of Toboso Website',
    icon: anotherProject, // Use the image for the new project
    logo: browser,
    logoName: 'Website',
    text: 'The Municipality of Toboso Website is an official online platform designed to provide residents, visitors, and stakeholders with easy access to information about the municipality. The website serves as a hub for local government updates, public announcements, services, and resources. It offers users a convenient way to explore Toboso`s history, culture, and development initiatives. Additionally, the website may feature interactive tools such as contact forms, service requests, and access to important documents, helping to enhance transparency and communication between the local government and the community.',
    technologies: [
      { image: html, name: 'HTML' },
      { image: bootstrap, name: 'Bootstrap' },
      { image: css, name: 'CSS' },
      { image: jquery, name: 'JQuery' },
      { image: javascript, name: 'JavaScript' },
      { image: php, name: 'PHP' },
      { image: mysql, name: 'MySQL' },
      { image: hostinger, name: 'Hostinger' },
    ],
    moreInfoLink: 'https://example.com/another-project',
  },
  {
    name: 'CDRRMO Information System',
    icon: cdrrmo, // Use the image for the new project
    logo: githublogo,
    logoName: 'GitHub',
    text: 'The CDRRMO Information System is a specialized platform designed to support the operations of the City Disaster Risk Reduction and Management Office (CDRRMO). This system aims to streamline the management of disaster-related information, facilitate quick and efficient response actions, and enhance communication during emergencies. It typically includes modules for incident reporting, resource management, personnel tracking, and real-time data visualization, allowing the CDRRMO to coordinate effectively with various stakeholders and improve disaster preparedness and response in the community.',
    technologies: [
      { image: html, name: 'HTML' },
      { image: bootstrap, name: 'Bootstrap' },
      { image: css, name: 'CSS' },
      { image: jquery, name: 'JQuery' },
      { image: javascript, name: 'JavaScript' },
      { image: php, name: 'PHP' },
      { image: mysql, name: 'MySQL' },
      { image: xampp, name: 'XAMPP' },
    ],
    moreInfoLink: 'https://example.com/another-project',
  },
  {
    name: 'SSG Voting System with SMS notification',
    icon: scshs, // Use the image for the new project
    logo: githublogo,
    logoName: 'GitHub',
    text: 'The SSG Voting System with SMS Notification includes advanced features to keep students informed throughout the election process. The system sends SMS notifications to students to confirm their eligibility to vote on a specific day, ensuring they don`t miss their opportunity to participate. Additionally, the system notifies all students when the election period begins and ends, providing timely reminders to encourage voter participation. These notifications help maintain an organized and transparent election process while enhancing student engagement.',
    technologies: [
      { image: html, name: 'HTML' },
      { image: bootstrap, name: 'Bootstrap' },
      { image: css, name: 'CSS' },
      { image: jquery, name: 'JQuery' },
      { image: javascript, name: 'JavaScript' },
      { image: php, name: 'PHP' },
      { image: mysql, name: 'MySQL' },
      { image: xampp, name: 'XAMPP' },
    ],
    moreInfoLink: 'https://example.com/another-project',
  }
];

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="Projects" className="py-16 px-8 bg-gray-100 transition duration-300 transform translate-y-6 opacity-0 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="wow fadeInUp mb-10 w-full mx-auto text-center" data-wow-delay=".1s" style={{ maxWidth: '570px' }}>
          <h2 className="text-4xl font-bold !leading-tight text-black dark:text-white flex flex-row justify-center items-center">
            Projects
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="ml-4 text-[#635994]"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-5-5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 4h8v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1z"></path>
            </svg>
          </h2>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="w-[180px] bg-primary h-[2px] flex justify-center items-center">
              <div className="w-[35px] bg-primary h-[10px] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.slice(0, showMore ? projects.length : 4).map((project, index) => (
            <div key={index} className="bg-white p-8 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="w-full flex items-center justify-center mb-6">
                <img
                  src={project.icon}
                  className="w-80 h-80 md:w-96 md:h-96 object-contain rounded-lg border-4 border-primary"
                  alt={project.name}
                />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">
                {project.name}
              </h3>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="bg-primary text-black py-2 px-4 rounded-lg hover:bg-opacity-90 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  Learn More
                </button>
                <a
                  href={project.moreInfoLink}
                  className="bg-primary text-black py-2 px-4 rounded-lg hover:bg-opacity-90 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.logoName}
                  <img src={project.logo} alt="Logo" className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleToggleShowMore}
            className="bg-primary text-black py-2 px-4 rounded-lg hover:bg-opacity-90 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            {showMore ? 'See Less' : 'See More'}
          </button>
        </div>

        {/* Render the modal */}
        {selectedProject && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />
        )}
      </div>
    </section>
  );
}

export default Projects;
