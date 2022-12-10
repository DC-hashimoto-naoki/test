import { NextApiRequest, NextApiResponse } from "next"

type Todo = {
    title: string;
};

const todos: Todo[] = [
    { title: "reading" },
    { title: "programming" },
    { title: "walk" }
]

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));

    res.status(200).json(todos);
}