import React from "react";
import Form from '../components/Form'
import FlowerArch from '../components/FlowerArch'

const rsvp = () => {
  return (
    <>
    <FlowerArch />
    <div className="h-screen z-10 -mt-28 lg:-mt-36">
      <Form/>
    </div>
    </>
    
  );
};

export default rsvp;