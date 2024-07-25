import profilePic from "./assets/placeholder.png";

function Card() {
  return (
    <div className="card">
      {/* <img src="https://via.placeholder.com/150" alt="profile picture" /> */}
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Assidiqi</h2>
      <p className="card-text">Learning Programmer</p>
    </div>
  );
}
export default Card;
