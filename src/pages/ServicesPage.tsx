import React from 'react';
import { Search, MousePointer, Share2, Code, PenTool, BarChart3 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO Optimization',
      description: 'Boost your organic search rankings with comprehensive SEO strategies that drive qualified traffic to your website.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building'],
    },
    {
      icon: <MousePointer className="w-12 h-12" />,
      title: 'Google Ads',
      description: 'Maximize your ROI with expertly managed Google Ads campaigns that convert visitors into customers.',
      features: ['Campaign Setup', 'Keyword Optimization', 'Ad Copy Creation', 'Performance Tracking'],
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: 'Meta Ads',
      description: 'Reach your target audience on Facebook and Instagram with compelling ad campaigns that generate results.',
      features: ['Audience Targeting', 'Creative Design', 'Campaign Management', 'A/B Testing'],
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Create stunning, responsive websites that not only look great but also convert visitors into customers.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'User-Friendly'],
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: 'Content Marketing',
      description: 'Engage your audience with high-quality content that builds trust and drives conversions.',
      features: ['Content Strategy', 'Blog Writing', 'Social Media Content', 'Email Marketing'],
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Analytics & Reporting',
      description: 'Track your success with detailed analytics and reporting that provide actionable insights.',
      features: ['Performance Tracking', 'Custom Reports', 'ROI Analysis', 'Strategy Optimization'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to grow your business 
            and maximize your online presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="text-red-600 mb-6 group-hover:text-red-700 transition-colors duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Process</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure your digital marketing success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business, goals, and target audience' },
              { step: '02', title: 'Strategy', description: 'Developing a customized digital marketing plan' },
              { step: '03', title: 'Execution', description: 'Implementing campaigns with precision and care' },
              { step: '04', title: 'Optimization', description: 'Continuously improving performance and ROI' },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-red-700 transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let's discuss which services are right for your business.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-xl">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;