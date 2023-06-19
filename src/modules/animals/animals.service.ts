import { animalsRepository } from '../../startup/initializeModules';
import { CreateAnimalsDto, UpdateAnimalsDto } from './dtos';

export class AnimalsService {

  constructor () {}
  
  async findAll () {
    const animals = await animalsRepository.find()
    return animals
  }

  async findOne ( term : string ) {
    const animals = await animalsRepository.findOneBy({ id: term })
    return animals
  }

  async create ( createAnimalsDto : CreateAnimalsDto ) {
    const animals = animalsRepository.create( createAnimalsDto )
    return await animalsRepository.save( animals )
  }

  async update ( id : string, updateAnimalsDto : UpdateAnimalsDto ) {
    const animalsToUpdate = await animalsRepository.preload({
      id,
      ...updateAnimalsDto
    })

    if ( !animalsToUpdate ) return

    await animalsRepository.save( animalsToUpdate )
    return animalsToUpdate
  }

  async delete ( id : string ) {
    const animalsToDelete = await this.findOne( id )
    if ( !animalsToDelete ) return
    return await animalsRepository.delete( id )
  }
}
