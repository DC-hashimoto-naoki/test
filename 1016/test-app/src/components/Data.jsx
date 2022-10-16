import { async } from "@firebase/util";
import { ref, set, onValue, child, get } from "firebase/database";
import { useEffect, useState } from "react";
import {database} from "../firebase";



function Data() {


    function getData() {
        const dbRef = ref(database);
        get(child(dbRef, `counter`)).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val()
                console.log(data.count);
                return data.count;
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    const [count, setCount] = useState(0);
    const [multiple, setMultiple] = useState(0);

    getData()

    useEffect(
        () => {
            setMultiple( count ** 2);
        },
        [count]
    )

    function writeData(count) {
        set(ref(database, 'counter/'), {
            count: count
        })
    }

    writeData(count)




    return (
        <div>
            data: {count}
            <div>
                <button onClick={() => setCount(count + 1)}>click</button>
            </div>
            multiple: {multiple}
        </div>
    )
}

export default Data;