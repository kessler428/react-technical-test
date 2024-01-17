import { UserInterface } from "../../domain/interfaces/UserInterface"
import UserModel from "../models/userModel"

const usersAdapter = (hero: any): UserInterface => {
    return new UserModel(
        hero.id,
        hero.name,
        hero.avatar,
        hero.createdAt
    )
}

export default usersAdapter;