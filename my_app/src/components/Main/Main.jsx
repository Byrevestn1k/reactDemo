import RegistrationForm from '../RegistrationForm';
import EddProducForm from '../EddProducForm';
const Main = (props) => {
    const { onChangeUsersCount } = props
    return (
        <div>
            {/* <RegistrationForm /> */}
            <EddProducForm />
        </div>
    )
}
export default Main;
