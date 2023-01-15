import React from "react";
import axios from "axios";
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';


function Form() {
  const [state, setState] = React.useState({
    name: "",
    rsvp: "",
    allergy: "",
  });

  function handleChange(e) {
    const checkedName = e.target.name;
    if (e.target.files) {
      setState({ ...state, [e.target.name]: e.target.files[0] });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();

    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }

    // Use fetch or axios to submit the form
    await axios
      .post(
        "https://formeezy.com/api/v1/forms/63a5ac4a01636f0008be9936/submissions",
        formData
      )
      .then(({ data }) => {
        const { redirect } = data;
        // Redirect used for reCAPTCHA and/or thank you page
        window.location.href = redirect;
      });
  }

  return (
    <div className="text-center text-lg px-8">
      <h1 className="mt-10 text-4xl font-bold">RSVP</h1>
      <p className="mt-5">
        Please let us know if you are planning to joining us by the latest February 28th 2023
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-80 my-10 m-auto p-10 border-4 border-solid border-neutral shadow rounded-md flex flex-col"
      >
        <label htmlFor="name" className="pb-2">
          Name(s)
        </label>
        <input
          onChange={handleChange}
          value={state.name}
          name="name"
          className="w-48 m-auto rounded-md"
          type="text"
          required
        />
        <label html="rsvp" className="pt-2">Will be..</label>
        <select onChange={handleChange} value={state.rsvp} className="w-48 m-auto text-center rounded-md" name="rsvp" required>
          <option></option>
          <option>Attending!</option>
          <option>Not attending</option>
        </select>
        
        <label htmlFor="allergy" className="mt-5 pb-2">
          Dietary requirements:
        </label>
        <textarea onChange={handleChange} name="allergy" type="text" value={state.allergy} className="rounded-md" required/>
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
          <button type="submit" className="mt-5 py-3 w-28 m-auto bg-neutral border border-plum rounded-md">
          SUBMIT
        </button>
        </motion.div>
        <p className="pt-8 text-sm">
          Any questions?
        </p>
        <motion.div
        whileHover={{ scale: 1.1 }}>
        <p>Jim: 07523154591</p>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1 }}>
        <p>Helen: 07864938696</p>
        </motion.div>
        
      </form>
    </div>
  );
}

export default Form;
