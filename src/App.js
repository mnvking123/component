import logo from './logo.svg';
import './App.css';

import { Comp } from './component/c1';
import { Compp } from './component/c2';



function App() {
  return (
    <div className="App">

      <h1> dashboard</h1>
      <Comp name="manav" email="m@gmail.com" role="admin"/>
      <br/>
      <Compp name="uday" email="u@gmail.com" role="user"/>

    </div>
  );
}

export default App;
