import { IsInt, IsString, isBoolean } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Beer extends BaseEntity {
  @IsInt()
  page: number;
}