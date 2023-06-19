import { Delete, Get, Patch, Post } from 'botyrest'
import { AnimalsService } from './animals.service'
import { CreateAnimalsDto, UpdateAnimalsDto } from './dtos'

export class AnimalsController {
  [ key : string ]: any
    
  private readonly animalsService = new AnimalsService()

  constructor () {}

  @Get()
  async findAll () {
    return await this.animalsService.findAll()
  }

  @Get( ':term' )
  async findOne ( term : string ) {
    return await this.animalsService.findOne( term )
  }

  @Post()
  async create ( createAnimalsDto : CreateAnimalsDto  ) {
    return await this.animalsService.create( createAnimalsDto )
  }

  @Patch( ':id' )
  async update ( id : string, updateAnimalsDto : UpdateAnimalsDto ) {
    return await this.animalsService.update( id, updateAnimalsDto )
  }

  @Delete( ':id' )
  async delete ( id : string ) {
    return await this.animalsService.delete( id )
  }
}
