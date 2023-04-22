import { DataSource } from "typeorm";
import { dataEntity } from "../model/dataEntity";
import { rightEntity } from "../model/rightModel";
import { authEntity } from "../model/authModel";
import { authTestEntity } from "../model/authTestModel";

export const database = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Petxcanadi@2020",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [dataEntity, rightEntity, authEntity, authTestEntity],
});
