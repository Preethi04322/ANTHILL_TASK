import React from 'react';
import CarspaceHeader from '../Components/CarspaceHeader';
import Footer from '../Components/Footer';
import CarDetails from '../components/CarDetails';
import Location from '../components/Location';
import RelatedListings from '../components/RelatedListings';
import LoanCalculator from '../components/LoanCalculator';
import ContactOwner from '../components/ContactOwner';


export default function CarDetailPage() {
  return (
    <>
      <CarspaceHeader />
      <CarDetails />
      <ContactOwner/>
      <Location />
      <LoanCalculator/>
      <RelatedListings />
      <Footer />
    </>
  );
}
