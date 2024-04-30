import {connectDB} from "@/Util/database";
import {ObjectId} from "bson";


type EditProps = {
    params: { id: string }
    searchParams: URLSearchParams
}

export default async function Edit(props: EditProps) {

    let id = props.params.id
    let db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({_id: new ObjectId(id)}) ?? {_id: "", title: "", content: ""}

    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST" id={id}>
                <input style={{display: "none"}} name={"_id"} placeholder={"아이디"} type="text"
                       defaultValue={result._id.toString()}/>
                <input name={"title"} placeholder={"글제목"} type="text" defaultValue={result.title}/>
                <input name={"content"} placeholder={"글내용"} type="text" defaultValue={result.content}/>
                <button type="submit">
                    버튼
                </button>
            </form>
        </div>
    )
}