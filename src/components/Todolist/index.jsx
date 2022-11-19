import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { 
  
  Container, AddForm, ListView, 
  Input, Button, Wrapper, TodoItem, 
  ButtonList, ViewChild,
  View,

} from './style';

const TodoList = () => {
  
  const [title, setTitle] = useState([]);
  const [edit, setEdit] = useState('');
  const [active, setActive] = useState(null);
  
  const editRef = useRef();

  useEffect(() => {
    editRef.current.focus();
  });

  
  const onChange = (e)=>{
    setEdit(e.target.value);
  };

  


  const onAdd = ()=>{
    if(edit.length > 0){
      let res = {
        id: Date.now(),
        item: edit,
      };
      setTitle([...title, res]);
      setEdit('');
    }else{
      editRef.current.focus();
    };
    
  };

  const onDelete = (id)=>{
    let res = title.filter( (value)=> value.id !== id);
    setTitle(res);
  };

  const onEdit = ({id, item}, isSave)=>{
    if(isSave){
      let res = title.map( (value)=> value.id === active.id ? {...value, item: edit} : value);
      setTitle(res);
      setActive(null);
      setEdit('');
    }else{
      setEdit(item);
      setActive({id, item}); 
    }
  }

  return (
    <Container>
      <AddForm>
        <Wrapper>
        <Input
         onChange={onChange}
         value={edit}
         ref={editRef} 
         color={"input"}
         />
          <Button color={"add"} onClick={onAdd} >
            Add Task
          </Button>
        </Wrapper>
      </AddForm>
      <ListView>
        {
          title.map( ({id, item})=>{
            return(
              <TodoItem change={active?.id === id} key={id}>
                {    
                   active?.id === id ? (
                      <Input color={"input"} 
                      onChange={onChange} change={active?.id === id} value={edit} type="text" />) 
                      : (
                        <View color={"item"} >
                          <ViewChild>
                            {item}
                          </ViewChild>
                        </View>
                      )
                }
                    
                  
                
                <Wrapper button>
                 
                    <ButtonList color={"delete"} change={active?.id === id} onClick={()=>onDelete(id)}>
                    {active?.id === id ? "" : "Delete"}
                    </ButtonList>
                    <ButtonList color={"edit"} 
                            onClick={()=> onEdit({id, item}, active?.id === id) } >
                            {active?.id === id ? "Save" : "Edit"} 
                    </ButtonList>
                </Wrapper>
              </TodoItem>
            )
          })
        }
      </ListView>
    </Container>
  )
}
export default TodoList;
