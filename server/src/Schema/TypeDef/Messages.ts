import {GraphQLObjectType,GraphQLID,GraphQLString, GraphQLBoolean} from 'graphql'
export const MessagesType = new GraphQLObjectType({
    name:'Messages',
    fields:()=>({
        isSuccess:{type:GraphQLBoolean},
        message:{type:GraphQLString}
    })
});