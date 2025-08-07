'use client';
import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   button disabled
  const isFormComplete = Object.values(form).some(value => value.trim() === '');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="min-h-screen flex items-center justify-center mt-5">
      <div className=" h-auto xl:h-[700px] grid grid-cols-1 lg:grid-cols-2 gap-8 w-full rounded-lg overflow-hidden">
        <div className="w-full h-full">
          <img
            src="/form-img/img-1.avif"
            alt="Chair"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col xl:pt-32  gap-4 p-10 bg-[#F7E9DC] rounded-sm shadow-sm border "
        >
          <div className="flex flex-col xl:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="flex-1 p-3 rounded-md bg-transparent text-[#924e36] border border-[#e4c4b3] focus:outline-none focus:ring-1 focus:ring-[#b3836a]"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="flex-1 p-3 rounded-md bg-transparent text-[#924e36] border border-[#e4c4b3] focus:outline-none focus:ring-1 focus:ring-[#b3836a]"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-transparent text-[#924e36] border border-[#e4c4b3] focus:outline-none focus:ring-1 focus:ring-[#b3836a]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="p-3 rounded-md bg-transparent text-[#924e36] border border-[#e4c4b3] focus:outline-none focus:ring-1 focus:ring-[#b3836a]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className=" resize-none p-3 rounded-md bg-transparent text-[#924e36] border border-[#e4c4b3] focus:outline-none focus:ring-1 focus:ring-[#b3836a]"
          />
          <button
            type="submit"
            disabled={isFormComplete}
            className={`mt-4 py-3 rounded-md text-white text-lg font-medium transition 
        ${
          isFormComplete
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#924e36] hover:bg-[#7b3e2c]'
        }`}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
