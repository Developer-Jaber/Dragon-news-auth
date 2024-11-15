import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="space-x-5 nav">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex items-center gap-2 login">
        <div className=" ">
          <img src={userIcon} alt="" />
        </div>
        <Link to='/auth/login' className="rounded-none btn btn-neutral">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
