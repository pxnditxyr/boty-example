export interface IEnvironmentVariables {
  port: number
  dbName: string
  dbPass: string
  dbUser: string
  dbHost: string
  dbPort: number
}

export const getEnvironmentVariables = () : IEnvironmentVariables => ({
  port: Number( process.env.PORT ) || 3000,
  dbName: process.env.DB_NAME || 'db_test',
  dbPass: process.env.DB_PASS || '1234',
  dbUser: process.env.DB_USER || 'pxndxs',
  dbHost: process.env.DB_HOST || '127.0.0.1',
  dbPort: Number( process.env.DB_PORT ) || 5432,
})