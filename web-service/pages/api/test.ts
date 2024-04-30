import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    console.log(request.query)
    return response.status(200).json(request.query)
}