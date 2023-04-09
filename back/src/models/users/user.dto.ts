import { IsInt, IsString, isBoolean } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @IsInt()
  id?: number;

  @IsString()
  readonly name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
  
  status?: true | false;
}