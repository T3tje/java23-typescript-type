import {useState} from "react";


type articleProps = {
    h2: string,
    p1: string,
    p2:string,
}

export default function Article1(props:articleProps) {
    const [count, setCount] = useState<number>(0)

    const increaseCount = () => {
        setCount(count +1)
    }

    return (
        <article id="eins">
            <h2 >{props.h2}</h2>
            <p>{props.p1}</p>
            <p className="rounded-tag">{props.p2}</p>
            <div className={"vote"}>
                <p className="countNumber">{count}</p>
                <button onClick={increaseCount}>Vote</button>
            </div>


        </article>
    )
}