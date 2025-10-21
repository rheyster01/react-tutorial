import './App.css';

function Profile() {
  const name = "Katherine Johnson";
  const username = "@https.kath";
  const bio = "Computer Science student • Coffee & code ☕";
  const posts = 128;
  const followers = 1024;
  const following = 320;

  return (
    <div className="insta-profile">
      <div className="insta-header">
        <img 
          src="https://i.imgur.com/MK3eW3Am.jpg" 
          alt="Profile"
          className="insta-avatar"
        />
        <div className="insta-info">
          <h2>{name}</h2>
          <p className="username">{username}</p>
          <button className="follow-btn">Follow</button>
        </div>
      </div>

      <div className="insta-stats">
        <div>
          <strong>{posts}</strong>
          <span>Posts</span>
        </div>
        <div>
          <strong>{followers}</strong>
          <span>Followers</span>
        </div>
        <div>
          <strong>{following}</strong>
          <span>Following</span>
        </div>
      </div>

      <p className="bio">{bio}</p>
    </div>
  );
}

export default Profile;
