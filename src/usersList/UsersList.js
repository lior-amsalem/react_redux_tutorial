import './UsersList.scss';
import BaseTable from 'react-bootstrap/lib/Table'; // we extract Table only! not all react-bootstrap

class List extends React.Component {
    /**
     * - Constructor is initialize the first time we call component.
     * - Can contain inital state of our component (with setState).
     */
    constructor(props) {
        super(props);
    }

    /**
     * - Render function is required in react.
     * - It should be pure function without any interaction with the DOM or the browser.
     */
    render() {
        // props of list comes here

        return (
            <div className="list">
                {
                    // print list goes here
                }
            </div>
        )
    }
}

export default List;