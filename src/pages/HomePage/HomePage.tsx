
import Header from '@/components/commons/Header/Header';
import React from 'react';
import Main from './Main/Main';
import Journey from './Journey/Journey';
import CreateTour from './CreateTour/CreateTour';
import ReviewTour from './ReviewTour/ReviewTour';
import PhotoTour from './PhotoTour/PhotoTour';
import TravelHistory from './TravelHistory/TravelHistory';
import Footer from '@/components/commons/Footer/Footer';

function HomePage({ }) {
  return (
    <div className="App gap">
      <Header />
      <Main />
      <Journey />
      <CreateTour />
      <ReviewTour />
      <PhotoTour />
      <TravelHistory />
      <Footer />
    </div>
  );
}

export default HomePage;
