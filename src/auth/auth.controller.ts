import { Controller, Get, Header, HostParam, HttpException, HttpStatus, Post, Redirect, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";

// import { MysqlDataSource } from "../data-source"
import { User } from "../entity/User"
import { Request,Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Get()
    async findAll() {
        // const user = new User()
        // user.firstName = "Timber"
        // user.lastName = "Saw"
        // user.age = 25
        // await user.save()
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    @Get("/users")
    async getAll() {
        // const allUsers = await User.find();
        // console.log(allUsers)
       // return MysqlDataSource.manager.find(User)
    }
    @Get("/user")
    @Header('Cache-Control', '123')
    @Redirect('https://docs.nestjs.com', 302)
    async getUser(@Req() req:Request) {

        // const firstUser = await MysqlDataSource
        //     .createQueryBuilder()
        //     .select("user.id")
        //     .from(User, "user")
        //     .where("user.id <> :id", { id: 0 })
        //     .getMany()
       // req.header( "application/json");
        console.log(req.get('header'))
        return { url: 'https://docs.nestjs.com/v5/' }
        //return req
    }
    @Get('signup')
    @Redirect('https://nestjs.com', 301)
    signup() {
        return { test: "hi" }
    }
    @Post('signin')
    signin() {
        return "I am  sign in"
    }
    @Get('test')
    test() {
        return "I am  test"
    }
}