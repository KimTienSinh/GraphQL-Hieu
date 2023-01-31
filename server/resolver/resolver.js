const {books, authors} = require('../data/static')

const resolvers = {
    // QUERY
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id.toString() === args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(author => author.id == args.id)
    },
    Book: {
        author: (parent, args) => 
             authors.find(author => parent.authorID == author.id)
        
    },
    Author: {
        books: (parent, args) => 
             books.filter(book => book.authorID == parent.id)
        
    },

    // MUTATION
    Mutation:{
        createAuthor: (parent, args) => args,
        createBook: (parent, args) => args
        
    }
}


module.exports = resolvers
