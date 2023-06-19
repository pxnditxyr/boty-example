
import { PartialType } from 'botyrest'
import { CreateAnimalsDto } from './create-animals.dto';

export class UpdateAnimalsDto extends PartialType( CreateAnimalsDto ) {}
