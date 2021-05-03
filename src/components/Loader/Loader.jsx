import Spinner from "react-loader-spinner";
import React from "react";

const Loader = () => {
  return (
    <>
      <Spinner
        type="Puff"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={3000} 
      />
    </>
  );
};

export default Loader;