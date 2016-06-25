import './userForm.scss';

class UserForm extends React.Component {

    constructor() {
        super();

        this.state = {
            name: '',
            age: null
        };

        this.test = this.test.bind(this);
    }

    test() {
        console.log(this.state)
    }

    render() {
        const {
            userFormMode,
            onAdd
        } = this.props;

        // in case component is hidden
        if (userFormMode === 'hidden') {
            return null;
        }

        return (
            <form className="user-form">
                <input type="text" onChange={(e) => this.setState({name: e.target.value})} placeholder="Name" />
                <input type="number" onChange={(e) => this.setState({age: e.target.value})} placeholder="Age" />
                <input type="button" onClick={() => onAdd(this.state.name, this.state.age)} value="Add " />
            </form>
        );
    }
}

export default UserForm;