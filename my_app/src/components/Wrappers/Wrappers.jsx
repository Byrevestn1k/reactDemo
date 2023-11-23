
import './wrappers.css';

const Wrappers = (props) => {
    console.log(props.chidren);
    const { children, showDeafaultTexr } = props
    return (
        <div className='cwrapper'>
            {showDeafaultTexr ? 'showDeafaultTexr...' : children}
            {/* {children} */}
        </div>
    )
}




export default Wrappers;
