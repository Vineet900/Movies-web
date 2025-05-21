// import React from "react";
// import { useNavigate } from "react-router-dom";

// const About = () => {
//     const navigate = useNavigate()
//   return (
//     <div className="w-full h-screen px-[5%] pt-[1%]  ">
//       <div className="w-full h-[10vh]  flex items-center  ">
//         <h1>
//         <i
//           onClick={() => navigate(-1)}
//           className="hover:text-[#6556cd] text-3xl ri-arrow-left-fill pr-4"
//         ></i>
//         </h1>
//         <div className="pl-2 text-3xl text-zinc-400 font-semibold">
//             <h1>About</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// import React from 'react';

// const About = () => {
//   return (
//     <div className="min-h-screen pl-[25%] text-gray-800 px-6 py-12 flex justify-center ">
//       <div className="max-w-4xl mx-auto ">
//         <h1 className=" text-4xl pl-[40%] font-bold mb-6 text-zinc-500 inline-block">
//           MOVIES 4U
//         </h1>

//         <p className="text-lg mb-4 text-zinc-700">
//           <strong>MovieVerse</strong> is a modern web application designed for movie enthusiasts, built with cutting-edge technologies like React.js and Tailwind CSS. Our mission is to deliver a seamless and immersive experience for browsing, discovering, and exploring a vast collection of movies.
//         </p>

//         <p className="text-lg mb-4">
//           Whether you're looking for the latest releases, top-rated classics, or personalized recommendations, MovieVerse leverages powerful APIs and intuitive UI to bring the world of cinema to your fingertips. Developers can easily integrate our data-driven components for scalable applications using clean, reusable code.
//         </p>

//         <p className="text-lg mb-4">
//           This platform is built with performance and scalability in mind. Tailwind CSS ensures a responsive design that looks great on all devices, while React enables a dynamic and component-driven architecture for maintainable and efficient development.
//         </p>

//         <p className="text-lg">
//           Built by developers, for movie lovers — welcome to MovieVerse.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

// import React from 'react';

// const About = () => {
//   return (
//     <section className="min-h-screen bg-white text-gray-800 py-16 px-6">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-6 border-b-4 border-indigo-600 pb-2">
//           About CineScope
//         </h1>

//         <p className="text-xl mb-6 leading-relaxed">
//           <strong>CineScope</strong> is a high-performance, developer-focused movie discovery platform built with <span className="text-indigo-600 font-semibold">React.js</span> and styled using the utility-first power of <span className="text-indigo-600 font-semibold">Tailwind CSS</span>. Designed with scalability, speed, and modern UX in mind, CineScope offers a streamlined interface for browsing, searching, and curating movie collections.
//         </p>

//         <p className="text-lg mb-6 text-gray-700 leading-relaxed">
//           At its core, CineScope is API-driven, enabling real-time integration of dynamic movie data from industry-standard sources. The application architecture is modular, responsive, and optimized for both web and mobile devices. Developers can leverage its clean component structure and modern tooling to rapidly extend or adapt the platform for commercial or personal use.
//         </p>

//         <p className="text-lg mb-6 text-gray-700 leading-relaxed">
//           Built with maintainability and performance in mind, the platform embraces best practices in front-end engineering — including component reusability, lazy loading, and responsive design patterns. Whether you're a film buff or a developer looking to learn from a real-world React application, CineScope provides a polished, scalable example of modern web development.
//         </p>

//         <p className="text-lg text-gray-700">
//           CineScope is not just a movie app — it's a demonstration of how design systems and robust front-end architecture can elevate user experience and developer productivity in tandem.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-20 font-sans">
      <h1>
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ml-4 text-4xl ri-arrow-left-fill pr-4"
        ></i>
      </h1>
      <div className="W-full mx-auto relative flex justify-center">
        <h1 className="text-5xl absolute md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-purple-500 mb-10">
          About MOVIES 4U
        </h1>

        <div className="mt-36">
          <p className="text-lg  md:text-xl mb-8 text-gray-300 leading-relaxed">
            <span className="text-4xl text-green-600 animate-pulse ">.</span>{" "}
            <span className="text-white font-semibold">MOVIES 4U</span> is a
            modern movie discovery platform designed to bring the world of
            cinema to your fingertips. Whether you're into the latest
            blockbusters, timeless classics, or trending web series, MOVIES 4U
            makes it easy to explore, discover, and enjoy content across genres
            and languages.
          </p>

          <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
            <span className="text-4xl text-green-600 animate-pulse ">.</span>{" "}
            Explore the latest blockbusters, timeless classics, indie treasures,
            and personalized recommendations powered by dynamic movie APIs.
            CineScope's elegant UI, smooth animations, and dark-themed interface
            make browsing a cinematic experience in itself.
          </p>

          <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
            <span className="text-4xl text-green-600 animate-pulse ">.</span>{" "}
            Every element on this platform is crafted with scalability and
            performance in mind. From lazy-loaded components to responsive
            design and semantic structure, MOVIES 4U is not just another movie
            site—it's a full-stack development showcase built for real-world
            impact.
          </p>

          <p className="text-lg md:text-xl text-gray-300">
            <span className="text-4xl text-green-600 animate-pulse ">.</span>{" "}
            Whether you're a casual viewer, a binge-watcher, or a developer
            looking to build your next entertainment project, CineScope offers
            inspiration and functionality in one place.
          </p>
        </div>
        <h1 className=" bottom-[-60%] absolute md:text-4xl border-b-2 border-zinc-500 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-red-500 mb-10">
          Thanks for visit MOVIES 4U
        </h1>
      </div>
    </section>
  );
};

export default About;
