import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2%;
  width: 40%;
  background-color: pink;
  align-items: center;
`;

const StyledHeader = styled.h1`
  font-family: "Georiga", serif;
  color: white;
  font-size: calc(3px + 2vw);
  text-align: center;
`;

const StyledP = styled.p`
  font-family: "Baskerville", serif;
  font-size: calc(1px + 1.5vw);
  margin-top: 0;
  width: 80%;
  text-align: center;
`;

function Item(item) {
    return(
        <StyledDiv>
            <StyledHeader>{item.name}</StyledHeader>
            <StyledP>Brand: {item.brand}</StyledP>
            <StyledP>Price: ${item.price}</StyledP>
            <StyledP>Size: {item.size}</StyledP>
            <StyledP>Rating: {item.rating}/5.0</StyledP>
            <StyledP>Formula: {item.type}</StyledP>
            <StyledP>Sold At: {item.carrier}</StyledP>
        </StyledDiv>
    )
}

export default Item;