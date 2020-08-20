import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 15.5vw);
  grid-gap: 0;
  
  width: 100%;
  background-color: #484848;
  &:hover div {
    opacity: 0.5;
  } 
  
  
`;

const MainImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  border: solid 1px grey;
  overflow: hidden;
  ${Box}:hover &:hover {
    opacity: 1;
  }
  
  
  
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: solid;
  max-width: 100%;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &:hover {
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transform: scale(1.05);
    opacity: 1;
  }
  
`;

const BoxImage2 = styled.div`
  grid-column_start: 3,
  grid-column-end: 4,
  grid-row-start: 1;
  grid-row-end: 2;
  border: solid 1px grey;
  overflow: hidden;
  ${Box}:hover &:hover {
    opacity: 1;
  }
`;

const BoxImage3 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  border: solid 1px grey;
  overflow: hidden;
  ${Box}:hover &:hover {
    opacity: 1;
  }
`;

const BoxImage4 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  border: solid 1px grey;
  overflow: hidden;
  ${Box}:hover &:hover {
    opacity: 1;
  }
`;
const BoxImage5 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  border: solid 1px grey;
  overflow: hidden;
  ${Box}:hover &:hover {
    opacity: 1;
  }
`;

const imageBox = () => {
  //console.log(props.images[0]);
  //const randomListing = Math.floor(Math.random() * 100);
  return (
    <Box>
      <MainImage>
        <Img src="https://s3-us-west-1.amazonaws.com/fec-top-image-component/001.jpeg"/>
      </MainImage>
      <BoxImage2>
        <Img src="https://s3-us-west-1.amazonaws.com/fec-top-image-component/002.jpeg" />
      </BoxImage2>
      <BoxImage3>
        <Img src="https://s3-us-west-1.amazonaws.com/fec-top-image-component/003.jpeg" />
      </BoxImage3>
      <BoxImage4>
        <Img src="https://s3-us-west-1.amazonaws.com/fec-top-image-component/004.jpeg" />
      </BoxImage4>
      <BoxImage5>
        <Img src="https://s3-us-west-1.amazonaws.com/fec-top-image-component/005.jpeg" />
      </BoxImage5>
    </Box>
  );
};

export default imageBox;