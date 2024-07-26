const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: Author
    status: Int!
    type: String
    created_at: String
    updated_at: String
  }

  type Author {
    id: ID!
    name: String!
    books: [Book]
    age: Int
    nation: String
    type: String
    status: Int!
    created_at: String
    updated_at: String
  }

  type Query {
    books: [Book]
    authors: [Author]
    book(id: ID!): Book
    author(id: ID!): Author
  }

  type Mutation {
    addBook(
        title: String!, 
        authorId: ID!, 
        type: String!,
      ): Book
    updateBook(
        id: ID!,
        title: String!,
        authorId: ID!,
        type: String!,
      ): Book
    deleteBook(id: ID!): Book
    addAuthor(
      name: String!,
      age: Int!,
      nation: String!,
    ): Author
    updateAuthor(
      id: ID!,
      name: String!,
      age: Int!,
      nation: String!,
    ): Author
    deleteAuthor(id: ID!): Author
  }
`;

module.exports = typeDefs;