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

  &:last-of-type {
    border-bottom: none;
  }
`;
