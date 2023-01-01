import { FC } from "react";

type MessageProps = {
    message: string,
    createAt: string
}

const Message:FC<MessageProps> = ({message, createAt}: MessageProps) => {
    return (
        <div className="flex justify-between border-b border-b-violet-500 ">
            <p className="mx-3">{message}</p>
            <p className="mx-3 text-sm">{createAt}</p>
        </div>
    )
}

export default Message