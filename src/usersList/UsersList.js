import './UsersList.scss';
import BaseTable from 'react-bootstrap/lib/Table';

class List extends React.Component {
    /**
     * - Constructor is initialize the first time we call component.
     * - Can contain inital state of our component (with setState).
     */
    constructor() {
        super();
    }

    /**
     * - Render function is required in react.
     * - It should be pure function without any interaction with the DOM or the browser.
     */
    render() {
        const {
            list
        } = this.props;

        return (
            <div className="list">
                <hgroup>
                    <h2>Members</h2>
                </hgroup>

                <BaseTable striped bordered condensed hover className="users-list">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((member, index) => {
                            return (
                                <tr key={index}>
                                    <td>{member.get('name')}</td>
                                    <td>{member.get('age')}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </BaseTable>
            </div>
        )
    }
}

export default List;