'use client' // client component onclick, usestate 등 js 기능 넣기 가능 / 일부 부분만 client 가능

import {age, name} from './data';

export default function Cart() {
    let carts = ["Tomatoes", "Pasta", "Coconut"]
    return (
        <div>
            <h4 className="title">장바구니</h4>
            {age}, {name}
            {
                carts.map((item, index) => {
                    return <CartItem key={index} item={item}/>
                })
            }
            <Banner name={"현대"}/>
        </div>
    )
}

type CartItemProps = { item: string }

// server component - js 기능 넣기 불가능 / 로딩 속도 빠름 큰페이지
function CartItem(props: CartItemProps) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

type BannerProps = { name: string }

function Banner(props: BannerProps) {
    return <h5>{props.name} 결제 행사중</h5>
}