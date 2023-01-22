import React from "react";
import Form from '../components/form'
import FlowerArch from '../components/flowerArch'

const rsvp = () => {
  return (
    <>
    <FlowerArch />
    <div className="h-screen z-10 -mt-28 lg:-mt-36 mb-40">
      <Form/>
    </div>
    </>
    
  );
};

export default rsvp;