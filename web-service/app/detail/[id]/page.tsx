import {connectDB} from "@/Util/database";
import {ObjectId} from "bson";

type DetailProps = {
    params: { id: string }
    searchParams: URLSearchParams
}

export default async function Detail(props: DetailProps) {

    let id = props.params.id
    let db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({_id: new ObjectId(id)})

    return (
        <div>
            <h1>상세페이지</h1>
            <h4>{result?.title ?? '게시글을 찾을 수 없음'}</h4>
            <p>{result?.content ?? ''}</p>
        </div>
    )
}
