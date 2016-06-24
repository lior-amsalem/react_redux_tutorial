import UsersList from "./usersList/UsersList";

class Users extends React.Component {

	render() {

		const {
			users
		} = this.props;

		/**
		 * Load users components
		 */
		return (
			<div>
				<UsersList list={users.get('list')}/>
			</div>
		)
	}
}

export default Users;