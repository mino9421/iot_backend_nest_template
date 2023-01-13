/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './posts/entities/post.entity';
import { PostsModule } from './posts/posts.module';
import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './data/users/users.module';



const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: '../db',
  entities: [Post],
  synchronize: true,
};

@Module({
  imports: [PostsModule, TypeOrmModule.forRoot(config), MongooseModule.forRoot('mongodb+srv://armen:mino199421@comp3123.flrd9.mongodb.net/?retryWrites=true&w=majority'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
