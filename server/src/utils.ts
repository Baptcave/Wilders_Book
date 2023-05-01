import { DataSource } from "typeorm";
import { Grade } from "./entity/Grade";
import { Skill } from "./entity/Skill";
import { Wilder } from "./entity/Wilder";
import { Company } from "./entity/Company";
import { Profile } from "./entity/Profile";
const dataSource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, Skill, Grade, Company, Profile],
});

export default dataSource;
