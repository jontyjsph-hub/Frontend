import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  TrendingUp, 
  Users, 
  Award, 
  Target, 
  Zap, 
  Shield, 
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Quote
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Digital Marketing Expert';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const stats = [
    { icon: <TrendingUp className="w-8 h-8" />, number: '200+', label: 'Campaigns Launched' },
    { icon: <Users className="w-8 h-8" />, number: '150+', label: 'Happy Clients' },
    { icon: <Award className="w-8 h-8" />, number: '5+', label: 'Years Experience' },
    { icon: <Target className="w-8 h-8" />, number: '300%', label: 'Average ROI' },
  ];

  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Lightning Fast Results',
      description: 'Get measurable results within the first 30 days of campaign launch with our proven strategies.'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Data-Driven Approach',
      description: 'Every decision is backed by comprehensive analytics and market research for maximum impact.'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Targeted Campaigns',
      description: 'Reach your ideal customers with precision targeting and personalized messaging strategies.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'Working with this digital marketing expert transformed our online presence. Our leads increased by 400% in just 3 months!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      text: 'The SEO strategy delivered incredible results. We went from page 3 to #1 rankings for our main keywords.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Local Fitness Studio',
      text: 'The Google Ads campaign brought us 50+ new members in the first month. ROI was beyond our expectations!',
      rating: 5
    }
  ];

  const services = [
    { name: 'SEO Optimization', description: 'Boost organic rankings' },
    { name: 'Google Ads', description: 'Maximize paid search ROI' },
    { name: 'Meta Ads', description: 'Social media advertising' },
    { name: 'Web Development', description: 'Conversion-focused websites' },
    { name: 'Content Marketing', description: 'Engaging content strategies' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-black opacity-50"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-6">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce">
              🚀 Available for New Projects
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            I'm a{' '}
            <span className="text-red-500 border-r-2 border-red-500 animate-pulse">
              {displayText}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transforming businesses through strategic digital marketing campaigns, 
            innovative SEO strategies, and data-driven advertising solutions that deliver 
            <span className="text-red-400 font-semibold"> measurable results</span>.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              Work With Me
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/portfolio"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transform transition-all duration-300 shadow-xl group"
            >
              <Play className="mr-2 w-5 h-5" />
              View My Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Google Certified
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Meta Blueprint Certified
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              5+ Years Experience
            </div>
          </div>
        </div>

        <button
          onClick={scrollToSection}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-red-500 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Results That Speak</h2>
            <p className="text-xl text-gray-600">Numbers don't lie - here's what I've achieved for my clients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-red-600 flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Me?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I combine creativity with data-driven strategies to deliver exceptional results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-red-600 mb-6 group-hover:text-red-700 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-xl text-gray-600">Comprehensive digital marketing solutions for your business growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl hover:from-red-100 hover:to-red-200 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 hover:scale-105 transform transition-all duration-300 shadow-xl group"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-300">Real feedback from real businesses I've helped grow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <Quote className="w-8 h-8 text-red-600 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Process</h2>
            <p className="text-xl text-gray-600">A proven methodology that delivers consistent results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Deep dive into your business goals and target audience', icon: <Target className="w-8 h-8" /> },
              { step: '02', title: 'Strategy', description: 'Develop a customized digital marketing roadmap', icon: <TrendingUp className="w-8 h-8" /> },
              { step: '03', title: 'Execute', description: 'Launch campaigns with precision and attention to detail', icon: <Zap className="w-8 h-8" /> },
              { step: '04', title: 'Optimize', description: 'Continuously improve performance based on data', icon: <Award className="w-8 h-8" /> },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:bg-red-700 transition-colors duration-300 shadow-lg">
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-red-600 group-hover:text-red-700 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve your digital marketing goals and drive sustainable growth for your business.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-xl group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/portfolio"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transform transition-all duration-300 shadow-xl"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;