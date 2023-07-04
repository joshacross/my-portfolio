import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import profilePhoto from "../../assets/profile-picture.png";

function Cover() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container d-flex flex-column align-items-center">
        <Image width={200} height={200} src={profilePhoto} roundedCircle />
        <h1 className="display-4">Josh Cross</h1>
        <ul className="list-group list-group-flush text-center mb-3">
          <li className="list-group-item">
            Certified MERN-Stack App Developer
          </li>
          <li className="list-group-item">UI/UX Designer</li>
          <li className="list-group-item">Junior Software Engineer</li>
        </ul>
        <Link to="/home">
          <Button variant="secondary">View More</Button>
        </Link>
      </div>
    </div>
  );
}

export default Cover;
