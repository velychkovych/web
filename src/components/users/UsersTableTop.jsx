import React from 'react';

const UsersTableTop = (props) => {
    return (
        <tr {...props}>
            <th>Id</th>
            <th>Username</th>
            <th>First name</th>
            <th>Last name</th>
        </tr>
    );
};

export default UsersTableTop;