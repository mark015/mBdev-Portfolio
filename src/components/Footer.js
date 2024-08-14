import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white items-center py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Built with ❤️Love and 👨‍💻Hard Work.</h3>
            <p className="text-sm">© 2024 Mark Balinario. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
