const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '15px',
      margin: '15px',
      borderRadius: '8px'
    }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
