import React, { useState } from 'react';
import githublogo from './images/githublogo.svg';
import fbLogo from './images/fbLogo.svg';
import locationLogo from './images/locationLogo.svg';
import emailLogo from './images/emailLogo.svg';
import phoneLogo from './images/phoneLogo.svg';
import linkedin from './images/linkedIn.svg';
import github from './images/githublogo.svg';
import x from './images/x.svg';

const contacts = [
  {
    id:'1',
    text: 'Address',
    icon: locationLogo,
    name: 'Negros Occidental, Philippines',
    url: 'https://www.google.com/maps/d/viewer?mid=1WIXBuZlF97KflCe2Ep_CxG3KMSI&amp;hl=en_US&amp;ll=10.763338539632688%2C123.27355401220714&amp;z=11'
  },
  {
    id:'2',
    text: 'Email',
    icon: emailLogo,
    name: 'mbalinario015@gmail.com',
    url: 'mailto:mbalinario015@gmail.com'
  },
  {
    id:'3',
    text: 'Call me',
    icon: phoneLogo,
    name: '09515832413',
    url: ''
  },
  {
    id:'4',
    text: 'Facebook account',
    icon: fbLogo,
    name: 'Mark Corral Balinario',
    url: 'https://web.facebook.com/kramaneloj15/'
  },
  {
    id:'5',
    text: 'Linkedin Account',
    icon: linkedin,
    name: 'Mark Balinario',
    url: 'https://www.linkedin.com/in/mark-balinario-44a2ba22b/'
  },
  {
    id:'6',
    text: 'GitHub Account',
    icon: github,
    name: 'mark015',
    url: 'https://github.com/mark015'
  },
  {
    id:'7',
    text: 'Twitter account',
    icon: x,
    name: 'Mark Balinario',
    url: 'https://x.com/mBDev15'
  }
]

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log(formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="Contacts" className="py-16 px-8 bg-gray-100 transition duration-300 transform translate-y-6 opacity-0 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="wow fadeInUp mb-10 w-full mx-auto text-center" data-wow-delay=".1s" style={{ maxWidth: '570px' }}>
          <h2 className="text-4xl font-bold !leading-tight text-black dark:text-white flex flex-row justify-center items-center">
            Contact Me 
            <img src={phoneLogo} className='ml-3'/>
          </h2>
          <p>Let's keep in touch</p>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="w-[180px] bg-primary h-[2px] flex justify-center items-center">
              <div className="w-[35px] bg-primary h-[10px] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">Need Help? Let‘s connect now.</h2>
          <p className="mb-12 text-base font-medium text-body-color">Available for freelancing on suitable projects.</p>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid-cols-2 grid-cols-2 md:grid-cols-2 gap-8">
                {/* First Row */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                {/* Empty Row */}
                <div className="col-span-2 h-4">
                  
                </div>

                {/* Second Row */}
                <div className="col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
              <button className="flex items-center gap-2 rounded-md bg-primary px-9 py-4 text-base font-medium text-black duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                <div className="flex flex-row items-center gap-2">
                  Send Message
                  <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="25px"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path d="M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"></path>
                  </svg>
                </div>
              </button>


              </div>
            </form>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">Contact & Social Media</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid-cols-2 grid-cols-2 md:grid-cols-2 gap-8">
                {/* First Row */}
                <div className='flex flex-col gap-4'>
                  {contacts.map((cont, index) => (
                    <div key={cont.id} className="flex flex-row items-center gap-4 break-all">
                      <img src={cont.icon} />
                      <div className="flex flex-col">
                        <small className="font-medium text-left text-body-color">{cont.text}:</small>
                        <a
                          className="text-base font-bold text-dark hover:cursor-pointer hover:underline dark:text-white"
                          href={cont.url}
                          target="_blank"
                        >
                        {cont.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacts;
