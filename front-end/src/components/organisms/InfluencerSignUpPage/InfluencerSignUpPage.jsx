import React, { useState } from 'react';
import HeaderContent from '../../page/HeaderContent/HeaderContent';
import Footer from "../../molecule/Footer/footer";

function InfluencerSignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    socialMediaHandle: '',
    password: '',
    picture: null, // Updated field name
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      setFormData({ ...formData, [name]: files[0] }); // Save the image file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data for now, including picture
    console.log('Form data submitted:', formData);
    // Add form submission logic here (e.g., sending data to a server)
  };

  return (
    <>
      <HeaderContent />
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Become an Influencer</h1>
          <form 
            onSubmit={handleSubmit} 
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
            encType="multipart/form-data" // Needed for file uploads
          >
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Social Media Handle Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="socialMediaHandle">
                Social Media Handle
              </label>
              <input
                type="text"
                name="socialMediaHandle"
                id="socialMediaHandle"
                value={formData.socialMediaHandle}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your social media handle"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Picture Upload */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="picture">
                Upload Your Picture
              </label>
              <input
                type="file"
                name="picture"
                id="picture"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                accept=".png,.jpg,.jpeg" // Restrict to image file types
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InfluencerSignupPage;
