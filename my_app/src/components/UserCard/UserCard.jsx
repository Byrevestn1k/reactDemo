import { Link } from "react-router-dom";
import "./usercard.css";

const UserCard = ({
  name,
  username,
  email,
  id,
  onDeleteProduct,
	onUpdateProduct
}) => {
  return (
 
        
      <div className="common-user-card">
      <Link to={`/user/${id}`}>
        <div>{`Name : ${name}`}</div>
        <div>{`username : ${username}`}</div>
        <div>{`Email : ${email}`}</div>
        </Link>
        <button
        className='cart-button'
          type="button"
          onClick={() => {
          (onDeleteProduct(id));
          }}
        >
          Delete User
        </button>
        <button
        className='cart-button'
          type="button"
          onClick={() => {
            onUpdateProduct(id);
          }}
        >
          Update User
        </button>
      </div>
  
 
  );
};

export default UserCard;
