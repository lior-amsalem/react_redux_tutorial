import * as constants from './constants';
import Users from './Users';
// import action here

const mapStateToProps = (state) => {
    return {
        users: state.get('users')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // add 'onAdd' here
    }
}

const Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Users);

export default Container;