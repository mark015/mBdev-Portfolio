import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Built with ❤️Love and 👨‍💻Hard Work.</h3>
          </div>
          <div className="md:w-1/2 text-right">
            <p className="text-sm">© 2024 Mark Balinario. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
