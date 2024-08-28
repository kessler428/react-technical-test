import { baseUrl } from "../../common/constants/baseUrl";
import usersAdapter from "../adapters/usersAdapter";
import UserModel from "../models/userModel";

export default class UsersRepository {
    /**
     *
     * @returns {Promise<{newData: UserModel[]}>}
     */
    static async createUser(name: string, lastName: string, email: string): Promise<{newData: UserModel[]}> {
        try {

            const resp = await fetch(
                `${baseUrl.mockApi}/create user`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        lastName,
                        email
                    })
                }
            );

			const body = await resp.json();

            if (resp.status !== 200) {
                throw new Error(body.message)
            }

            const data = body.map( (item: any) => usersAdapter(item) )

            const newData = JSON.parse(JSON.stringify(data))

            return { newData }
            
        } catch (error) {
            throw error;
        }
    }

}