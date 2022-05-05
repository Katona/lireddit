import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import config from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(config);
  await orm.getMigrator().up();
  const post = orm.em.create(Post, { title: "First Post" });
  await orm.em.persistAndFlush(post);
};

main();
