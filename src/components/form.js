import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import Validate from "../pages/validate";

function ContactForm({ index }) {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mnqrnrkp");
  if (state.succeeded) {
    navigate("/validate");
  }
  return (
    <form action='' onSubmit={handleSubmit} className='w-3/4 mx-auto'>
      <input
        id='message'
        name='message'
        required
        type='text'
        className='block w-full border-2 rounded-md p-2'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      {index === 1 && (
        <div>
          <p className='text-gray-600 my-4 text-lg text-center'>
            Enter Password
          </p>
          <input
            id='password'
            name='password'
            required
            type='text'
            className='block w-full border-2 rounded-md p-2'
          />
          <ValidationError
            prefix='Password'
            field='Password'
            errors={state.errors}
          />
        </div>
      )}
      <button
        type='submit'
        disabled={state.submitting}
        className='w-full bg-[#1c44a5] hover:bg-blue-400 transition text-white font-bold text-sm my-4 p-4 rounded-md'
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
