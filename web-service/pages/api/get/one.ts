import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/Util/database";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    let db = (await connectDB).db("forum")
    if (request.method !== "GET") {
        let result = await db.collection("post").find().toArray()
        return response.status(200).json(result)
    }
    return response.status(400).json("처리완료")
}