import Spinner from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components'

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </LoaderContainer>
  );
};

export default Loader;
const LoaderContainer = styled.div`
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
`;
