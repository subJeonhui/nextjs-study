import {connectDB} from "@/Util/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";
import ListItem from "@/app/list/ListItem";

export default async function List() {
    let result = await (await connectDB).db("forum").collection("post").find().toArray()

    return (
        <div className="list-bg">
            <ListItem result={result.map((p) => {
                return {
                    _id: p._id.toString(),
                    title: p.title as string
                }
            })}/>
        </div>
    )
}