

import Home from "./pages/Home"
import Send from "./pages/Send"
import Phone from "./pages/Phone"
import Success from "./pages/Success"
import Complete from "./pages/Complete"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





function App() {
  


  return (
        
    <BrowserRouter>
          
       <main>
         
         
          <Routes>
             <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
             <Route path="/send" element={<Send />} />
          </Routes>
          <Routes>
             <Route path="/phone" element={<Phone />} />
          </Routes>
          <Routes>
             <Route path="/success" element={<Success />} />
          </Routes>
          <Routes>
             <Route path="/complete" element={<Complete />} />
          </Routes>
       </main>
    
    </BrowserRouter>
    
  )
}

export default App
