import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const Careers: React.FC = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-[#FF7E28]">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of something amazing. Explore career opportunities with us.
          </p>
        </div>

        <div className="bg-[#FF7E28] rounded-2xl p-12 text-white text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p>Continuous learning and development opportunities</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Culture</h3>
              <p>Collaborative and inclusive work environment</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Benefits</h3>
              <p>Competitive salary and comprehensive benefits</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
        
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-[#FF7E28] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e66d1f] transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;