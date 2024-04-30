'use client'

import Link from "next/link";
import {WithId} from "mongodb";
import {Document, ObjectId} from "bson"

type ListItemProps = {
    result: { _id: string, title: string }[]
}

export default function ListItem(props: ListItemProps) {

    // useEffect(() => {
    // 서버에 부탁 - 검색 노출 어려울 수도, HTML을 유저에게 보여주고 난 뒤 호출
    // result = DB 게시물
    // }, [])

    // ajax
    const deletePost = async (id: string) => {

    }

    return <div>
        {
            props.result.map((post, index) => (
                <div className="list-item" key={index}>
                    <Link href={`/detail/${post._id}`}>
                        <h4>{post.title}</h4>
                    </Link>
                    <Link href={`/edit/${post._id}`}>
                        <h4>✏️️</h4>
                    </Link>
                    <span onClick={(e) => {
                        // fetch('/api/delete/one', {method: 'DELETE', body: post._id})
                        //     .then((r) => r.json())
                        //     .then((result) => {
                        //         e.target.parentElement.style.opacity = 0
                        //         setTimeout(() => {
                        //             e.target.parentElement.style.display = 'none'
                        //         }, 1000)
                        //     })
                        fetch('/api/test?name=kim')
                    }}>🗑️</span>
                    <p>1월 1일</p>
                </div>
            ))
        }
    </div>
}