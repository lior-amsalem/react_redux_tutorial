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

    }
}

const Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Users);

export default Container;