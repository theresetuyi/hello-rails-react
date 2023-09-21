import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from "./greetingSlice";

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.greeting)
   useEffect(() => {
    dispatch(fetchGreetings());
  }, [])
  return (
    <div>
      <Link to="/">Home</Link>
      <p>{greeting}</p>
      <button
        onClick={() => dispatch(fetchGreetings())}
      >
        Refresh
      </button>
    </div>
  )
};

export default Greeting;