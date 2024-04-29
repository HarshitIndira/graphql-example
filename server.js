const express = require('express');
const app = express();

const { graphqlHTTP } = require('express-graphql')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
});

const resolversArray = loadFilesSync('**/*', {
    extensions: ['resolvers.js']
})

const schema = makeExecutableSchema({
    typeDefs: [typesArray],
    resolvers: resolversArray,
}) 


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3000, () => {
    console.log("Running on port 3000");
})