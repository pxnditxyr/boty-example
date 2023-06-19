
import { BotyRestServer, Module } from 'botyrest';
import { CatsController } from './cats.controller';

@Module({
  controllers: [ CatsController ],
})
export class CatsModule {
  constructor ( private server : BotyRestServer ) {}
}
