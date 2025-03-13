import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from '../pages/Homes';
import REgistro from '../pages/Registro';
import LOgin from '../pages/Login';






function Rutas() {

  return (
    <div>
      <Router>
        <Routes>
      
                        

                    <Route path="Home" element={<Homes/>}/>
                    <Route path="Registro" element={<REgistro/>}/>
                    <Route path="login" element={<LOgin/>}/>

                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas