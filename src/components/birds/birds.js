import React, { useCallback, useRef } from 'react'
import './birds.css'
import logo from '../../assests/bird.svg';
export default function Birds({loading,error,birds,setPage,setSelectedBird}) 
{
    console.log(birds[0]);
    const observer = useRef();
    const lastBirdRef = useCallback(bird=>{    
        if(loading) return;
      if(observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting)
         setPage();
      });
      if(bird) observer.current.observe(bird);
    },[loading,setPage]);
    return(<div className='birds'>
        <div className='title'>
            <div className='logoBox'><img className='logo' src={logo} alt="Logo"/></div>
            <div className='titleName'>Birds</div>
        </div>
        {birds.map((bird,index)=>{
           if(index + 1 === birds.length)
            {return (<div ref={lastBirdRef} key={index} className='bird' onClick={()=>setSelectedBird(bird)}> {bird.name + "last"}</div>)}
            else            
           return (<div className='bird' key={index} onClick={()=>setSelectedBird(bird)}>
               <div className='pictureBox'><img className='bird picture' src={bird.image} alt="bird"/></div>
               <div className='bird name'> {bird.name} </div>
            </div>)
        })}
        <div> {loading && "Loading..."} </div>
        <div> {error && "Error"} </div>
    </div>)
}