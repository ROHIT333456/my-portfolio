import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please fill out this field.";
    if (!formData.email.trim()) newErrors.email = "Please fill out this field.";
    if (!formData.message.trim()) newErrors.message = "Please fill out this field.";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="flex-1 flex flex-col justify-start space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
              Contact Me
            </h1>

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 gap-6 w-full">
              <div className="flex items-center gap-4 flex-1">
                <div className="bg-green-500 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <a
                  href="mailto:rohitkumarkeshri53@gmail.com"
                  className="text-gray-300 hover:text-white transition text-base sm:text-lg break-words"
                >
                  rohitkumarkeshri53@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 flex-1">
                <div className="bg-green-500 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <a
                  href="tel:+917050118290"
                  className="text-gray-300 hover:text-white transition text-base sm:text-lg"
                >
                  +91 6207035060
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center sm:justify-start">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition flex items-center justify-center" aria-label="YouTube">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://github.com/ROHIT333456" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition flex items-center justify-center" aria-label="GitHub">
                <Github className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/rohit-kumar-keshri-473037309" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.facebook.com/rohit.keshri.391082" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition flex items-center justify-center" aria-label="Facebook">
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.instagram.com/rohit_ksri29___" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition flex items-center justify-center" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* Download Resume */}
            <div className="pt-4 flex justify-center sm:justify-start">
              <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-lg transition w-full sm:w-auto">
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1 flex flex-col justify-center mt-8 lg:mt-0">
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-900 text-white border border-gray-700 focus:border-green-500 rounded-lg px-4 py-4 outline-none transition"
                />
                {errors.name && <span className="absolute -bottom-6 left-0 text-sm text-red-500 bg-gray-900 px-2 py-1 rounded">{errors.name}</span>}
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-gray-900 text-white border border-gray-700 focus:border-green-500 rounded-lg px-4 py-4 outline-none transition"
                />
                {errors.email && <span className="absolute -bottom-6 left-0 text-sm text-red-500 bg-gray-900 px-2 py-1 rounded">{errors.email}</span>}
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-gray-900 text-white border border-gray-700 focus:border-green-500 rounded-lg px-4 py-4 outline-none transition resize-none"
                ></textarea>
                {errors.message && <span className="absolute -bottom-6 left-0 text-sm text-red-500 bg-gray-900 px-2 py-1 rounded">{errors.message}</span>}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-4 rounded-lg transition text-lg"
              >
                {submitted ? "Message Sent! ✓" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
