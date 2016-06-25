import UsersList from './usersList/UsersList';
// import UserForm from './userForm/UserForm';

class Users extends React.Component {

    constructor() {
        super();

        // set initial state of 'userFormMode'
    }

    // create handle function for the 'add' link

    render() {

        // add this.state 'userFormMode'

        const {
            users
        } = this.props;

        /**
         * Load users related components
         */
        return (
            <div>
                <hgroup>
                    <h2>
                        Members
                        {
                            // output add 'add' link here
                        }
                    </h2>
                </hgroup>

                {
                    // output add form component here
                }
                <UsersList list={users.get('list')}/>
            </div>
        )
    }
}

export default Users;