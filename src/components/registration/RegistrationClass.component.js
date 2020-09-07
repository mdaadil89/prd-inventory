import React from 'react'
import {connect} from 'react-redux';
import * as userActions from '../../redux/users/actions/users.action'
import FormikAddUserForm from './RegistrationForm.component'


class RegistrationClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormikAddUserForm />
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
      addUser: (user) => { dispatch(userActions.addUser(user)); }
    };
  }

export default connect(null, mapDispatchToProps)(FormikAddUserForm)