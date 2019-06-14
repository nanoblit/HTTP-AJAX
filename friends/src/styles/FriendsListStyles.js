import styled from 'styled-components';

const FriendsListDiv = styled.div`
  border: 0.1rem solid blueviolet;
  border-radius: 1rem;
  background-color: azure;
`;

export default FriendsListDiv;

export const FriendDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid blueviolet;
  padding: 2rem;

  h1 {
    span{
      color: blueviolet;
      font-size: 1.5rem;
      font-weight: 100;
    }
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
