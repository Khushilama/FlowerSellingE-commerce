import React, { useState } from 'react';
import HeaderContent from '../../page/HeaderContent/HeaderContent';
import Footer from "../../molecule/Footer/footer";
import { useNavigate } from 'react-router-dom';

function InfluencerSignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagramUsername: '',
    password: '',
    picture: null,
    followersCount: '',
    isInfluencer: false,
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const fetchFollowerCount = async (username) => {
    try {
      const response = await fetch('http://localhost:5500/followers');
  
      if (!response.ok) {
        throw new Error(`Failed to fetch follower data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Fetched data:', data); // Log entire fetched data
  
      if (!data || !Array.isArray(data) || data.length === 0) {
        console.log('Followers array is empty or not an array.');
        return 0;
      }
  
      // Log comparison details for each follower entry
      data.forEach(follower => {
        console.log(`Checking username: ${follower.username} against ${username.trim().toLowerCase()}`);
      });
  
      const followerData = data.find(follower => follower.username.toLowerCase() === username.trim().toLowerCase());
  
      if (followerData) {
        console.log(`Follower Count for ${username}:`, followerData.follower_count);
        return followerData.follower_count;
      } else {
        console.log(`No follower data found for username: ${username}`);
        return 0;
      }
    } catch (error) {
      console.error('Error fetching follower count:', error);
      return 0;
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const followersCount = await fetchFollowerCount(formData.instagramUsername);
  
    if (followersCount >= 500) {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('instagramUsername', formData.instagramUsername);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('followersCount', followersCount);
      formDataToSend.append('picture', formData.picture);
      formDataToSend.append('isInfluencer', true);
  
      try {
        const response = await fetch('http://localhost:5500/followers', {
          method: 'POST',
          body: formDataToSend,
        });
  
        if (response.ok) {
          console.log('Form data submitted successfully');
          const responseData = await response.json();
          console.log('Response Data:', responseData); // Log the server response
  
          // Navigate only after successful form submission
          navigate('/influencerProfile');
        } else {
          console.error('Error submitting form data:', response.statusText);  
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
    } else {
      setErrorMessage(`Follower count is less than 500. You have only ${followersCount} followers.`);
    }
  };
  

  return (
    <>
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

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instagramUsername">
                Instagram Username
              </label>
              <input
                type="text"
                name="instagramUsername"
                id="instagramUsername"
                value={formData.instagramUsername}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Instagram username"
                required
              />
            </div>

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

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="picture">
                Profile Picture
              </label>
              <input
                type="file"
                name="picture"
                id="picture"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm mb-4">
                {errorMessage}
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
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
