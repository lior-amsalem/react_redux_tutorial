import * as constants from './constants';
import { add, remove } from './actions';
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
        },
        onRemove: (index) => {
            dispatch(remove(index));
        }
    }
}

const Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Users);

export default Container;