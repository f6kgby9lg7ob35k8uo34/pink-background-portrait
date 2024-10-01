import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const PersonalIntro = () => {
  return (
    <div className="text-center max-w-2xl mx-auto bg-black bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
      <div className="relative w-48 h-48 mx-auto mb-8">
        <img
          src="https://placekitten.com/200/200" // Replace with your actual photo URL
          alt="Profile"
          className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-pink-500 transition-all duration-300 hover:scale-105 hover:border-pink-300"
        />
      </div>
      <h1 className="text-5xl font-bold mb-4 text-pink-200">John Doe</h1>
      <div className="flex justify-center space-x-6 mb-8">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-400 transition-colors">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-400 transition-colors">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-400 transition-colors">
          <FaLinkedin />
        </a>
      </div>
      <p className="mb-8 max-w-md mx-auto text-lg leading-relaxed">
        I'm a passionate developer with a love for creating beautiful and functional web applications. 
        My expertise includes React, Node.js, and cloud technologies.
      </p>
      <div className="mb-8 bg-pink-900 bg-opacity-30 p-4 rounded-lg">
        <p className="font-semibold text-pink-200 mb-2">Email:</p>
        <p className="text-pink-300">johndoe@example.com</p>
      </div>
      <div className="bg-pink-900 bg-opacity-30 p-4 rounded-lg">
        <p className="font-semibold text-pink-200 mb-2">PGP Key:</p>
        <p className="text-xs break-all max-w-md mx-auto text-pink-300 font-mono">
          -----BEGIN PGP PUBLIC KEY BLOCK-----
          mQINBGHX5hABEADJbS8OKz6qMQYVLJeqvqVZJfHo1Zq...
          -----END PGP PUBLIC KEY BLOCK-----
        </p>
      </div>
    </div>
  );
};

export default PersonalIntro;