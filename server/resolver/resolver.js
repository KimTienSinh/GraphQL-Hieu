const {books, authors} = require('../data/static')

const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id.toString() === args.id),
        // {
        //     id: 1,
        //     name: 'sachs 1',
        //     genre: 'adventure',
        //     authorID: 1
        // }
        authors: () => authors,
        author: (parent, args) => authors.find(author => author.id == args.id)
    },
    Book: {
        author: (parent, args) => {
            return authors.find(author => author.id === parent.id)
        }
    },
    Author: {
        books: (parent, args) => {
            return books.filter(book => book.authorID === parent.id)
        }
    }
}

module.exports = resolvers
