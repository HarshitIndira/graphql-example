const path = require('path');
const express = require('express');
const app = express();

const { graphqlHTTP } = require('express-graphql')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
});

const schema = makeExecutableSchema({
    typeDefs: [typesArray],
    resolvers: {
        Query: {
            products: (parent, args, context, info) => {
                console.log("Getting the products");
                return parent.products;
            },
            orders: (parent) => {
                console.log("Getting the orders");
                return parent.orders;
            }
        }
    }
})

const root = {
    products: require('./products/products.model'),
    orders: require('./orders/orders.model'),
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(3000, () => {
    console.log("Running on port 3000");
})