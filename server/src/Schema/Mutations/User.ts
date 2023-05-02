import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDef/User";
import { User } from "../../Entities/User";
import { MessagesType } from "../TypeDef/Messages";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args
        await User.insert({ name, username, password })
        return args
    }
}

export const DELETE_USER = {
    type: MessagesType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        const { id } = args
        const user = await User.delete(id)

        if (user?.affected) {
            return {
                isSuccess: true,
                message: "User has been deleted"
            }
        } else {
            return {
                isSuccess: false,
                message: "User is not able to deleted"
            }
        }

    }
}
export const UPDATE_USER = {
    type: MessagesType,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        newPassword: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { username, password, newPassword } = args
        const user = await User.findOne({ username: username })
        const userPassword = user?.password
        if (password === userPassword) {
            const updatedUser = await User.update({ username: username }, { password: newPassword })
            if (updatedUser?.affected) {
                return {
                    isSuccess: true,
                    message: "User has been updated"
                }
            } else {
                return {
                    isSuccess: false,
                    message: "User is not able to updated"
                }
            }
        }
        else {
            throw new Error("Password doesn't match")
        }
    }
}