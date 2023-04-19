import Home from "pages/Home";
import Movies from "pages/Movies";
import { Container } from "./AppStyled";

import { NavLink, Route, Routes } from "react-router-dom";


export const App = () => {
  return (
    <Container>

      <nav>

      <span> <NavLink to='/' >Home</NavLink>  </span>
      <span> <NavLink to='/movies' >Movies</NavLink> </span>
        
      </nav>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/movies" element={ <Movies/> } />
        <Route path="/movies/:movieId"  element={<div>MovieDetails</div>} />

        
        

    </Routes>


  </Container>
   
  );
};

//===========================================
//  <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>