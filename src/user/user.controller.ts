import { Controller, Get, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get('csv')
    async getCsv(@Res() res: Response) {
      const strigifier = await this.userService.exportCSV();
      //console.log(strigifier)
      //res.setHeader('Content-Type', 'text/csv');
      res.send();
      return '123';
    }
}
