import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";

const SingleUserPage = () => {
  const { id } = useParams();
  const [user, setUsers] = useState([]);
  const [fetching, setFetching] = useState(false)
  const [fetchError, setFetchError] = useState(null);
  useEffect(function () {
		setFetching(true)
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(response => response.json())
			.then(resp => {
				setFetching(false)
				setUsers(resp)
                console.log(user);

              
			})		
  			.catch(err => {
				setFetching(false)
				setFetchError(err)
			});
	}, [])

  return (
    <div className="singl-user">
       <h2>Single User with ID:<span> {user.id}</span></h2>
      <div>name: <span>{user.name}</span></div>
      <div>username: <span>{user.username}</span></div>
      <div>Single User with ID: <span> {user.id}</span></div>
      <div>phone: <span> {user.phone}</span></div>
      <div>email: <span> {user.email}</span></div>
      <div>website: <span> {user.website}</span></div>
      <div>city: <span> {user.address?.city}</span></div>
      <div>street: <span> {user.address?.street}</span></div>
      <div>suite: <span> {user.address?.suite}</span></div>
      <div>zipcode: <span> {user.address?.zipcode}</span></div>
  </div>
  );
};

export default SingleUserPage;
