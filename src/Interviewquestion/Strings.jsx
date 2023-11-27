import React from 'react'

function Strings() {

    let arr=[1,2,4,5,7,9,8,3,1,4,6,5];
    console.log(arr);

    let rem=arr.slice(1,3);
    console.log(rem);

    let remo=arr.splice(1,0,100);
    console.log(remo);
    console.log(arr);

    const Revstrg=(str)=>{
        return  (str=='')?'':Revstrg(str.substr(1))+ str.charAt(0);
    }
    const newstrg=Revstrg("Farooque shaikh");
    console.log(newstrg);

    const Arrobj = [
        {
          name: 21,
          email: "s1@gmail.com",
          address: "xyz",
        },
        {
          name: 22,
          email: "s2@gmail.com",
          address: "xyz",
        },
        {
          name: 23,
          email: "s3@gmail.com",
          address: "xyz",
        },
      ];

// Find() , some(), filter(),

      console.log(Arrobj);

      let sort=Arrobj.sort((a,b)=>b.name - a.name );
      console.log(sort);
  
let name="farooque";
  let newstr= name.split('').reverse().join('');
    console.log(newstr);


    function revstr(str) {
        return (str === '') ? 'null' : revstr(str.substr(1)) + str.charAt(0);
      }

      const rvstr=revstr("hello");
      console.log(rvstr);

      function reverseString1(str) {
        if (str === "")
          return "";
        else
          return reverseString1(str.substr(1)) + str.charAt(0);
      }
        const strrv=reverseString1("XYYYZ");
        console.log(strrv);

  return (
    <div>Strings</div>
  )
}

export default Strings