import { Request, Response } from "express";
import createUser from "./services/createUser";

export function HelloWorld (request: Request, response: Response) {
    const user = createUser({
    email: 'gabrieltijon@gmail.com',
    password: '123456',
    techs: [
    'node',
    'react',
    'native']

    });

    return response.json({message: 'Hello world'})
} 