import axios from "axios";
import React, { useEffect, useState } from "react";

function Test1({msg}) {

  const [data, setdata]=useState("");
  const [loading, setloading]=useState(false);
  const [error, seterror]=useState(false);
  const [Inc ,setInc]=useState(0);

  const Increment=()=>{
    setTimeout(()=>{
      setInc(Inc+1);
    },1000)
  }
  // Array
  // let arr=[1,2,4,5,7,9,8,3,1,4,6,5];
  // console.log(arr);

  // let sortarr=new Set(arr);
  // console.log(sortarr);

  // let assending=new Set(arr.sort((a,b)=>b-a));
  // console.log(assending);

  // let remove=arr.slice(0,5);
  // console.log(remove);
  // console.log(arr);

  // let add=arr.splice(0,5,1000);
  // console.log(add);
  // console.log(arr);

  // // obj

  // const Arrobj = [
  //   {
  //     name: 21,
  //     email: "s1@gmail.com",
  //     address: "xyz",
  //   },
  //   {
  //     name: 22,
  //     email: "s2@gmail.com",
  //     address: "xyz",
  //   },
  //   {
  //     name: 23,
  //     email: "s3@gmail.com",
  //     address: "xyz",
  //   },
  // ];

  // console.log(Arrobj);

  // console.log(Arrobj.sort((a,b)=>b.name - a.name));

  // console.log(Arrobj.slice(0,2));

  // console.log(Arrobj.splice(0,1,{name:22,email:"farooque@gmail.com",address:"mumbai",number:987654313}));

  // console.log(Arrobj.splice(3,0,{name:2,email:"farooque@gmail.com",address:"mumbai",number:987654313}));

  // console.log(Arrobj);

  // // reverse name or number

  // let name="aphsana bano";

  // console.log(name.split('').reverse('').join(''));

  // let no=9874563210;

  // console.log(no.toString().split('').reverse('').join(''));

  let Array = [1, 2, 4, 7, 7, 8, 6, 0, 9, 10, 30, 11, 6];
  console.log(Array);

  console.log(new Set(Array));
  console.log(Array.sort((a, b) => a - b));
  console.log(Array.slice(0, 5));
  console.log(Array);
  console.log(Array.splice(5, 1));
  console.log(Array);

  const Arrobj = [
    {
      name: 21,
      email: "s1@gmail.com",
      address: "Mumbai",
      age:20,
      location:{
        State:'MH',
      }
    },
    {
      name: 22,
      email: "s2@gmail.com",
      address: "Pune",
      age:24,
      location:{
        State:'UP',
      }
    },
    {
      name: 23,
      email: "s3@gmail.com",
      address: "Banguluro",
      age:25,
      location:{
        State:'HM',
      }
    },
  ];

  console.log(Arrobj);
  console.log(Arrobj.sort((a, b) => b.name - a.name));
  console.log(Arrobj[0].address);
  console.log(Arrobj[1].email);
  console.log(Arrobj.map((item)=>item.address));
  
  function finduser(age){
    const users=Arrobj.find(user=>user.age===age);
    
        if(users){
            console.log(`user name is ${users.name} ${users.email} ${users.address}`);
        }else{
                    console.log(`age not found`);
        }
    }
    
    finduser(20)

  let str = "farooque";
  let str2="shaikh";

  console.log(str);
  console.log(str.split("").reverse("").join(""));

  console.log(str,str2);

  let arrdes=["A","B",1,3,5,8,9];

  console.log(...arrdes,45,"shaikh");
  let Avalue=arrdes[6];
  console.log(Avalue);

  const revstr = (str) => {
    return str == "" ? "" : revstr(str.substr(1)) + str.charAt(0);
  };
  const strr = revstr("khan");
  console.log(strr);

  useEffect(()=>{
    
    // axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    // .then(res=>{setdata(res.data);console.log(res.data)})
    // .catch(err=>console.log(err))

    (async()=>{

      try {
        seterror(false)
        setloading(true);
        const apiresponse=await fetch('https://fakestoreapi.com/products');
        const data=await apiresponse.json();
        console.log(data);
        setdata(data)
        setloading(false)
      } catch (error) {
       seterror(true); 
       setloading(false)
      console.log(error);        
      }

    })()

  },[])

  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

  return (
    <div style={{}}>
      Test1 -{" "}
      <a href="/www.google.com" target="_blank">
        {" "}
        Links{" "}
      </a>
      <meta name="viewport" content="width=device-width ,initial-scale=1.0" />
    {error && error ? <h1>Something is Wrong pleas try after sometime....</h1> : null}
    {loading && loading ? <h1>Data Loading ....</h1> : null}

      {/* {
        data && data.map((item)=>(
          <p>{item.title}</p>
        ))
        } */}
        <p>Child msg :- {msg}</p>
      <button onClick={Increment}>Click me {Inc}</button>  

    </div>
  );
}

export default Test1;
