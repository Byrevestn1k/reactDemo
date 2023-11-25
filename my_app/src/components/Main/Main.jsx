import RegistrationForm from '../RegistrationForm';
import EddProducForm from '../EddProducForm';
import Products from '../Products';
import Wrappers from '../Wrappers';
import Coctails from '../Coctails/Coctails';
const Main = (props) => {
    const { onChangeUsersCount } = props
    return (
        <div>
            {/* <RegistrationForm /> */}
            {/* <EddProducForm /> */}
            {/* <Products /> */}
            <Coctails />

        </div>
    )
}
export default Main;
