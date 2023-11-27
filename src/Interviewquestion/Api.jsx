import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Api() {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [Search, setSearch]=useState("");

  useEffect(() => {
    // const handleapi= async()=>{
    //     try {
    //         const data=await fetch(`https://fakestoreapi.com/products`);
    //         const res=await data.json();
    //         const finals=res;
    //         console.log(finals);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // handleapi();

    (async () => {
      try {
        setError(false);
        setloading(true);
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
        const data = response.data;
        // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

        // const filteredData = data.filter((item) => item.category === "jewelery");
        // console.table(filteredData);
        // setdata(filteredData);
        setdata(data);
        console.log(response.data);
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    })();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  console.log(lastPostIndex);
  const firstPostIndex = lastPostIndex - postsPerPage;
  console.log(firstPostIndex);
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  console.log(currentPosts);

  const filterdata=currentPosts.filter((item)=>item.name.toLowerCase().includes(Search.toLowerCase()));


  return (
    <div>
      {loading ? <h1>Data loading....</h1> : null}
      {error ? <p>Something is wrong. Please try after some time</p> : null}

      <input 
        type="text"
        placeholder="search..."
        value={Search}
        onChange={(e)=>setSearch(e.target.value)}

      />

      {filterdata.map((item) => (
        <div key={item.id}>
          <h2 className="f-20 p-3">{item.name}</h2>
        </div>
      ))}

      <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
    </div>
  );
}

export default Api;
