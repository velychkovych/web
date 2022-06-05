import React from 'react';

const UsersTableMember = ({value,...props}) => {
    return (
        <tr {...props}>
            <td>{value.id}</td>
            <td>{value.username}</td>
            <td>{value.firstName}</td>
            <td>{value.lastName}</td>
        </tr>
    );
};

export default UsersTableMember;