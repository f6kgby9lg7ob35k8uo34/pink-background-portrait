import React from 'react';
import PersonalIntro from '../components/PersonalIntro';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink via-neon-purple via-neon-blue via-neon-green via-neon-yellow via-neon-orange to-neon-red bg-[length:400%_400%] animate-gradient-fade-fast"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/70"></div>
      <PersonalIntro />
    </div>
  );
};

export default Index;