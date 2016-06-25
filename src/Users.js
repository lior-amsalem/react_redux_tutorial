import UsersList from './usersList/UsersList';
import UserForm from './userForm/UserForm';

class Users extends React.Component {

    constructor() {
        super();

        this.state = {
            userFormMode: 'hidden'
        };
    }

    changeUserFormMode(mode) {
        this.setState({
            userFormMode: 'add'
        });
    }

    render() {

        const {
            userFormMode
        } = this.state;

        const {
            users,
            onAdd,
            onRemove
        } = this.props;

        /**
         * Load users related components
         */
        return (
            <div>
                <hgroup>
                    <h2>
                        Members
                        <small>{userFormMode === 'hidden' && <a href="#" onClick={this.changeUserFormMode.bind(this,'add')}>Add User</a>}</small>
                    </h2>
                </hgroup>

                <UserForm onAdd={onAdd} userFormMode={userFormMode}/>

                <UsersList list={users.get('list')}
                    onRemove={onRemove}/>
            </div>
        )
    }
}

export default Users;