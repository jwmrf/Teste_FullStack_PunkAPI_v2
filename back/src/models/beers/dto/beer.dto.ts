import { IsInt, IsString } from 'class-validator';
import { BaseEntity, Entity } from "typeorm";

@Entity()
export class Beer extends BaseEntity {
  @IsInt()
  page: number;
  @IsString()
  name?: string;
}