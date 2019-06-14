import styled from 'styled-components';

const AppDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 2rem;

  nav {
    display: flex;
    justify-content: center;
    margin: 2rem 0 2rem;

    a {
      margin: 0 1rem;
      color: blueviolet;
      text-decoration: none;
    }
  }

  >h1 {
    text-align: center;
  }
`;

export default AppDiv;
