import { NextPage } from "next";
import { getDatabase, push, ref, onChildAdded } from '@firebase/database'
import { FormEvent, useEffect, useState } from "react";
import { FirebaseError } from "firebase/app";
import Message from "./Message";
import format from "date-fns/format";
import ja from "date-fns/locale/ja";

const ChatPage: NextPage = () => {
    const [message, setMessage] = useState<string>('');
    const [chatLogs, setChatLogs] = useState<{ message: string, createAt: string }[]>([]);
    const createAt = format(new Date(), 'HH:mm', { locale: ja })

    const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const db = getDatabase();
            const dbRef = ref(db, 'chat');
            await push(dbRef, {
                message,
                createAt
            })
            setMessage('')
        }
        catch (e) {
            if (e instanceof FirebaseError) {
                console.error(e)
            }
        }
    }

    useEffect(() => {
        try {
            const db = getDatabase();
            const dbRef = ref(db, 'chat');
            return onChildAdded(dbRef, (snapshot) => {
                console.log(snapshot.val());
                const message = String(snapshot.val()['message'] ?? '')
                const createAt = String(snapshot.val()['createAt'] ?? '')
                setChatLogs((prev) => [...prev, { message, createAt }])
            })
        } catch (e) {
            if (e instanceof FirebaseError) {
                console.error(e)
            }
            return;
        }
    }, [])

    return (
        <>
            <h1 className="font-bold">チャット</h1>
            {chatLogs.map((chat, index) => {
                return (
                    <div className="divide-solid">
                        <Message key={`chatMessage_${index}`} message={chat.message} createAt={chat.createAt} />
                    </div>
                )
            })}
            <form className="m-5" onSubmit={handleSendMessage}>
                <input value={message} onChange={(e => setMessage(e.target.value))} />
                <button type="submit" className="ring rounded-md mx-3">submit</button>
            </form>
        </>
    )
}

export { ChatPage };