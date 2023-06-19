import { CreateCatsDto, UpdateCatsDto } from './dtos';
import { catsRepository, animalsRepository } from '../../startup/initializeModules'

export class CatsService {

  constructor () {}
  
  async findAll () {
    const cats = await catsRepository.find()
    const animals = await animalsRepository.find()
    return {
      cats,
      animals
    }
  }

  async findOne ( term : string ) {
    const cats = await catsRepository.findOneBy({ id: term })
    return cats
  }

  async create ( createCatsDto : CreateCatsDto ) {
    const cats = catsRepository.create( createCatsDto )
    return await catsRepository.save( cats )
  }

  async update ( id : string, updateCatsDto : UpdateCatsDto ) {
    const catsToUpdate = await catsRepository.preload({
      id,
      ...updateCatsDto
    })

    if ( !catsToUpdate ) return

    await catsRepository.save( catsToUpdate )
    return catsToUpdate
  }

  async delete ( id : string ) {
    const catsToDelete = await this.findOne( id )
    if ( !catsToDelete ) return
    return await catsRepository.delete( id )
  }
}
