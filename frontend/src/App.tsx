import { BrowserRouter, Routes, Route,Link } from "react-router-dom"



export default function App() {


  return (
    <>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" >
            <h1>Equipment Management System</h1>
          </Route>
          <Route path="/companies">
            {/* TODO: Add Companies component */}
          </Route>
          <Route path="/equipment">
            {/* TODO: Add Equipment component */}
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
} 


function Navigation(){
  return<>
  <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
            <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/equipment">Equipment</Link></li>
    </ul>
  </nav>
  </>
}