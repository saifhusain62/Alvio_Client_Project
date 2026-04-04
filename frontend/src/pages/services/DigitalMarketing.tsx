import React from 'react';
import { TrendingUp, Target, BarChart } from 'lucide-react';

const DigitalMarketing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Digital <span className="text-[#FF7E28]">Marketing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grow your business with data-driven marketing strategies
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Marketing That Works</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our digital marketing services help you reach your target audience, increase brand awareness, 
            and drive conversions. We use proven strategies and the latest tools to deliver results.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From SEO to social media marketing, we cover all aspects of digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">SEO</h3>
            <p className="text-gray-600">
              Improve your search rankings and organic traffic
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">PPC Advertising</h3>
            <p className="text-gray-600">
              Targeted ads that deliver measurable ROI
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FF7E28] rounded-lg flex items-center justify-center mb-4">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Analytics</h3>
            <p className="text-gray-600">
              Data-driven insights to optimize your campaigns
            </p>
          </div>
        </div>

        <div className="mt-12 bg-[#FF7E28] rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Boost Your Online Presence</h2>
          <p className="text-xl mb-8">Let's grow your business together</p>
          <button className="bg-white text-[#FF7E28] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;