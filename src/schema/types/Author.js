  import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql"; 
  import Post from './Post'; 
  import { fakeDatabase } from '../../FakeDatabase'; 
  

  // chaque object type doit avoir un nom, une description et plusieurs champs
  export const Author = new GraphQLObjectType ({
      name: "Author",
      description: "All the details of an author on the website",
      fields: () => ({
          id: {type: GraphQLString},
          name: {type: GraphQLString},
          email: {type: GraphQLString},
          posts: {
              // list of posts => new GraphQLList
              type: new GraphQLList(Post), 
              resolve: (author) => {
                return fakeDatabase.getPostsOfAuthor(author.id); 
              }
          }

      })

  })