// components/Layout.js
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-800 text-white  w-full flex-col ">
      <aside className="md:w-64 flex flex-col items-center p-5 md:fixed relative w-full h-full bg-gray-900">
        <div className="text-center mb-5">
          <img src="/profile.jpg" alt="John Doe" className="rounded-full w-24 h-24" />
          <h1 className="text-xl mt-2">John Doe</h1>
          <p className="text-lg">Web Developer</p>
        </div> 
        <div className="flex space-x-4 mb-5">
          <a href="https://twitter.com" className="text-white text-2xl">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" className="text-white text-2xl">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" className="text-white text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" className="text-white text-2xl">
            <FaInstagram />
          </a>
        </div>
        <div className="w-full">
          <Link href="/download-cv">
            <p className="block w-full bg-blue-600 text-center py-2 mb-2 rounded">Download CV</p>
          </Link>
          <Link href="/contact">
            <p className="block w-full bg-blue-600 text-center py-2 rounded">Contact Me</p>
          </Link>
        </div>
      </aside>
      <main className="flex-grow p-5 ml-0 md:ml-64 bg-gray-700 h-fit">
        {children}
      </main>
    </div>
  );
};

export default Layout;
