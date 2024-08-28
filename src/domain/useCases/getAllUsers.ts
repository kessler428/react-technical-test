import UserModel from "../../data/models/userModel";
import UsersRepository from "../../data/repositories/usersRepository";

export default class GetAllUsers {

    async createUser(name: string, lastName: string, email: string): Promise<{newData: UserModel[]}> {
        const users = await UsersRepository.createUser(name, lastName, email);
        return users;
    }

}