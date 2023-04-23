import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import "reflect-metadata";

@Entity()
export class authEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  token: string;

  @Column({ nullable: true })
  userID: string;
}
