import { DataSource } from "typeorm";
import { Grade } from "./entity/Grade";
import { Skill } from "./entity/Skill";
import { Wilder } from "./entity/Wilder";
import { Company } from "./entity/Company";
import { Photo } from "./entity/Photo";
const dataSource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, Skill, Grade, Company, Photo],
});

export default dataSource;
