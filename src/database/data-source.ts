import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { getEnvironmentVariables } from '../config'
import { Cats } from '../modules/cats'
import { Animals } from '../modules/animals'

const {
  dbHost,
  dbName,
  dbPass,
  dbPort,
  dbUser,
} = getEnvironmentVariables()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: dbHost,
  port: dbPort,
  username: dbUser,
  password: dbPass,
  database: dbName,
  synchronize: true,
  logging: false,
  entities: [Animals, Cats],
  migrations: [],
  subscribers: [],
})
