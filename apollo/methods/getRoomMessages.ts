import { gql } from '@apollo/client';

export const GET_ROOM_MESSAGES = gql`
  query getRoomMessages($id: String!) {
    room(id: $id) {
      id
      user {
        id
      }
      messages {
        id
        body
        insertedAt
        user {
          id
          email
          firstName
          lastName
          role
        }
      }
    }
  }
`;
