
import './products.css';
// import Wrappers from "../Wrappers";
import { useEffect } from 'react';
import { useState } from 'react';
import UserCard from "../UserCard";
import QueryLoader from "../QueryLoader";



const Products = () => {
    const [users, setUsers] = useState([])
    const [fetching, setFetching] = useState(false)
    const [fetchError, setFetchError] = useState(null)
    useEffect(function () {
        setFetching(true)
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(resp => {

                setFetching(false)
                setUsers(resp)

            })
            .catch(err => {
                setFetching(false)
                setFetchError(err)

            });


    }, [])


    return (
        <>
            {/* <div>
                <div>{fetching && `Data is loading...`}</div>
                <div>{fetchError && `Opps, we have error...: ${fetchError}`}</div>
            </div> */}
            <QueryLoader fetching={fetching} error={fetchError} />
            <div className='products-list'>
                {users.map(({ name, username, phone, id }) => {

                    return (<UserCard
                        nameOfProduct={name}
                        image={username}
                        price={phone}
                        id={id} />)

                })}
            </div>


            {/* <Wrappers showDeafaultTexr={false}>
                <div> Hello
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio blanditiis unde maxime aperiam debitis possimus fugiat accusamus tempora deserunt nisi! Asperiores adipisci consequatur voluptatem explicabo eum iste et nam ducimus recusandae omnis quod sit molestias reiciendis, quae impedit illum, accusamus at odit architecto eius inventore, nemo nisi tempore hic? In.</p>
                </div>
            </Wrappers> */}
        </>
    )
}




export default Products;
