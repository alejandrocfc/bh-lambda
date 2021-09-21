import './App.css';
import {useEffect} from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios.get('https://z2dpxx5tjk.execute-api.us-east-1.amazonaws.com/dev/mammoshare/api/v1')
        .then(res => {
          console.log(res);
        })
  }, []);
  return (
    <div className="App" />
  );
}

export default App;

