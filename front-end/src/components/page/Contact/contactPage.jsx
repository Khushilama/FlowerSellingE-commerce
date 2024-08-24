import React from 'react';
import HeaderContent from "../HeaderContent/HeaderContent";
import Footer from "../../molecule/Footer/footer";

function ContactPage() {
  return (
    <>
    <HeaderContent/>
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">We've been waiting for you.</h1>
      <p className="text-lg text-center mb-12">We want to hear from you. Let us know how we can help.</p>
      <div className="bg-white shadow rounded-lg p-8">
        <h2 className="text-xl font-bold text-center mb-6">Send us a Message</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Enter your name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <div className="mt-12">
          <Footer/>
        </div>
    </>
  );
}

export default ContactPage;