import styled from 'styled-components';

const SearchButton = styled.button`
  text-transform: uppercase;
  border: 0;
  background-color: #28a745;
  font-family: 'Raleway', sans-serif;
  color: #fff;
  letter-spacing: 2px;
  font-size: 18px;
  padding: 25px;
  margin-top: 1rem;

  @media(min-width: 576px) {
    margin-top: 0;
  }
`;

export default SearchButton;
