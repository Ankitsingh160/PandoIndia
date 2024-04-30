


const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser,id) => {
                    const {fname, lname, email, address, phone} = curUser;

                    return (
                        <tr key={id}>
                            <td>{fname}</td>
                            <td>{lname}</td>
                            <td>{email}</td>
                            <td>{address}</td>
                            <td>{phone}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;