import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  color: #fff;
  font-size: 4.5rem;
  line-height: 5rem;

  @media(min-width: 576px) {
    font-size: 5.5rem;
    line-height: 6rem;
  }

  @media (min-width: 768px) {
    font-size: 6rem;
    line-height: 6rem;
  }
`;

export default Title;
