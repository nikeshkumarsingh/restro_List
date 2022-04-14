import logo from './logo.svg';
import './App.css';
import{ useEffect,useState } from 'react';
import { Restaurantlist } from './components/Restaurantlist';
import{Restroinput}from"./components/Restroinput"
function App() {
  const [load,setLoad]=useState(false);
  const [progress, setProgress] = useState(0);
  const [list,setList]=useState([]);
  const [page,setPage]=useState(1);
  //const [total,setTotal]=useState(1);
  useEffect(()=>{
    getdata();
  },[page])
  // useEffect(async()=>{
  //   let data=await fetch(`http://localhost:8080/users`);
  //   let data1=await data.json();
  //   setTotal(data1.length)
  // },[])
  const postdata=async(payload)=>{
    try{
      setProgress(30);
      setLoad(true);
      let response1=await fetch(`http://localhost:8080/users`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{"content-type":"application/json"},
      })
    }
    catch(err){
      console.log(err);
    }
  }
  // const handleClick=()=>{
  //   const payload={}
  // }
  const handleChange=()=>{
    setpayload
  }
  const getdata=async()=>{
    let data=await fetch(`http://localhost:8080/users?_page=${page}&_limit=3`);
    let data1=await data.json();
    console.log(data1)
    setList(data1);
  }
 
  const handlePrev=()=>{
    setPage(page-1);
  }
  const handleNext=()=>{
    setPage(page+1);
  }
  return (
    <div className="App">
     <h1>TOP RESTAURANT</h1>
     <Restaurantlist load={load} list={list} setList={setList} handlePrev={handlePrev} handleNext={handleNext} page={page} />
     <Restroinput handleChange={handleChange}/>
    </div>
  );
}

export default App;
