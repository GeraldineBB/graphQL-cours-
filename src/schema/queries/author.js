import { GraphQLString, GraphQLNonNull } from "graphql";
import Author from '../types/Author';
import { fakeDatabase } from '../../FakeDatabase';


// list of objects Post
export default {
    author: {
        type: Author,
        description: "Get a specific author",
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLString) // arg is required
            }
        }, // we need an argument to know which specific author we want
        // we say that this query accepts an arg called id 
        // resolve function to access the data and fetch them
        // resolve: function (parent, args) {
        //     return fakeDatabase.getAuthor(args.id);
        // }

        // with destructuring
        resolve: function (parent, {id}) {
            return fakeDatabase.getAuthor(id);
        }

    }
}