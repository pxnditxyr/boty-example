import { IsBoolean, IsOptional, IsString } from 'class-validator'

export class CreateCatsDto {
  @IsString()
  name: string

  @IsString()
  @IsOptional()
  description: string

  @IsBoolean()
  @IsOptional()
  status: boolean
}