import { FC } from "react";

type MessageProps = {
    message: string,
    createAt: string
}

const Message:FC<MessageProps> = ({message, createAt}: MessageProps) => {
    return (
        <div>
            <p>{message}</p>
            <p>{createAt}</p>
        </div>
    )
}

export default Message