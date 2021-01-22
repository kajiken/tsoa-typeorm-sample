import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  readonly id!: number;

  @Column()
  public firstName!: string;

  @Column()
  public familyName!: string;

  @CreateDateColumn()
  readonly created!: Date;

  @UpdateDateColumn()
  readonly updated!: Date;
}
