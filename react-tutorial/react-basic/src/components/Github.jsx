import React, {useState, useEffect} from "react";

const Github = ()=>{
    const [id, setId] = useState('DC-hashimoto-naoki');
    const [name, setName] = useState('');

    const ids = ['DC-hashimoto-naoki', 'aws', 'twitter', 'facebook'];
    const getRandomId = ()=>{
        const _id = ids[Math.floor(Math.random() * ids.length)];
        setId(_id)
    }

    useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setName(data.name);
            })
            .catch(error => {
                console.error(error)
            })
    }, [id]);

    return(
        <div>
            <p>{id} is {name}</p>
            <button onClick={getRandomId}>change ID</button>
        </div>
    )
}

export default Github;