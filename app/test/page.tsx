"use client"
import { useState } from 'react';

export default function EmailForm() {
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
    <form onSubmit={handleSubmit} className="space-y-4 mt-20">
      <input
        type="email"
        name="to"
        placeholder="Recipient's Email"
        value={formData.to}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <textarea
        name="text"
        placeholder="Your message"
        value={formData.text}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Send Email
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
