import React from 'react';
import HeaderContent from "../HeaderContent/HeaderContent";
import Footer from "../../molecule/Footer/footer";
import Home from "../../../assets/Image/flower.webp";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ContactPage() {
  const navigate = useNavigate(); // Initialize navigate

  const handleSignUpClick = () => {
    navigate('/influencerSignupPage'); // Navigate to InfluencerSignupPage
  };

  return (
    <>
      <HeaderContent />
      <div className="bg-white-100">
        <div className="container mx-auto px-4 py-16">
          <div
            className="flex flex-col justify-start text-left bg-cover bg-center py-20"
            style={{
              backgroundImage: `url(${Home})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="p-10 rounded-lg max-w-md ml-0">
              <h1 className="text-4xl font-bold text-black">Be an Influencer</h1>
              <button
                className="mt-8 px-8 py-3 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={handleSignUpClick} // Attach the click handler
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800">Monetize your content with Beauty & Blooms</h2>
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-gray-800">Description</h3>
                <p className="text-gray-600">
                  This photo showcases a beautiful bridal bouquet featuring a vibrant mix of orange roses, white daisies, and yellow lilies, accented with lush green foliage. The bouquet is elegantly tied with a white ribbon, making it a perfect choice for a wedding.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-gray-800">User comments</h3>
                <p className="text-gray-600">
                  This photo showcases a beautiful bridal bouquet featuring a vibrant mix of orange roses, white daisies, and yellow lilies, accented with lush green foliage. The bouquet is elegantly tied with a white ribbon, making it a perfect choice for a wedding.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-gray-800">Question & Answer</h3>
                <p className="text-gray-600">
                  This photo showcases a beautiful bridal bouquet featuring a vibrant mix of orange roses, white daisies, and yellow lilies, accented with lush green foliage. The bouquet is elegantly tied with a white ribbon, making it a perfect choice for a wedding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
