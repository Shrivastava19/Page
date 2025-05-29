import React, { useState, useEffect } from 'react';
import Captcha from '../components/Captcha';
import { fetchTips, writeTips } from '../utils/githubAPI';

const TipForm = () => {
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem('formData');
    return saved ? JSON.parse(saved) : { name: '', email: '', message: '', subscribe: false };
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(form));
  }, [form]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.message || form.message.length < 50) {
      return setError('Message must be at least 50 characters.');
    }
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      return setError('Invalid email format.');
    }
    if (!captchaValid) return setError('Invalid CAPTCHA.');

    try {
      const tips = await fetchTips();
      const newTip = { ...form, date: new Date().toISOString() };
      await writeTips([newTip, ...tips]);
      setSuccess('Tip submitted successfully!');
      setForm({ name: '', email: '', message: '', subscribe: false });
      localStorage.removeItem('formData');
    } catch {
      setError('Error submitting tip. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Full Name (optional)" value={form.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email (optional)" value={form.email} onChange={handleChange} />
      <textarea name="message" placeholder="Your message..." value={form.message} onChange={handleChange} required />
      <label>
        <input type="checkbox" name="subscribe" checked={form.subscribe} onChange={handleChange} /> Subscribe to bataSutra
      </label>
      <Captcha onVerify={setCaptchaValid} />
      <button type="submit">Submit</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </form>
  );
};

export default TipForm;
