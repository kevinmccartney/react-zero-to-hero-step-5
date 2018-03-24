import styled from 'styled-components';

const Searchbar = styled.input`
  height: 50px;
  padding: 10px 20px;
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  flex-grow: 1;
  border: 0;
  width: 100%;

  ::placeholder {
    font-style: italic;
  }

  @media(min-width: 576px) {
    width: auto;
    padding: 15px 25px;
    font-size: 1.65rem;
  }
`;

export default Searchbar;
