import { useEffect, useState } from "react";
import { fetchData } from "./api";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
