import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8f0493b6-3cc4-4ddf-8607-a96b97be1fb4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
      </p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
  {/* Name & Email Inputs */}
  <div className='flex gap-6 mt-10 mb-8'>
    <input
      type="text"
      placeholder='Enter your name'
      required
      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'
    />
    <input
      type="email"
      placeholder='Enter your email'
      required
      className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'
    />
  </div>

  {/* Message Textarea */}
  <textarea
    rows='6'
    placeholder='Enter your message'
    required
    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='message'
  ></textarea>

  {/* Submit Button */}
  <div className='flex justify-center mt-6'>
    <button
      type='submit'
      className='flex items-center gap-2 py-3 px-8 bg-black/80 text-white rounded-full hover:bg-black duration-500'
    >
      Submit now
      <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
    </button>
    <p className='mt-4'>{result}</p>
  </div>
</form>

    </div>
  )
}

export default Contact