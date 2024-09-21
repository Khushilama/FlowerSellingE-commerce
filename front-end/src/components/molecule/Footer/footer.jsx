import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 italic">Need Help</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Track Order</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Returns & Refunds</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">FAQ's</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Career</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 italic">Company</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Gifts</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Flowers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Events</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Media</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 italic">Location</h2>
            <ul>
              <li className="mb-2"><FaEnvelope className="inline mr-2" /> beautyandblooms.com.np</li>
              <li className="mb-2"><FaMapMarkerAlt className="inline mr-2" /> Swyambhu, Karkhanachowk</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 italic">About Us</h2>
            <p className="mb-2 text-sm">"Your go-to destination for stunning flowers and unique gifts. Brighten up your space or surprise someone special with our carefully curated blooms!"</p>
          </div>
        </div>
       
        <hr className="border-gray-600 my-4" />
        <div className="text-center">
          <p className="text-lg font-bold text-gray-200">Beauty and Blooms</p>
        </div>
        <hr className="border-gray-600 my-4" />
        <div className="mt-8 text-center">
          <p className="text-sm">© 2024 Beauty and Blooms Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
