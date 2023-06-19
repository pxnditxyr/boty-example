
import { PartialType } from 'botyrest'
import { CreateCatsDto } from './create-cats.dto';

export class UpdateCatsDto extends PartialType( CreateCatsDto ) {}
