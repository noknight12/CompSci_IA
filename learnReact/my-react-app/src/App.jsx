import Header from './Header.jsx'
import Footer from './Footer.jsx'
import React, { useEffect } from 'react';



  
  const App = () => {
    useEffect(() => {
      // Create a script element
      const script = document.createElement('script');
      // Set the source of the script to the external file
      script.src = '../DBManager.cjs';
      // Set the script to load asynchronously
      script.async = true;
      // Append the script to the document body
      document.body.appendChild(script);
  
      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return(
      <>
      <Header/>
      <button onClick={() => window.greet()}>Greet</button>
      <Footer/>
      </>
    )
};


export default App
