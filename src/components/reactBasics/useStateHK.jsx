import React, { useState } from 'react';
import UseFectch from './useFetch.jsx';

/* Following is update the state using setState method in class component
class UseStateHK extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "Sushanth Rao Thurpu"
        }
    }
    render() {
        return (<div> This is {this.state.Name}{this.state.age}
            <button
                onClick={() => { this.setState({ age: 50 }); console.log(this.state); }}>Click Here </button>
        </div >
        )
    }
}
export default UseStateHK;*/

//Following is using of functinal components
export default function UseStateHook() {
    const [user, setUser] = useState({ Name: "Sushanth Rao", age: 50 });
    const [count, setCount] = useState(0);
    // const [apidata, setApidata] = useState([]);

    //imported the custom hook and applied multiple APIS in the same HOOK
    const todos = UseFectch("https://jsonplaceholder.typicode.com/todos")
    const users = UseFectch("https://jsonplaceholder.typicode.com/users")


    //following are componentdidmount and componentdidupdate
    /* // following is before create customhook to use multiple APIS 
     useEffect(() => {
         axios.get("https://jsonplaceholder.typicode.com/todos")
             .then(response => setApidata(response.data));
         axios.get("https://jsonplaceholder.typicode.com/users")
             .then(response => setApidata(response.data)); //add multiple APIS by changing the useState
         return () => {
             console.log("Will unmount") //unscribe from this
         };
     }, [count])*/


    /* const filterid = apidata.filter(info => info.id > 100)
     console.log(filterid);
     {filterid.map(items => <li key={items.id}>{items.title} </li>)}*/

    //console.log(user.Name, user.age)
    return (<div>
        <h3>{count}</h3>
        Hi this is {user.Name} <br />
        {todos.map(items => <li key={items.id}>{items.title} </li>)}
        {users.map(user => <li>{user.id} </li>)}
        <button
            onClick={() => setCount(count + 1)}> update </button>
        <button onClick={() => setCount(0)}>Clear</button>
        <button onClick={() => setUser({ age: 20 })}> Click here </button><br />

    </div >
    );
}

