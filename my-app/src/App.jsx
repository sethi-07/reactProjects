// import { useState } from "react";

// export default function App(){
//   return(
//     <>
//     <h1>Counter</h1>
//     <MyButton/>
//     </>
//   );
// }

// function MyButton(){
//   const [count, setCount] = useState(1);

//   function handleClick(){
//     setCount(count+1);
//   }

//   return(
//     <>
//     <button onClick={handleClick}>Count {count}</button>
//     </>
//   );
// }


import Card from './components/Card'

export default function App (){
  return (
    <>
    <Card/>
    <Card/>
    </>
  )
}




