import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import cors from 'cors'
import {createConnection} from 'typeorm'
import { schema } from './Schema'

const main = async () =>{
    await createConnection({
        type:"mysql",
        database:"GraphQLCrud",
        username:"root",
        password:"root",
        logging:true,
        synchronize:false,
        entities: []

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