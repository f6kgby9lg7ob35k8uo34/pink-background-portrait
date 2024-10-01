import React from 'react';
import PersonalIntro from '../components/PersonalIntro';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neon-pink via-neon-purple to-neon-blue text-white flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
      <PersonalIntro />
    </div>
  );
};

export default Index;