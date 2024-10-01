import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const PersonalIntro = () => {
  return (
    <div className="text-center">
      <img
        src="https://placekitten.com/200/200" // Replace with your actual photo URL
        alt="Profile"
        className="mx-auto object-cover rounded-full w-48 h-48 mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">John Doe</h1>
      <div className="flex justify-center space-x-4 mb-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
          <FaLinkedin />
        </a>
      </div>
      <p className="mb-6 max-w-md mx-auto">
        I'm a passionate developer with a love for creating beautiful and functional web applications. 
        My expertise includes React, Node.js, and cloud technologies.
      </p>
      <div className="mb-6">
        <p className="font-semibold">Email:</p>
        <p>johndoe@example.com</p>
      </div>
      <div>
        <p className="font-semibold">PGP Key:</p>
        <p className="text-xs break-all max-w-md mx-auto">
          -----BEGIN PGP PUBLIC KEY BLOCK-----
          mQINBGHX5hABEADJbS8OKz6qMQYVLJeqvqVZJfHo1Zq...
          -----END PGP PUBLIC KEY BLOCK-----
        </p>
      </div>
    </div>
  );
};

export default PersonalIntro;