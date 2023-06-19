
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity( 'cats' )
export class Cats {
  @PrimaryGeneratedColumn( 'uuid' )
  id: string
  
  @Column( 'text',{ unique: true } )
  name: string

  @Column( 'text', { nullable: true } )
  description: string

  @Column( 'boolean', { default: true } )
  status: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @BeforeInsert()
  checkFields () {
    this.name = this.name.trim().toLowerCase()
  }

  @BeforeUpdate()
  checkOptionalFieldsBeforeUpdate () {
    this.checkFields()
  }
}
