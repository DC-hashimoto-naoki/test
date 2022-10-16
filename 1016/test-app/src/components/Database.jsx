import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
import { useEffect, useState } from 'react';

function Database() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const postData = collection(db, "dataCount");
        getDocs(postData).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                console.log(doc.data().count);
                setCount(doc.data().count)
            })
        })


    }, [count])

    return (
        <>
            <div>
                database {count}:
            </div>
            <button onClick={()=>{setCount(count - 1)}}>
                click me!
            </button>
        </>
    )
}

export default Database;