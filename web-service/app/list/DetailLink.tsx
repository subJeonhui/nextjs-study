'use client'

import {useRouter} from "next/navigation";

export default function DetailLink() {
    let router = useRouter()

    return (
        <button onClick={() => {
            // router.push('/')
            // router.back()
            // router.refresh() // soft refresh
            // router.forward()
            // router.prefetch('/') // 미리 로딩
        }}>버튼</button>
    )
}