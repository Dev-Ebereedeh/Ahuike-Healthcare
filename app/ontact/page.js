// pages/contact.js

import React from "react";
import Container from "../_components/Container";

const ContactPage = () => {
  const faqs = [
    { question: "How do I book an appointment?", answer: "You can book an appointment online or call our main number." },
    { question: "What are your visiting hours?", answer: "Visiting hours are from 10 am to 6 pm daily." },
    { question: "Is emergency care available 24/7?", answer: "Yes, our emergency care is open 24/7." },
    { question: "How can I access my medical records?", answer: "Please contact our records department at records@hospital.com." },
    { question: "Do you offer telemedicine?", answer: "Yes, telemedicine services are available for select consultations." },
    { question: "What should I bring for my first visit?", answer: "Please bring your ID, medical history, and insurance information." },
    { question: "Can I get a copy of my test results online?", answer: "Yes, test results are available via our online portal." },
    { question: "How do I reschedule an appointment?", answer: "Call our appointment line at (123) 456-7890 to reschedule." },
    { question: "What insurance plans do you accept?", answer: "We accept most major insurance plans. Contact us for details." },
    { question: "Is parking available at the hospital?", answer: "Yes, we have a parking area for patients and visitors." },
  ];

  return (
    <Container>
      <div className="m-6 w-full h-1000 bg-blue-100 md:p-24">
        <h1 className="md:text-7xl  text-blue-800  opacity-10 text-xl md:mt-24 font-bold text-center md:text-center mb-6">Contact Us</h1>


        <div className="flex flex-col md:flex-row justify-around items-center gap-8 mb-12">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mt-16 ">Appointment Scheduling</h2>
            <p className="md:text-2xl">
              For appointments, call us at
              <a href="tel: +2348060307470" className="text-blue-500 underline">
              08060307470 
              </a>
              
              or

              <a href="/contact" className="text-blue-500 underline">
                book online
              </a>
              .
            </p>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 md:text-3xl md:mt-16">Operating Hours</h2>
            <p className="md:text-2xl">
              <strong>Outpatient Services:</strong> Mon-Fri: 8 am - 5 pm
            </p>
            <p className="md:text-2xl">
              <strong>Emergency Care:</strong> Open 24/7
            </p>
          </div>
        </div>

    
        <div className="mb-12 flex justify-center">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4  text-blue-800 md:mt-24">Location</h2>
            <iframe
              className="w-full md:4/6 h-64 md:h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799140384!2d-74.25986722696183!3d40.69767006718415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM5JzU3LjYiTiA3NMKwMTUnMTguOCJX!5e0!3m2!1sen!2sus!4v1636443090891!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        
        <div className="mb-12 flex justify-center">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mt-24  text-blue-800 ">Get in Touch</h2>
            <form action="https://formsubmit.co/eberechukwugoodnesspharm@gmail.com" method="POST" className="space-y-4">
              <div>
                <label className="block mb-1 font-medium md:text-2xl md:mt-12">Name</label>
                <input type="text" name="email" className="w-full border p-2 rounded md:h-14 " required />
              </div>
              <div>
                <label className="block mb-1 font-medium md:text-2xl md:mt-12">Location</label>
                <input type="text" name="email" className="w-full border p-2 rounded md:h-14 " required />
              </div>
              <div>
                <label className="block mb-1 font-medium md:text-2xl md:mt-12">Phone Number</label>
                <input type="tel" name="email" className="w-full border p-2 rounded md:h-14 " required />
              </div>
              <div>
                <label className="block mb-1 font-medium md:text-2xl md:mt-12">Email</label>
                <input type="email" name="email" className="w-full border p-2 md:h-14 rounded " required />
              </div>
              <div>
                <label className="block mb-1 font-medium md:text-2xl md:mt-12">Message</label>
                <textarea name="email" type="email" className="w-full border p-2 rounded h-24 md:h-200 " required></textarea>
              </div>
              <button type="submit" className="w-full md:4/6 bg-blue-800 text-white py-2 rounded font-semibold md:text-2xl">
                Submit
              </button>
            </form>
          </div>
        </div>


        <div className="mb-12 flex justify-center">
          <div className="w-full md:w-2/3 text-center">
            <h2 className="text-2xl font-semibold mb-4 md:text-3xl md:mt-16">Subscribe to Our Newsletter</h2>
            <p className="text-gray-700 mb-4 md:text-2xl">Stay updated with our latest news and offers.</p>
            <form className="flex flex-col md:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-2/3 border p-2 md:h-14 rounded"
                required
              />
              <button type="submit" className="w-full md:w-auto bg-blue-800 text-white py-2 px-4 rounded font-semibold md:text-2xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>


        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 md:text-3xl md:mt-32">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-medium md:font-medium text-lg md:text-2xl">{faq.question}</h3>
                <p className="text-gray-600 md:text-2xl">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
