import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { AirlineSeatReclineExtraOutlined, AspectRatioSharp } from '@material-ui/icons';


const deleteItem = (items) => {
    items.target.remove()
}

const APIDemo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            response => setData(response.data))
    }, [])

    const filterid = data.filter((info) => info.id > 100)
    return (<div>
        {filterid.map((items, index) => <li key={items.id} onClick={deleteItem.bind(this)}>{items.title} </li>)}
    </div>
    )
}

export default APIDemo;