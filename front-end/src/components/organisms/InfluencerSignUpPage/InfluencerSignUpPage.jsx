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
  const [isFetchingFollowers, setIsFetchingFollowers] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isEligible, setIsEligible] = useState(false); // Track eligibility status

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitDisabled(true);
    setErrorMessage(null);
  
    // Mock follower count, replace with real API call in production
    const followersCount = 500; 
  
    if (followersCount >= 500) {
      try {
        setIsEligible(true); // Mark as eligible if followers are sufficient
        navigate('/influencerProfile', {
          state: {
            username: formData.name,
            profilePicture: URL.createObjectURL(formData.picture), // Convert to a preview URL
          },
        });
      } catch (error) {
        setErrorMessage(`Error submitting form data: ${error.message}`);
      }
    } else {
      setErrorMessage(`Follower count is less than 500. You have only ${followersCount} followers.`);
      setIsEligible(false); // Mark as ineligible
    }
  
    setIsSubmitDisabled(false);
  };
  

  return (
    <>
      <div className="sticky top-0 z-50">
        <HeaderContent />
      </div>

      <div className="bg-gray-100">
        <div className="container px-4 py-16 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Become an Influencer</h1>
          
          <form 
            onSubmit={handleSubmit} 
            className="max-w-lg px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md"
            encType="multipart/form-data"
          >
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
              />
            </div>


            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="instagramUsername">Instagram Username</label>
              <input
                type="text"
                name="instagramUsername"
                id="instagramUsername"
                value={formData.instagramUsername}
                onChange={handleChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter your Instagram username"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="picture">Profile Picture</label>
              <input
                type="file"
                name="picture"
                id="picture"
                onChange={handleChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {errorMessage && (
              <div className="mb-4 text-sm text-red-500">{errorMessage}</div>
            )}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className={`px-4 py-2 font-bold text-white ${isSubmitDisabled ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} rounded focus:outline-none focus:shadow-outline`}
              >
                {isFetchingFollowers ? 'Checking...' : 'Submit'}
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
