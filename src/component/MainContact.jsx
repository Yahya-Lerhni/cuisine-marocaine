import React from 'react';

function MainContact() {
    return (
        <div className='bg-gray-100 flex items-center justify-center min-h-screen'>
            <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Contact</h2>
    
    <form class="space-y-5">
      <div>
        <label class="block text-gray-700 mb-1" for="name">FULL Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[orange]"
        />
      </div>

      <div>
        <label class="block text-gray-700 mb-1" for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
        />
      </div>

      <div>
        <label class="block text-gray-700 mb-1" for="message">Meessage</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Enter Your Message"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[orange]"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-[orange] text-white py-2 rounded-lg hover:bg-[orange] transition duration-300"
      >
        Send
      </button>
    </form>
  </div>
        </div>
    );
}

export default MainContact;