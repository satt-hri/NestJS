import { Injectable } from "@nestjs/common";
import { User } from "src/entity/User";
import { Repository } from "typeorm/repository/Repository";
import { Stringifier } from 'csv-stringify';

@Injectable({})
export class AuthService {
  constructor(
    // private readonly userRepository: Repository<User>,
  ) { }

  // async getCsvStream(): Promise<Stringifier> {
  //   const qb = this.userRepository.createQueryBuilder('user');
  //   const stream = await qb.stream();

  //   // csv-stringifyを初期化
  //   const stringifier = new Stringifier({
  //     header: true,
  //     columns: ['id', 'name', 'age'],
  //   });

  //   // レコードのデータが読み込まれた
  //   stream.on('result', res => {
  //     stringifier.write([res.user_id, res.user_name, res.user_age]);
  //   });

  //   // レコードの読み込みが終了したとき
  //   stream.on('end', () => {
  //     stringifier.end();
  //   });

  //   return stringifier;
  // }

  login() {

  }
  signup() {

  }
}