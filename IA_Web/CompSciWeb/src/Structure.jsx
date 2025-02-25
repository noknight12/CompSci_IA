import { Outlet, Link } from "react-router-dom";
import './Structure.css';

const Structure = () => {
  return (
    <>
     <nav>
          <div id='pages'>
          <p>
            <Link to="/">StudentScreen</Link>
          </p>
          <br></br>
          <p>
            <Link to="/assignmentscreen">AssignmentScreen</Link>
          </p>
          </div>
          <div id='verticalLine'></div>

          <div id="dataPanel"></div>
        
      </nav>

      <Outlet />
    </>
  )
};

export default Structure;