import {useState,useEffect}  from "react"                                                                                                                                                                                                                        
import { getPosts } from "./fetch";
import './App.css';

function App() {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    getPosts().then((response) => {
      setData(response);
    });
  }, []);
  return (
    <div className="App">
      {data ? data.map((e) => <li>{e.title}</li>) :
        <p>Loading...</p>
      }
    </div>
  );
}
export default App;