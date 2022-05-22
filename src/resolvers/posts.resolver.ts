import { Query, Resolver } from "type-graphql";


@Resolver()
export class PostsResolver {
    constructor() {}

    @Query()
    async posts() {
        
    }
}