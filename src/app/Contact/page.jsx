'use client';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React, { useState, useEffect } from 'react';
import {
  Mail, Phone, MapPin, Send, User, MessageSquare, Calendar,
  Clock, CheckCircle, X, Sparkles, Star, Zap
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Solutions',
    'AI & Machine Learning',
    'Cybersecurity',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@dreamskytech.com',
      subinfo: 'support@dreamskytech.com',
      shadowColor: 'shadow-blue-500/50'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 8750610304',
      subinfo: '+91 8750610304',
      shadowColor: 'shadow-green-500/50'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'DreamSkyTech',
      subinfo: 'A-43, Noida Sector 63, Uttar Pradesh, 201301',
      shadowColor: 'shadow-purple-500/50'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: ''
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const SuccessModal = () => (
    <div className={`fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 transition-all duration-500 ${showSuccess ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className={`bg-gray-50 rounded-3xl p-10 max-w-md w-full mx-4 text-center relative transform transition-all duration-500 shadow-2xl border border-blue-200/50 ${showSuccess ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"></div>
        
        <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        
        <h3 className="text-3xl font-bold text-green-600 mb-3">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Thank you for reaching out! We'll get back to you within 24 hours with a detailed response.
        </p>
        <button
          onClick={() => setShowSuccess(false)}
          className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
        >
          Awesome!
        </button>
        <button
          onClick={() => setShowSuccess(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Header />
     
      {/* Fixed Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-fixed mt-10 brightness-100 -z-20"
        style={{ backgroundImage: "url('/sky.jpg') " }}
   

      />
  <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/90 via-white-900/80 to-cyan-900/90 -z-10" />

  {/* Floating Bubbles Animation */}
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
    {/* Small Bubbles */}
    <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
    <div className="absolute top-40 left-32 w-3 h-3 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
    <div className="absolute top-60 right-20 w-5 h-5 bg-cyan-400/25 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
    <div className="absolute top-80 left-1/4 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
    <div className="absolute top-96 right-1/3 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
    
    {/* Medium Bubbles */}
    <div className="absolute top-32 right-40 w-6 h-6 bg-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '5s' }}></div>
    <div className="absolute top-72 left-20 w-7 h-7 bg-cyan-400/15 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
    <div className="absolute bottom-40 right-16 w-5 h-5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
    <div className="absolute bottom-60 left-1/3 w-6 h-6 bg-blue-400/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
    
    {/* Floating Movement Bubbles */}
    <div className="absolute top-24 right-1/4 w-4 h-4 bg-yellow-400/25 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
    <div className="absolute top-56 left-1/2 w-5 h-5 bg-cyan-400/20 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-32 left-16 w-3 h-3 bg-white/30 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-72 right-1/2 w-6 h-6 bg-blue-400/15 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    
    {/* More scattered bubbles */}
    <div className="absolute top-44 left-3/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
    <div className="absolute top-88 right-1/5 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
    <div className="absolute bottom-20 left-1/5 w-4 h-4 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
    <div className="absolute bottom-96 right-3/4 w-2 h-2 bg-blue-400/35 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
  </div>

  <h1 className="text-7xl font-bold text-shadow-cyan-600 ">

  </h1>

        {showSuccess && <SuccessModal />}

        <div className="relative z-10 pt-20 pb-12 px-4 text-center">
          <div
            className="transform transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}
          >
            <h1 className="text-5xl md:text-6xl font-black mt-1 mb-1">
              {/* <span className="text-yellow-400 animate-pulse flex-flex wrap corner"> */}
              {/* <span className="text-yellow-400 animate-pulse fixed top-2 right-4 pt-0 pb-650">
  Contact Us
</span> */}

<span className="text-yellow-400 animate-pulse fixed top-1 pb-18 right-4">
  Contact Us
</span>

            
              <span className="text-blue-400 block">
              
              </span>
            </h1>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white/10 backdrop-blur-2xl mt-20 rounded-3xl p-8 border border-white/20 hover:border-white/40 transform hover:scale-105 hover:-translate-y-3 transition-all duration-700 hover:${info.shadowColor} hover:shadow-2xl`}
                  style={{
                    transform: `translate(${mousePosition.x * (index % 2 === 0 ? 0.03 : -0.03)}px, ${mousePosition.y * 0.03}px)`,
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="relative w-16 h-16 bg-cyan-700 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg ">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-blue-200 font-medium text-lg mb-1">{info.info}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{info.subinfo}</p>
                  
                  <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div
                className="relative bg-white/10 backdrop-blur-3xl rounded-3xl p-10 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
                style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
              >
                <div className="relative">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-cyan-700 rounded-xl flex items-center justify-center mr-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
                      <p className="text-gray-300">We'd love to hear from you</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300 z-10" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Full Name"
                          className={`relative w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.name ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/8`}
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
                      </div>

                      <div className="relative group">
                        <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300 z-10" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email Address"
                          className={`relative w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/8`}
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
<div className="relative group">
  <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300 z-10" />
  
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={(e) => {
      
      const value = e.target.value.replace(/\D/g, ""); 
    
      if (value.length <= 10) {
        handleInputChange({
          target: { name: "phone", value },
        });
      }
    }}
    placeholder="Your Phone Number"
    maxLength={10}
    className={`relative w-full pl-12 pr-4 py-4 bg-white/5 border ${
      errors.phone ? "border-red-400" : "border-white/20"
    } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/8`}
  />
  
  {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone}</p>}
</div>

                      <div className="relative group">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="relative w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/8 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-slate-800 text-white">Select a Service</option>
                          {services.map(service => (
                            <option key={service} value={service} className="bg-slate-800 text-white">{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="relative group">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className={`relative w-full px-4 py-4 bg-white/5 border ${errors.subject ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/8`}
                      />
                      {errors.subject && <p className="text-red-400 text-sm mt-2">{errors.subject}</p>}
                    </div>

                    <div className="relative group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your amazing project..."
                        rows={6}
                        className={`relative w-full px-4 py-4 bg-white/5 border ${errors.message ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:bg-white/10 transition-all duration-300 resize-none hover:bg-white/8`}
                      />
                      {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full bg-cyan-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="relative flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                            Sending Your Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                            Send Message Now
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div
                className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-green-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20"
                style={{ transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Business Hours</h3>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-green-400">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <span>Saturday</span>
                    <span className="text-red-400 font-semibold">Closed</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <span>Sunday</span>
                    <span className="text-red-400 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quick Response</h3>
                </div>
                
                <div className="relative p-6 bg-white/5 rounded-2xl border border-blue-400/20">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We guarantee a response within <span className="text-blue-400 font-bold text-xl">24 hours</span> for all inquiries.
                  </p>
                  <p className="text-sm text-gray-400">
                    For urgent matters, call us directly for immediate assistance and real-time support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      <Footer/>
    </>
  );
};

export default ContactPage;