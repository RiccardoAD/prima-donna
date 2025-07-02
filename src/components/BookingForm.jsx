import React from 'react';

const BookingForm = () => {
  return (
    <section id="booking" className="py-12 bg-[#ebe8de]">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h4 className="text-[#bf925b] text-lg mb-1">Booking</h4>
        <h1 className="

        text-[64px] font-bold mb-2 
             max-[510px]:text-[50px] 
             max-[370px]:text-[40px]
        
        text-4xl font-bold mb-2">Make An Appointment</h1>
        <p className="text-gray-500 mb-8">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-[#bf925b] bg-transparent p-3 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-[#bf925b] bg-transparent p-3 w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="Date"
              className="border-2 border-[#bf925b] bg-transparent p-3 w-full"
            />
            <input
              type="time"
              placeholder="Time"
              className="border-2 border-[#bf925b] bg-transparent p-3 w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              className="border-2 border-[#bf925b] bg-transparent p-3 w-full"
            >
              <option>Professional Makeup</option>
              <option>Medicure Pedicure</option>
              <option>Body Treatment</option>
              <option>Hair Color</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              className="border-2 border-[#bf925b] bg-transparent p-3 w-full"
            />
          </div>

          <textarea
            rows="6"
            placeholder="Message"
            className="border-2 border-[#bf925b] bg-transparent p-3 w-full"
          ></textarea>

          <button
            type="submit"
            className="bg-[#bf925b] text-white py-3 px-6 hover:bg-[#a47b48] transition"
          >
            Make an Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;