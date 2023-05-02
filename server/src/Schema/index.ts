import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {  } from "module";
import { GET_ALL_USERS } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers:GET_ALL_USERS
    }
});
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser:CREATE_USER,
        updateUser:UPDATE_USER,
        deleteUser:DELETE_USER
    }
});
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
})