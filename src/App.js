
import './App.css';
import{ useEffect,useState } from 'react';
import { Restaurantlist } from './components/Restaurantlist';
import{Restroinput}from"./components/Restroinput"
function App() {
  const [load,setLoad]=useState(false);

  const [list,setList]=useState([]);
  const [page,setPage]=useState(1);
  //const [total,setTotal]=useState(1);
  const [formdata,setFormdata]=useState({
    name:"",
    Image:"",
    rating:"",
    categorie:"",
    min_amount:"",
    cash:false,
    upi:false,
    card:false,
    
})
const [filter, setFilter] = useState([]);
console.log(filter)
const handleChange=(e)=>{
  setFormdata({
      ...formdata,[e.target.id]:e.target.value
  })
}

const handleSubmit=async (e)=>{
  e.preventDefault();
  try{
 await fetch(` http://localhost:8080/users`,{
      method:"POST",
      body : JSON.stringify(formdata),
      headers : {"Content-Type" : "application/json"}
  })
  getdata()
 }
 catch(err){
     console.log(err)
 }
 }
  useEffect(()=>{
    getdata();
  },[page])
 

  
  const getdata=async()=>{
    let data=await fetch(`http://localhost:8080/users?_page=${page}`);
    let data1=await data.json();
   // console.log(data1)
    setList(data1);
    setFilter(data1);
  }
 
  const handlePrev=()=>{
    setPage(page-1);
  }
  const handleNext=()=>{
    setPage(page+1);
  }

  const sortrating=()=>{
    let item=list.sort((a,b)=>a.rating-b.rating)
    //console.log(item)
    setFilter([...item])
    
    
  }
  const sortrating4=()=>{
    let item=list.filter((e)=>e.rating>=4&&e.rating<5)
    setFilter([...item])
  }
  const sortrating5=()=>{
    let item=list.filter((e)=>e.rating>=5&&e.rating<6)
    setFilter([...item])
  }
  const sortrating3=()=>{
    let item=list.filter((e)=>e.rating>=3&&e.rating<4)
    setFilter([...item])
  }
  return (
    <div className="App">
     <h1>TOP RESTAURANT</h1>
     <Restaurantlist load={load} list={filter} setList={setList} handlePrev={handlePrev} handleNext={handleNext} page={page} />
     <Restroinput handleChange={handleChange} handleSubmit={handleSubmit} sortrating3={sortrating3} sortrating4={sortrating4} sortrating5={sortrating5} sortrating={sortrating}/>
    </div>
  );
}

export default App;
