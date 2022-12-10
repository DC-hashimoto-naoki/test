import Link from "next/link";

type Todo = {
    title: string
}

async function getData() {
    const res = await fetch("http:///localhost:3000/api/todos");
    return res.json();
}

export default async function Page() {
    const todos: Todo[] = await getData();

    return (
        <>
            <h1>Todos</h1>
            {todos.map((todo) => {
                <div>{todo.title}</div>
            })}
            <Link href="/page1">page01</Link>
        </>
    );
}