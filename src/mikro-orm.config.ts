import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
  },
  entities: [Post],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  allowGlobalContext: true,
  password: "postgres",
  user: "postgres",
} as Parameters<typeof MikroORM.init>[0];
