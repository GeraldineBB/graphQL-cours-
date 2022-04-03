import { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLInputObjectType, GraphQLNonNull} from "graphql"; 
  

// chaque object type doit avoir un nom, une description et plusieurs champs
export const Comment = new GraphQLObjectType ({
    name: "Comment",
    description: "Details of a comment",
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        content: {type: GraphQLString},

    })

});

export const CommentInputType = new GraphQLInputObjectType ({

    name: "CommentInput",
    fields: {
        name: { type : new GraphQLNonNull(GraphQLString)},
        content: { type : new GraphQLNonNull(GraphQLString)},
        postId: { type : new GraphQLNonNull(GraphQLInt)}

    }

})