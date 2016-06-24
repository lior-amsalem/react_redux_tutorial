import * as constants from './constants';
import {initialData} from './actions';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.get('users')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitialData: () => {
            dispatch(initialData());
        }
    }
}

const Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Users);

export default Container;