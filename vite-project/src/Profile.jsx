function Profile({name, role, avatarUrl}){
    return(
        <div className="profile-card">
            <img src={avatarUrl} alt={name} width="100"/>
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
}

export default Profile;