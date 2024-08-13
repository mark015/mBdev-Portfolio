import React from 'react';
import './Services.css'; // Ensure you have the CSS file for styles

function Services() {
  return (
    <section id="Services" className="py-16 px-8 bg-gray-100 transition duration-300 transform translate-y-6 opacity-0 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="wow fadeInUp mb-10 w-full mx-auto text-center" data-wow-delay=".1s" style={{ maxWidth: '570px' }}>
          <h2 className="text-4xl font-bold !leading-tight text-black dark:text-white flex flex-row justify-center items-center">
            Services
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="ml-4 text-[#83cbff] shadow-lg"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
              ></path>
              <path
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
              ></path>
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
              ></path>
              <path
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M256 48v416m208-208H48"
              ></path>
            </svg>
          </h2>
          <p className="mt-1 text-base !leading-relaxed text-gray-600 dark:text-gray-300">What I do?</p>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="w-[180px] bg-primary h-[2px] flex justify-center items-center">
              <div className="w-[35px] bg-primary h-[10px] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-full flex items-center justify-center mb-6">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rounded-full p-6 bg-primary dark:bg-opacity-10 bg-opacity-10 text-primary shadow-lg"
                height="120"
                width="120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M4 12h8"></path>
                <path d="M12 15h8"></path>
                <path d="M12 9h8"></path>
                <path d="M12 4v16"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-700 text-lg mb-6 text-justify">I specialize in user-focused UI/UX design, ensuring seamless experiences across devices. From meticulous planning to rigorous testing, every decision is driven by user insights. With a commitment to prioritizing user needs, I deliver exceptional results that align with your business objectives.</p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-full flex items-center justify-center mb-6">
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="rounded-full p-5 bg-primary dark:bg-opacity-10 bg-opacity-10 text-primary shadow-lg" 
                height="120" 
                width="120" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-700 text-lg mb-6 text-justify">As a web developer, I specialize in creating custom websites tailored to your needs. Using cutting-edge technologies and a user-centric approach, I build responsive, high-performing websites optimized for SEO and security. I ensure your website achieves your goals and delivers measurable results.</p>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-full flex items-center justify-center mb-6">
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 16 16" 
                className="rounded-full p-5 bg-primary dark:bg-opacity-10 bg-opacity-10 text-primary shadow-lg" 
                height="120" 
                width="120" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1"></path>
                <path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12 12 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7m6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.55 4.55 0 0 1 .23-2.002m-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-1.3-1.905m3.631-4.538c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Database Management</h3>
            <p className="text-gray-700 text-lg mb-6 text-justify">As a database management specialist, I provide comprehensive solutions tailored to your needs. From database design and optimization to security and maintenance, I ensure efficient data management that supports your business goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
