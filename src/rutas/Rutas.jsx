import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from '../pages/Homes';
import REgistro from '../pages/Registro';





function Rutas() {

  return (
    <div>
      <Router>
        <Routes>
      
                        

                    <Route path="Home" element={<Homes/>}/>
                    <Route path="Registro" element={<REgistro/>}/>

                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas