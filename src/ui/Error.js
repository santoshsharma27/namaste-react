import React from "react";
import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="text-center py-5">
      <h1>Oops!!!</h1>
      <h1>Something went wrong!!</h1>
      <h1>{err.status + ":" + err.statusText}</h1>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
};

export default Error;
