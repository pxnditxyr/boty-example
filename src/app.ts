import dotenv from 'dotenv'
dotenv.config()

import { BotyRestServer, Logger } from 'botyrest'
import { getEnvironmentVariables } from './config'
import { initilizeModules } from './startup'
import { AppDataSource } from './database'

const logger = new Logger( 'app' )

try {
  const server = new BotyRestServer({
    port: getEnvironmentVariables().port,
  })
  
  AppDataSource.initialize().then(async () => {
    initilizeModules(server);
    await server.initializeServer();
  }).catch(error => logger.error(error))
  
} catch ( error : any ) {
  logger.error( error )
}
