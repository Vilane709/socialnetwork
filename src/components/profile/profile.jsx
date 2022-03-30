import './profile.css';
import Posts from './posts/posts.jsx'

function Profile() {
  return (
    <div className="profile">
	   	<div className="me">
		      <img className="ilon" src={require("../img/ilon.jpg")} />
		      <div className="name">
			      <span> Elon Mask</span>
			      <p>\@-@/</p>
			      <p>Москва</p>
			 		</div>
			</div>
			<Posts />
		</div>
  );
}

export default Profile;