import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!, $authors: [String]!, $description: String!, $title: String! $image: String!, $link: String) {
    saveBook(bookId: $bookId, authors: $authors, description: $description title: $title, image: $image, link: $link) {
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;