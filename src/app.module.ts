import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { User } from 'src/entity/User';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "dev5p.in.satt.jp",
    port: 3306,
    username: "root",
    password: "Abc123$%&",
    database: "sf-ri",
    synchronize: true,
    logging: true,
    entities: [User],
  }), AuthModule, UserModule, BookmarkModule],
})
export class AppModule { }
