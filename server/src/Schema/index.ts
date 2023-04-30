import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {  } from "module";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {}
});
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {}
});
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
})