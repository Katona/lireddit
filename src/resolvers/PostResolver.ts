import { IDatabaseDriver, EntityManager, Connection } from "@mikro-orm/core";
import { Post } from "../entities/Post";
import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(
    @Ctx("em") em: EntityManager<IDatabaseDriver<Connection>>
  ): Promise<Post[]> {
    return em.find(Post, {});
  }

  @Query(() => Post, { nullable: true })
  post(
    @Arg("id", () => Int) id: number,
    @Ctx("em") em: EntityManager<IDatabaseDriver<Connection>>
  ): Promise<Post | null> {
    return em.findOne(Post, { id });
  }
}
