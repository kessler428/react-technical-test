import UserModel from "../../data/models/userModel";
import UsersRepository from "../../data/repositories/usersRepository";

export default class GetAllUsers {

    async call(): Promise<{newData: UserModel[]}> {
        const users = await UsersRepository.getAllUsers();
        return users;
    }

}