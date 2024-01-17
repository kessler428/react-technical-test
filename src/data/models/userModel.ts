export default class UserModel {

    id: string;
    name: string;
    avatar: string;
    createdAt: string;

    constructor(
        id: string,
        name: string,
        avatar: string,
        createdAt: string
    ) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.createdAt = createdAt;
    }

}