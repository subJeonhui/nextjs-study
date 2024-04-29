import Image from "next/image";
import Link from "next/link";

// Main Page
export default function Home() {
    let name = 'park'
    let age = 20
    let link = 'https://www.naver.com'
    return (
        <div>
            <h4 style={{ color:'red', fontSize: '30px' }} className="text-red-500">애플 후레쉬</h4>
            <h4 className="text-red-500">by dev {name}</h4>
            <a href={link}>링크</a>
        </div>
    );
}

