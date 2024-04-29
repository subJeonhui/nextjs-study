import {connectDB} from "@/Util/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";

export default async function List() {
    let db = (await connectDB).db("forum")
    const fetchData = async () => {
        return await db.collection("post").find().toArray()
    }

    let result = await fetchData()

    return (
        <div className="list-bg">
            {
                result.map((post, index) =>
                    (
                        <div key={index} className="list-item">
                            <Link href={`/detail/${post._id}`}>
                                <h4>{post.title}</h4>
                            </Link>
                            <DetailLink/>
                            <p>1월 1일</p>
                        </div>
                    )
                )
            }
        </div>
    )
}