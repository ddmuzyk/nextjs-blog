import { useState, useEffect } from "react";

export default function Experiment() {

  const [data, setData] = useState(false);

  const same = async function(){
    setTimeout(function() {
      setData(true);
  }, 2000);
}

  useEffect(() => {
    const fetchData = async () => {
      await same();
    }

    const fetchDataAsync = async () => {
      await fetchData();
      console.log(data); // This will now log the updated value of `data`
    };
    fetchDataAsync();
  }, []);


  return (
    <div>
      {data ? <h1>True</h1> : <h1>False</h1>}
    </div>
  );
}