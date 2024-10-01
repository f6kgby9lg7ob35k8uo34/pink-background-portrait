import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const PersonalIntro = () => {
  return (
    <div className="relative z-10 max-w-4xl w-full mx-auto bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold mb-4 text-white">John Doe</h1>
          <p className="mb-8 text-xl leading-relaxed text-white">
            I'm a passionate developer with a love for creating beautiful and functional web applications. 
            My expertise includes React, Node.js, and cloud technologies.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-neon-green transition-colors">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-neon-blue transition-colors">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-neon-purple transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full"></div>
          <img
            src="https://placekitten.com/300/300" // Replace with your actual photo URL
            alt="Profile"
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg">
          <p className="font-semibold text-neon-green mb-2">Email:</p>
          <p className="text-lg text-white">johndoe@example.com</p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg">
          <p className="font-semibold text-neon-blue mb-2">PGP Key:</p>
          <p className="text-xs break-all font-mono text-white">
            -----BEGIN PGP PUBLIC KEY BLOCK-----
            mQINBGHX5hABEADJbS8OKz6qMQYVLJeqvqVZJfHo1Zq...
            -----END PGP PUBLIC KEY BLOCK-----
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalIntro;