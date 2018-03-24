import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/cutting-board.jpg');
  background-position: center center;
  background-size: cover;
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
    opacity: .6;
  }
`;

export default Background;
