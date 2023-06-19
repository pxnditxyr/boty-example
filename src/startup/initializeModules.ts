import { BotyRestServer } from 'botyrest';
import { Animals, AnimalsModule } from '../modules/animals'
import { Cats, CatsModule } from '../modules/cats'
import { Repository } from 'typeorm';
import { AppDataSource } from '../database';

export const catsRepository : Repository<Cats> = AppDataSource.getRepository( Cats )
export const animalsRepository : Repository<Animals> = AppDataSource.getRepository( Animals )

export const initilizeModules = ( server : BotyRestServer ) => {
  const catsModule = new CatsModule( server )
  const animalsModule = new AnimalsModule( server )

}
