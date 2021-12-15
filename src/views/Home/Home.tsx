import React from 'react';
import { Icons } from '../../components/Home';
import { Navbar } from '../../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Icons />
    </div>
  );
};

export default Home;
