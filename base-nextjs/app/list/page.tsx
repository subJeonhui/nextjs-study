'use client'
import Image from "next/image";
// import food0 from '/public/food0.png'
// import food1 from '/public/food1.png'
// import food2 from '/public/food2.png'
import {useState} from "react";


export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']
    let array = [1, 2, 3, 4, 5]
    let [countState, setCountState] = useState([0, 0, 0])

    return (
        <div>
            <h4 className="title">상품 목록</h4>
            <span>{countState[0]}</span>
            <button onClick={()=> {
                let copy = [...countState]
                copy[0]++
                setCountState(copy)
            }}>+</button>

            <span>{countState[1]}</span>
            <button >+</button>

            <span>{countState[2]}</span>
            <button>+</button>

            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="food">
                            <img src={`/food${index}.png`} alt="food" className="food-img"/>
                            <Image src={"/food" + index + ".png"} alt="food" width={500} height={400}/>
                            <h4> {index}. {product} $40</h4>
                            <span> {countState[index]} </span>
                            <button onClick={() => {
                                // setCountState(countState - 1)
                            }}>-
                            </button>
                            <button onClick={() => {
                                // setCountState(countState + 1)
                            }}>+
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
}