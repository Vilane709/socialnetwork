import './profile.css';

function Profile() {
  return (
    <div className="profile">
	   	<div className="me">
		     <img className="ilon" src={require("../img/ilon.jpg")} />
		     <span className="name"> Elon Mask</span>
		</div>
	    <div className="posts">
		     <h1>My posts</h1>
		     <input placeholder="enter the post"></input>
		     <button>Add post</button>
        </div>
    </div>
  );
}

export default Profile;