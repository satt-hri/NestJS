import { Controller, Get, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get('csv')
    async getCsv(@Res() res: Response) {
      const strigifier = await this.userService.getCsvStream();
    
        res.setHeader('Content-Type', 'text/csv');
        return strigifier.pipe(res);
    }
}
