import { Outlet, Link } from "react-router-dom";

const Structure = () => {
  return (
    <>
     <nav>
        <ul>
          <li>
            <Link to="/">StudentScreen</Link>
          </li>
          <li>
            <Link to="/assignmentscreen">AssignmentScreen</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Structure;