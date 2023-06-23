import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const MysqlDataSource = new DataSource({
    type: "mysql",
    host: "dev5p.in.satt.jp",
    port: 3306,
    username: "root",
    password: "Abc123$%&",
    database: "sf-ri",
    synchronize: true,
    logging: true,
    entities: [User],
})
MysqlDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!" + Date().toString())
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });
