import { db } from "~/utils/db.server";
import { PrismaClient} from "@prisma/client"
import type {Joke} from "@prisma/client"
import { User } from "@prisma/client";
export async function findJoke(id: Joke["id"]){
        return db.joke.findUnique({
            where:{id},
        })
}

export async function deleteJoke(id: Joke["id"]){
    return db.joke.delete({
        where:{id}
    })
}

export async function updateJoke(id: Joke["id"], name: string, content: string){
    return db.joke.update({
        where: { id },
        data: { name, content }
    })
}

// export async function updateUser(id: User["id"], 
// username:string,email:string,passion:string,phone:string){
//     return db.user.update({
//         where:{id},
//         data:{username,email,passion,phone}
//     })
// }