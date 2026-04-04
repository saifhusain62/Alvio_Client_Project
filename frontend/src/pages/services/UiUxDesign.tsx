import React from 'react';
import { Palette, Eye, Users } from 'lucide-react';

const UiUxDesign: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            UI/UX <span className="text-[#FF7E28]">Design</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating beautiful and intuitive user experiences
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Design That Converts</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our design team creates visually stunning and highly functional interfaces that engage users 
            and drive conversions. We focus on user-centered design principles to ensure the best experience.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From wireframes to final designs, we handle every aspect of the design process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Visual Design</h3>
            <p className="text-gray-600">
              Beautiful interfaces that align with your brand identity
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">User Research</h3>
            <p className="text-gray-600">
              Data-driven insights to understand your users better
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">User Testing</h3>
            <p className="text-gray-600">
              Validate designs with real users before development
            </p>
          </div>
        </div>

        <div className="mt-12 bg-[#FF7E28] rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Redesign?</h2>
          <p className="text-xl mb-8">Let's create an amazing user experience</p>
          <button className="bg-white text-[#FF7E28] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default UiUxDesign;