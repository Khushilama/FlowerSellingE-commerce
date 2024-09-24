import React, { useState } from 'react';
import HeaderContent from '../../page/HeaderContent/HeaderContent';
import Footer from "../../molecule/Footer/footer";
import { useNavigate } from 'react-router-dom';

function InfluencerSignupPage() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagramURL: '',
    password: '',
    picture: null,
    followersCount: 0,
    isInfluencer: false,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set isInfluencer to true if followersCount is 500 or more
    if (formData.followersCount >= 500) {
      setFormData({ ...formData, isInfluencer: true });
      console.log('Form data submitted:', formData);
      // Add form submission logic here (e.g., sending data to a server)
      navigate('/influencerProfile'); // Navigate to InfluencerProfile
    }
  };

  return (
    <>
      {/* Ensure HeaderContent is placed correctly */}
      <div className="sticky top-0 z-50">
        <HeaderContent />
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Become an Influencer</h1>
          
          <form 
            onSubmit={handleSubmit} 
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
            encType="multipart/form-data"
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

            {/* Instagram URL Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instagramURL">
                Instagram URL
              </label>
              <input
                type="url"
                name="instagramURL"
                id="instagramURL"
                value={formData.instagramURL}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Instagram URL"
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
                accept=".png,.jpg,.jpeg"
              />
            </div>

            {/* Followers Count Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="followersCount">
                Followers Count
              </label>
              <input
                type="number"
                name="followersCount"
                id="followersCount"
                value={formData.followersCount}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your followers count"
                required
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
      
      {/* Ensure Footer is placed correctly at the bottom */}
      <Footer />
    </>
  );
}

export default InfluencerSignupPage;
