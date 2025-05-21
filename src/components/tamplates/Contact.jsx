import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2680048e-05fd-4a47-b5c4-f4987dc71228");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Req has been send")
    }
  };
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-black via-gray-900  to-black text-white p-8 overflow-hidden">
      <h1>
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ml-4 text-4xl ri-arrow-left-fill pr-4"
        ></i>
      </h1>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-400 mb-12">
          Contact Me
        </h1>

        <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-xl backdrop-blur-md">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Your message..."
                className="w-full resize-none px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 rounded text-lg font-semibold shadow-md"
            >
              Send Message 🎬
            </button>
          </form>

          <div className="mt-8 text-center text-gray-400">
            <p>Or reach us on social media</p>
            <div className="flex justify-center gap-6 mt-4 text-2xl">
              <a href="#" className="hover:text-red-500 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-[2%] py-[4%] flex items-center gap-[10%] justify-center ">
        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-gray-600 to-purple-500 ">
        <i className="ri-whatsapp-line text-5xl"></i>  +91 7678380117
        </h1>
        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-gray-600 to-purple-500 ">
        <i  className="text-5xl ri-mail-line"></i>  jy93596@gmail.com
        </h1>

      </div>
    </div>
  );
};

export default Contact;