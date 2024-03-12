import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import BmiCalculator from './BmiCalculator';

const Home = () => {
  
  return (
    <Box>
      <HeroBanner />
      <BmiCalculator />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
