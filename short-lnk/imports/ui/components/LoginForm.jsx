import { withFormik } from 'formik';
import { Meteor } from 'meteor/meteor';
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
        Meteor.loginWithPassword(values.email, values.password, (err) => {
            if(err) {
                alert(err.reason);
                return;
            }
            browserHistory.push('/links');
        });
    },
    displayName: 'LoginForm'
})(Form);

export default LoginForm;
