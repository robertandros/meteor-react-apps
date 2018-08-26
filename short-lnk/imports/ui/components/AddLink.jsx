import React, { Component } from 'react';
import AddLinkForm from './AddLinkForm';

class AddLink extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <p>Add a new link</p>
                </div>
                <AddLinkForm />
            </div>
        );
    }
}

export default AddLink;
