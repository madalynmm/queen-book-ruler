import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      username
      email
      password
      bookCount
      savedBooks {
        authors
        description
        bookId
        title
        image
        link
      }
    }
  }
    }
  }
`;