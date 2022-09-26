function User(props) {

    console.log(props)
    return (
        <span className="user">
        <span className="name">{props.userdata.name}</span>
        <span className="handle">{props.userdata.handle}</span>
      </span>
    );
}

export default User;