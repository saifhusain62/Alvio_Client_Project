import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#FF7E28]">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our mission, vision, and the team behind our success
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Founded in 2020, we've been on a mission to deliver exceptional digital solutions 
            to businesses of all sizes. Our journey started with a simple idea: to make 
            technology accessible and effective for everyone.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Today, we're proud to serve clients worldwide, helping them achieve their goals 
            through innovative solutions and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#FF7E28] mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              innovation, and success in the digital age.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#FF7E28] mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading provider of digital solutions, recognized for our innovation, 
              quality, and commitment to client success.
            </p>
          </div>
        </div>

        <div className="bg-[#FF7E28] rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h4 className="text-2xl font-bold mb-2">Excellence</h4>
              <p>We strive for excellence in everything we do</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Integrity</h4>
              <p>We operate with honesty and transparency</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Innovation</h4>
              <p>We embrace change and continuous improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;