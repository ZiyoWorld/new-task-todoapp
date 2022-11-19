import React from 'react';
import Home from '../components/Home';
import Pages from '../components/Pages';
import Templates from '../components/Templates';
import Elements from '../components/Elements';
import Navbar from '../components/Navbar';
import { 
  Route, 
  Navigate, 
  useLocation, 
  Routes } from 'react-router-dom';

const Root = ()=> {
  const location = useLocation();
  console.log(location)
  const query = new URLSearchParams(location.search);
  console.log(query.get('status'));
  return (
    <div>
      <h1>
        We are here  {location.pathname}
      </h1>
      <Routes>
        <Route element={<Navbar />}>
          <Route exact={"true"} path={"/"} element={<Navigate to={"/home"} />} />
          <Route exact={"true"} path={"/"} element={<Home />} />
          <Route path={"/home"} element={<Home />}/>
          <Route path={"/elements"} element={<Elements />}/>
          <Route path={"/pages"} element={<Pages/>}/>
          <Route path={"/templates"} element={<Templates/>}/>
          <Route path={"*"} element={<h1>404 Not Found</h1>} /> 
        </Route>
      </Routes>

      {/* <Switch>
      <Route exact path={"/"}>
        <Redirect to={"/home"} />
      </Route>
      <Route path={"/home"} component={Navbar}/>
      <Route path={"/elements"} component={Navbar}/>
      <Route path={"/pages"} component={Navbar}/>
      <Route path={"/templates"} component={Navbar}/>
      </Switch>
      <Switch>
      <Route exact path={"/"} />
       <Route path={"quy"}>
        <Home />
      </Route> 
      <Route path={"/home"} component={Home}/>
      <Route path={"/elements"} component={Elements}/>
      <Route path={"/pages"} component={Pages}/>
      <Route path={"/templates"} component={Templates}/>
      <Route path={"*"}>
        <h1>404 Not Found</h1>
      </Route>
      </Switch> */}
       {/* <Route path={"/home"} component={Navbar}/>
      <Route path={"/elements"} component={Navbar}/>
      <Route path={"/pages"} component={Navbar}/>
      <Route path={"/templates"} component={Navbar}/> */}
      
      {/* <Route path={"quy"}>
        <Home />
      </Route> */}
    </div>
  )
}

export default Root;


