
import React, { useState } from 'react';
import { useEffect } from 'react';
import classes from './styles.module.css';
import TodoItem from './components/todo-item/index.jsx'
import TodoDetails from './components/todo-details/index.jsx';
import { Skeleton } from '@mui/material';
 
function App() {
   
   const[loading, setLoading] = useState(false);
   const[todolist, setTodolist] = useState([]);
   const[errorMsg,setErrorMsg]=useState(null);
   const[todoDetails, setTodoDetails]=useState(null);
   const[openDialog, setOpenDialog]=useState(false);

   async function fetchListofTodos(){
    try{

      setLoading(true); 
      const apiresponse= await fetch('https://dummyjson.com/todos');
      const result= await apiresponse.json();
      console.log(result);
      if (result?.todos && result?.todos?.length >0){
        setTodolist(result?.todos)
        setLoading(false)
        setErrorMsg("")
      }else{
        setTodolist([])
        setLoading(false)
        setErrorMsg("")
      }

    }catch(error){
      console.log(error);
      setErrorMsg('Error fetching data');
      setLoading(false);
      
   }}
  
   async function fetchTodoDetails(gettodo){
    console.log(gettodo);
    try{
      const apiResponse= await fetch(`https://dummyjson.com/todos/${gettodo}`);
      const details= await apiResponse.json();
      

      if(details){
        setTodoDetails(details);
        setOpenDialog(true);
        console.log(details);
        
      }else{
        setTodoDetails(null);
        setOpenDialog(false);
      }
      

    }
    catch(error){
      console.log(error);
      setErrorMsg('Error fetching data');
    }

   }



   useEffect(()=>{
    fetchListofTodos()
   },[])


   if(loading){
    return <Skeleton variant="rectangular" width={650} height={650} />
   }

  return (
   <div className={classes.mainWrapper}>
    <h1 className={classes.headerTitle}>Simple ToDo App using Material Ui</h1>
    <div className={classes.todoListWrapper}>
      {
        todolist && todolist.length>0 ?
        todolist.map(todoItem=> <TodoItem fetchTodoDetails={fetchTodoDetails}  key={todoItem.id} todo={todoItem}/>) : null
      }
    </div>
    <TodoDetails openDialog={openDialog} todoDetails={todoDetails} setOpenDialog={setOpenDialog} setTodoDetails={setTodoDetails} />
   </div>
  )
}

export default App
