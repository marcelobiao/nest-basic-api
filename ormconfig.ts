import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"

const config: PostgresConnectionOptions = {
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'docker',
    password: 'docker',
    database: 'nest_api',
    entities: ["dist/src/**/*.entity.js"],
    //synchronize: true,
    migrationsTableName: "migration_table",
    migrations: ["dist/src/database/migrations/*.js"],
    cli: {
        "migrationsDir": "src/database/migrations"
    }
 }

 export default config;