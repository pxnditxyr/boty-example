
import { BotyRestServer, Module } from 'botyrest';
import { AnimalsController } from './animals.controller';

@Module({
  controllers: [ AnimalsController ],
})
export class AnimalsModule {
  constructor ( private server : BotyRestServer ) {}
}
