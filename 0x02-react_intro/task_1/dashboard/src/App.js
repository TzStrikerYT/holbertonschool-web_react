import hbtn_logo from './hbtn_logo.jpg';
import './App.css';

function App() {

  //ClassName == Class in HTML
  //src={ variable }
  //<> Structure of page - Component in this site </>
  return (
    <>
      <div className="App-header">
        <img src={ hbtn_logo } className="App-logo" alt="Holbeton-logo"/>
        <header>
         <h1 className="Dashboard-title">School Dashboard</h1>
        </header>
      </div>
      <div className="App-body">
        <p className="paragraph-title">Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p className="paragraph-footer">Copyright 2020 - holberton School</p>
      </div>
    </>
  );
}

export default App;
