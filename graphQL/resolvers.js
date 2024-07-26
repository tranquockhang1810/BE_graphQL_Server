const Book = require('../models/Book.Model');
const Author = require('../models/Author.Model');

const resolvers = {
  Query: {
    books: async () => await Book.find(),
    authors: async () => await Author.find(),
    book: async (parent, args) => await Book.findById(args.id),
    author: async (parent, args) => await Author.findById(args.id),
  },
  Mutation: {
    addBook: async (parent, args) => {
      const book = new Book({ title: args.title, author: args.authorId, type: args.type });
      return await book.save();
    },
    updateBook: async (parent, args) => {
      const book = await Book.findById(args.id);
      book.title = args.title;
      book.author = args.authorId;
      book.type = args.type;
      return await book.save();
    },
    deleteBook: async (parent, args) => {
      return await Book.findByIdAndDelete(args.id);
    },
    addAuthor: async (parent, args) => {
      const author = new Author({ name: args.name, age: args.age, nation: args.nation });
      return await author.save();
    },
    updateAuthor: async (parent, args) => {
      const author = await Author.findById(args.id);
      author.name = args.name;
      author.age = args.age;
      author.nation = args.nation;
      return await author.save();
    },
    deleteAuthor: async (parent, args) => {
      return await Author.findByIdAndDelete(args.id);
    },
  },
  Book: {
    author: async (parent) => await Author.findById(parent.author),
  },
  Author: {
    books: async (parent) => await Book.find({ author: parent.id }),
  },
};

module.exports = resolvers;
