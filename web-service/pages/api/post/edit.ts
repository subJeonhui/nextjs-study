import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/Util/database";
import {ObjectId} from "bson";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    let db = (await connectDB).db("forum")
    if (request.method === "POST") {
        let title = request.body.title
        let content = request.body.content
        if (title == "") {
            return response.status(400).json("title is empty")
        }
        try {
            console.log(request.body)
            let result = await db.collection('post').updateOne({_id: new ObjectId(request.body.id)}, {$set: {title: title, content: content}})
            return response.status(200).redirect("/list").json(result)
        } catch (e) {
            return response.status(400).json(e)
        }
    }
    return response.status(400).json("fail")
}