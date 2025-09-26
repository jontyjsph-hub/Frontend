import React from 'react';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const timeline = [
    {
      year: '2019',
      title: 'Started Digital Marketing Journey',
      description: 'Began specializing in SEO and content marketing for local businesses.',
    },
    {
      year: '2020',
      title: 'Google Ads Certified',
      description: 'Earned Google Ads certification and started managing PPC campaigns.',
    },
    {
      year: '2021',
      title: 'Agency Growth',
      description: 'Expanded services to include Meta Ads and comprehensive digital strategies.',
    },
    {
      year: '2022',
      title: 'Web Development Skills',
      description: 'Added web development to create complete digital solutions.',
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Recognized as top digital marketing expert in the region.',
    },
    {
      year: '2024',
      title: 'Continued Excellence',
      description: 'Continuing to help businesses achieve remarkable growth online.',
    },
  ];

  const skills = [
    { name: 'SEO & SEM', level: 95 },
    { name: 'Google Ads', level: 90 },
    { name: 'Meta Ads', level: 88 },
    { name: 'Content Marketing', level: 92 },
    { name: 'Web Development', level: 85 },
    { name: 'Analytics & Data', level: 93 },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate digital marketing expert with over 5 years of experience 
                helping businesses transform their online presence and achieve sustainable growth.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-gray-600">Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="text-xl mb-6">
              My journey in digital marketing began with a simple fascination: how businesses 
              could reach millions of potential customers with the right strategy and execution.
            </p>
            <p className="mb-6">
              Over the years, I've had the privilege of working with startups, small businesses, 
              and established companies, helping them navigate the complex world of digital marketing. 
              My approach combines data-driven insights with creative problem-solving to deliver 
              results that matter.
            </p>
            <p>
              When I'm not optimizing campaigns or developing strategies, I'm staying up-to-date 
              with the latest industry trends and sharing my knowledge through workshops and 
              mentoring sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">New York, USA</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
              <Award className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Certifications</h3>
              <p className="text-gray-600">Google Ads, Meta Blueprint</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
              <Users className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Clients Served</h3>
              <p className="text-gray-600">150+ Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-red-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Journey</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-600 h-full"></div>
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 text-red-600 mr-2" />
                      <span className="text-red-600 font-bold text-lg">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;