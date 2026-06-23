'use client';

import { useState } from 'react';

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${STRAPI_URL}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: formData,
        }),
      });

      const result = await response.json();

      console.log(result);

      alert('Record Saved');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-slate-300"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          className="input-field w-full rounded-xl border border-slate-700/60 bg-slate-900/40 px-4 py-3 text-white placeholder:text-slate-600"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-slate-300"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="input-field w-full rounded-xl border border-slate-700/60 bg-slate-900/40 px-4 py-3 text-white placeholder:text-slate-600"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-medium text-slate-300"
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          name="phone"
          placeholder="Enter Phone"
          onChange={handleChange}
          className="input-field w-full rounded-xl border border-slate-700/60 bg-slate-900/40 px-4 py-3 text-white placeholder:text-slate-600"
        />
      </div>

      <button
        type="submit"
        className="btn-submit mt-2 w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white"
      >
        Submit
      </button>
    </form>
  );
}
