// server actions - 새로고침이 안 됨, use client 가능하지만 함수, 옮겨야 함
import {connectDB} from "@/Util/database";
import {revalidatePath} from "next/cache";

export default function Write2() {

    const handleSubmit = async (formData: FormData) => {
        'use server'
        let db = (await connectDB).db("forum")
        let title = formData.get('title')
        let content = formData.get('content')
        await db.collection('post').insertOne({title: title, content: content})

        revalidatePath('/write2') // 새로고침
    }

    return (
        <div className="p-20">
            <h4>글작성</h4>
            {/*server actions*/}
            <form action={handleSubmit}>
                <input name={"title"} placeholder={"글제목"} type="text"/>
                <input name={"content"} placeholder={"글내용"} type="text"/>
                <button type="submit">
                    버튼
                </button>
            </form>
        </div>
    )
}