import {connectDB} from "@/Util/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";

export default async function List() {
    let result = await (await connectDB).db("forum").collection("post").find().toArray()

    return (
        <div className="list-bg">
            {
                result.map((post, index) =>
                    (
                        <div key={index} className="list-item">
                            <Link href={`/detail/${post._id}`}>
                                <h4>{post.title}</h4>
                            </Link>
                            <Link href={`/edit/${post._id}`}>
                                <h4>✏️️</h4>
                            </Link>
                            {/*<DetailLink/>*/}
                            <p>1월 1일</p>
                        </div>
                    )
                )
            }
        </div>
    )
}