import { Delete, Get, Patch, Post } from 'botyrest'
import { CatsService } from './cats.service'
import { CreateCatsDto, UpdateCatsDto } from './dtos'

export class CatsController {
  [ key : string ]: any
    
  private readonly catsService = new CatsService()

  constructor () {}

  @Get()
  async findAll () {
    return await this.catsService.findAll()
  }

  @Get( ':term' )
  async findOne ( term : string ) {
    return await this.catsService.findOne( term )
  }

  @Post()
  async create ( createCatsDto : CreateCatsDto  ) {
    return await this.catsService.create( createCatsDto )
  }

  @Patch( ':id' )
  async update ( id : string, updateCatsDto : UpdateCatsDto ) {
    return await this.catsService.update( id, updateCatsDto )
  }

  @Delete( ':id' )
  async delete ( id : string ) {
    return await this.catsService.delete( id )
  }
}