import * as constants from './constants';
import { add } from './actions'; // <-- add 'remove' here
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.get('users')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (name, family_name, age) => {
            dispatch(add(name, family_name, age));
        }
        // expose the remove here
    }
}

const Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Users);

export default Container;