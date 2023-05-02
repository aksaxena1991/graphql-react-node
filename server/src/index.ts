import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import cors from 'cors'
import {createConnection} from 'typeorm'
import { schema } from './Schema'
import { User } from './Entities/User'

const main = async () =>{
    await createConnection({
        type:"mysql",
        database:"graphqlcrud",
        username:"root",
        password:"root",
        logging:true,
        synchronize:true,
        entities: [
            User
        ]

    })
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql",graphqlHTTP({
        schema:schema,
        graphiql:true
    }))
    app.listen(3005,()=>{
        console.log("Server running on 3005")
    })
}
main().catch((err)=>{
    console.log(err)
})