import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withFormik } from 'formik';

class Form extends Component {
    render() {
        const { handleChange, handleSubmit, values } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="url" style={{ display: 'block' }}>
                        URL
                    </label>
                    <input id="url"
                        className="col-xs-12 col-sm-6"
                        value={values.url}
                        onChange={handleChange}
                        placeholder="Enter the URL"
                        type="text" />
                </div>
                <div className="row">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

const AddLinkForm = withFormik({
    mapPropsToValues: () => {
        return {
            url: ''
        }
    },
    handleSubmit: (values) => {
        const { url } = values;
        Meteor.call('links.insert', {
            url
        }, (err) => {
            if (err) throw err;
            alert('Link inserted!');
        });
    },
    displayName: 'AddLinkForm'
})(Form);

export default AddLinkForm;

Form.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    values: PropTypes.object
}
