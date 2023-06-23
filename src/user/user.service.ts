import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/User';
import { Repository } from 'typeorm';
import { Stringifier } from 'csv-stringify';
import { InjectRepository } from '@nestjs/typeorm';
import { createObjectCsvWriter } from 'csv-writer'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }
    async getCsvStream(): Promise<Stringifier> {
        const qb = this.usersRepository.createQueryBuilder('user');
        const stream = await qb.stream();

        // csv-stringifyを初期化
        const stringifier = new Stringifier({
            header: true,
            columns: ['id', 'age'],
        });

        // レコードのデータが読み込まれた
        stream.on('result', res => {
            console.log([res.user_id, res.user_age])
            stringifier.write([res.user_id, res.user_age]);
        });

        // レコードの読み込みが終了したとき
        stream.on('end', () => {
            console.log("レコードの読み込みが終了したとき")
            stringifier.end();
        });
        stringifier.on('error', function (err) {
            console.error(err.message);
        });

        return stringifier;
    }
    async exportCSV() {
   
          const qb = this.usersRepository.createQueryBuilder('user');
          const stream = await qb.stream();
  

          const data = [];
          // レコードのデータが読み込まれた
          stream.on('result', res => {
              console.log(1)
              
              data.push({id:res.user_id,firstName:res.user_firstName,lastName:res.user_lastName,age:res.user_age});
              csvWriter.writeRecords(data).then(() => {
                console.log(2)
               console.log(data)
               console.log('success')
             })
          });
  
          // // レコードの読み込みが終了したとき
          // stream.on('success', () => {
          //     console.log("レコードの読み込みが終了したとき")
          // });
          
          const csvWriter = createObjectCsvWriter({
            path: `out/output.csv`,
            header: [
              { id: 'id', title: 'id' },
              { id: 'firstName', title: 'firstName' },
              { id: 'lastName', title: 'lastName' },
              { id: 'age', title: 'age' }
            ],
          })
          console.log(2)
          // csvWriter.writeRecords(data).then(() => {
          //    console.log(2)
          //   console.log(data)
          //   console.log('success')
          // })
    }
}
