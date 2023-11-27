import './App.css'
// import Products from "./Component/Index";

import Products from './Component/Products'
import Api from './Interviewquestion/Api'
import Child from './Interviewquestion/Child'
import Parent from './Interviewquestion/Parent'
import Person2 from './Interviewquestion/Person2'
import Personhoc from './Interviewquestion/Personhoc'
import Strings from './Interviewquestion/Strings'
import Test2 from './Interviewquestion/Test2'
import MemoExample from './Interviewquestion/Usememo'
import Test1 from './Interviewquestion/Array_Operation'
import ParentComponent from './Interviewquestion/Usecallback'
import Props from './Interviewquestion/Props'

function App() {

  let msgdata="my Data";

  return (
    <>
      {/* <Products />     */}
      <Test1 msg={msgdata} />
      <Props />
      
      {/* <ParentComponent /> */}
      {/* <Test2 /> */}
      {/* <Api /> */}
      {/* <Strings /> */}
      {/* <HOC /> */}
      {/* <Personhoc />
      <Person2 /> */}
      {/* <MemoExample /> */}
      {/* <Child /> */}
      {/* <Parent /> */}
    </>
  )
}

export default App
