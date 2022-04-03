import { GraphQLInputObjectType, GraphQLSchema } from "graphql";
import posts from "./queries/posts";
import author from "./queries/author";
import post from "./queries/post";

import addPost from "./mutations/addPost";
import addComment from "./mutations/addComment";

// on va importer tous les autres fichiers et faire le shcema complet
const schema = new GraphQLSchema ({
    query : new GraphQLInputObjectType({
        name: 'Rootquery',
        fields: () => ({
            ...posts, 
            ...post,
            ...author,
        })
    }),

    mutation : new GraphQLInputObjectType({
        name: 'Rootmutation',
        fields: () => ({
            ...addPost, 
            ...addComment
        })
        
    })
})


export default schema; 