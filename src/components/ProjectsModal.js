import React from 'react';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 shadow-lg rounded-lg w-11/12 md:w-3/4 lg:w-1/2 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-200"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img
            src={project.icon}
            className="w-60 h-60 object-contain rounded-lg border-4 border-primary"
            alt={project.name}
          />
          <h3 className="text-3xl font-semibold mt-4 text-primary">
            {project.name}
          </h3>
          <p className="text-gray-700 text-lg mt-4 text-justify leading-relaxed">
            {project.text}
            {/* Add more details as needed */}
          </p>
        </div>
        <h2 className="font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {project.technologies.map((tech, index) => (
            <div key={index} className="text-center">
              <img
                src={tech.image}
                alt={`Technology ${index}`}
                className="w-16 h-16 object-contain border border-gray-300 rounded-md shadow-md"
              />
              <p className="mt-2 text-sm text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
