import * as Config from '../config/config';
import reducers from './reducers';
import UsersContainer from './container';

import './app.scss';

let store = Config.configureStore(reducers);

class Index extends React.Component {

    render() {

        return (
            <ReactRedux.Provider store={store}>
                <UsersContainer/>
            </ReactRedux.Provider>
        );
    }
}

export default Index;