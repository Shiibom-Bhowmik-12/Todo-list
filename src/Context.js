import React,{createContext,useState,useEffect} from 'react';

const MyContext=createContext();

const MyContextProvider = ({children}) => {
  const [task,setTask]=useState("");
  const [list,setList]=useState([]);

  return(
    <MyContext.Provider value={[task,setTask,list,setList]}>
      {children}
    </MyContext.Provider>
  )
}

export {MyContext,MyContextProvider};