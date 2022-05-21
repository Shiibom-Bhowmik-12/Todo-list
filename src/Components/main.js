import React,{useState,useEffect,useContext} from 'react';
import {MyContext} from '../Context';

function Main() {
  const [task,setTask,list,setList]=useContext(MyContext);
  const [striked,setStriked]=useState([]);

  const addfunc = () => {
    if(task==""){
      alert("Write some task to add!");
    }
    else{
      const temp = [...list];
      temp.push(task);
      setList(temp);
      setTask("");
    }
  }

  const del = (task,snum) =>{
    const temp=[...list];
    temp.splice(snum,1);
    setList(temp);
  }

  const com = (task,snum) => {
    if(striked[snum]==1){
      alert("The task is already completed")
    }
    else{
      striked[snum]=1;
      const temp=[...list];
      let str=<h4 style={{linespacing:"60px"}}><s>{task}</s>&#9989;</h4>;
      temp[snum]=str;
      setList(temp);
    }
  }


  return (
    <div className='container'>
      <div className='head'>
         <h1><u>TODO LIST</u>&#9997;</h1>
      </div>
          <div className='inp'>
              <input type='text' style={{width:"90vh", height:"5vh",color:"white",fontFamily:"monospace",borderColor:"whitesmoke",fontSize:"29px"}} value={task} onChange={(e)=>setTask(e.target.value)}/>
              <button className='pushable2'
        onClick={()=>addfunc()}><span className='front2'>ADD TO LIST</span></button>
              </div>
              <br/>
              <div className='display'>
                {
                  list.map((it,ind)=>{
                    return (
                      <div className='list'>
                        <h2 style={{color:"white",fontFamily:"cursive"}}>{ind+1}. {it}</h2>
                          <br/>
                            <button className='pushable' onClick={()=>del(it,ind)}><span className='front'> Delete</span></button>
                            
                            <button className='pushable1' onClick={()=>com(it,ind)}><span className='front1'>Completed</span> </button>
                            <br/>
                            <br/>
                      </div>
                      
                    )
                  })
                  
                }
          </div>
      </div>
  )
}

export default Main;

