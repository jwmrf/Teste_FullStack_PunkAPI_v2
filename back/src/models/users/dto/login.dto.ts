import { IsString } from 'class-validator';
import { BaseEntity, Entity } from "typeorm";

@Entity()
export class Login extends BaseEntity {

  @IsString()
  email: string;

  @IsString()
  password: string;
}