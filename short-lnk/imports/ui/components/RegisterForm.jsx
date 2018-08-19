import { withFormik } from 'formik';
import { Accounts } from 'meteor/accounts-base';
import Form from './Form';

const LoginForm = withFormik({
    mapPropsToValues: props => {
        return {
            email: "",
            password: "",
            browserHistory: props.browserHistory
        }
    },
    handleSubmit: (values) => {
        const { browserHistory } = values;
        Accounts.createUser(values, (err) => {
            if(err) {
                alert(err.reason);
                return;
            }
            browserHistory.push('/links');
        });
    },
    displayName: 'RegisterForm'
})(Form);

export default LoginForm;
