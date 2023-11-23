import RegistrationForm from '../RegistrationForm';
import EddProducForm from '../EddProducForm';
import Products from '../Products';
import Wrappers from '../Wrappers';
const Main = (props) => {
    const { onChangeUsersCount } = props
    return (
        <div>
            {/* <RegistrationForm /> */}
            {/* <EddProducForm /> */}
            <Products />

        </div>
    )
}
export default Main;
