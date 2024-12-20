"use client"
import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({ to: '', subject: '', text: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus(result.message);
      } else {
        setStatus(result.message || 'Failed to send email');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <section className="relative overflow-hidden" id='contact'>
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[#151719] opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-60" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-300">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          {/* Contact Form */}
          <div className="max-w-lg mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
                <input
                   type="email"
                   name="to"
                   value={formData.to}
                   onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Message</label>
                <textarea
                    name="text"
                    value={formData.text}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Write your message"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-200"
                >
                  Send Message
                </button>
              </div>

              {status && <p className="text-green-500 text-center">Email sent successfully!</p>}
              {/* {error && <p className="text-red-500 text-center">Error: {error}</p>} */}

            </form>
          </div>

        </div>
      </div>

      {/* Background Shape Animation */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-700 rounded-full opacity-30 animate-pulse" />
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-600 rounded-full opacity-20 animate-bounce" />
    </section>
  )
}
