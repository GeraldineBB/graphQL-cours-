import { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLInputObjectType } from "graphql"; 
import { Author } from "./Author";
import { Comment } from "./Comment"; 
import { fakeDatabase } from '../../FakeDatabase'; 
  

// chaque object type doit avoir un nom, une description et plusieurs champs
export const Post = new GraphQLObjectType ({
    name: "Post",
    description: "Details of a blog post",
    fields: () => ({
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
        author: {
            type: Author,
            // resolve function to access to the database
            // la fonction va recevoir une copie de notre objet post
            // et maintenant on veut retourner les info liées à ce post
            // on prend la valeur de post.author (à savoir l'id de l'auteur)
            // pour obtenir les info de l'auteur
            resolve: (post) => {
                return fakeDatabase.getAuthor(post.author)
            }
        },
        // comments = list of comments, so we will wrap the Type: Comment dans un new graphQl list object
        comments: {
            type: new GraphQLList(Comment),
            resolve: (post) => {
                return fakeDatabase.getCommentsForPost(post.id); 
            }

        }
    })

});


// export const PostInputType = new GraphQLInputObjectType ({

//     name: "PostInput",
//     fields: {
//         title: { type : new GraphQLNonNull(GraphQLString)},
//         content: { type : new GraphQLNonNull(GraphQLString)},
//         author: { type : new GraphQLNonNull(GraphQLString)}

//     }

// })


export const PostInputType = new GraphQLInputObjectType({
    name: 'PostInput',
    fields: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) }
    }
});