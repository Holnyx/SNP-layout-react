

import React from 'react';
import Main from './Main/Main';
import Journey from './Journey/Journey';
import CreateTour from './CreateTour/CreateTour';
import ReviewTour from './ReviewTour/ReviewTour';
import PhotoTour from './PhotoTour/PhotoTour';
import TravelHistory from './TravelHistory/TravelHistory';
import Header from '../../commons/Header/Header';
import Footer from '../../commons/Footer/Footer';
import { ScrollProvider } from '../../context/ScrollContext';



function HomePage({ }) {
  return (
    <ScrollProvider>
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
    </ScrollProvider>
  );
}

export default HomePage;
