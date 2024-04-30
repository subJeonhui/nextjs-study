import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/Util/database";
import {ObjectId} from "bson";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    let db = (await connectDB).db("forum")
    if (request.method === "DELETE") {
        console.log("------delete one-------")
        try {
            console.log(request.body)
            let result = await db.collection('post').deleteOne({_id: new ObjectId(request.body)})
            return response.status(200).json(result)
        } catch (e) {
            return response.status(400).json(e)
        }
    }
    return response.status(400).json("fail")
}