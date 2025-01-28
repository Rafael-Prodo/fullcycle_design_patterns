import TokenGenerator from "../../domain/service/TokenGenarator";
import UserRepository from "../repository/UserRepository";

export default class Login {
    constructor (readonly userRepository: UserRepository){
    }

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.getByEmail(input.email);
        if (!user) throw new Error("Authentication failed");
        const isValuePassword = await user.validatePassword(input.password);
        if (!isValuePassword) throw new Error("Authentication failed");
        const tokenGenerator = new TokenGenerator("secret");
        const token = tokenGenerator.generate(user, 1000000000, new Date("2025-01-24T10:00:00"));
        return {
            name: user.name.getValue(),
            token 
        };
    }
}

type Input = {
    email: string,
    password: string
}

type Output = {
    name: string,
    token: string
}