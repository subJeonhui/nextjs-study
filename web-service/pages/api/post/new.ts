import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/Util/database";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    let db = (await connectDB).db("forum")
    if (request.method === "POST") {
        let title = request.body.title
        let content = request.body.content
        if (title == "") {
            return response.status(400).json("title is empty")
        }
        try {
            let result = await db.collection("post").insertOne({
                title: title,
                content: content
            })
            return response.status(200).redirect(request.headers.referer ?? "")
        } catch (e) {
            return response.status(400).json(e)
        }
    }
    return response.status(400).json("fail")
}