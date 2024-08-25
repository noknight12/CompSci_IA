import React from 'react'



class Header extends React.Component {
    handleClick = () => {
      this.forceUpdate();
    };
  
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click to re-render</button>
          <p>{Math.random()}</p>
        </div>
      );
    }
  }

  export default Header