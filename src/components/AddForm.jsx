import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {addTodo} from "../redux/modules/todos.js"
import nextId from "react-id-generator"


const AddForm = () => {
    // const TodosStore = useSelector((state) => state.todos)

    const id = nextId(); //id를 무작위 숫자로 넣어준다.
    
    const dispatch = useDispatch();

    const [todo , setTodo] = useState({
        id : 0,
        title : "",
        body : "",
        isDone : false,
    })

    const onChangeHandler = (event) => {
        const {name, value } = event.target;
        setTodo({...todo, [name]: value});
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.title === "" || todo.body=== "") 
        return alert("내용을 입력하세요.") ;

        dispatch(addTodo(payload=
            {...todo, id}));
        //여기서 액션 페이로드는 addTodo에 들어간 객체와 같다.
        setTodo({
            id : 0,
            title : "",
            body : "",
            isDone : false,
        })
    }

    return (
        <TodoInput>
            <AddTitle type = "text"
                      name = "title"
                      value = {todo.title}
                      onChange={onChangeHandler} 
                      placeholder = "제목을 입력하세요"
                      />
            <Addbody type = "text"
                     name = "body"
                     value = {todo.body}
                     onChange = {onChangeHandler}
                     placeholder = "내용을 입력하세요"/>
            <Addbtn onClick={onSubmitHandler}>추가하기</Addbtn>
        </TodoInput>   
    )
}


export default AddForm;

const TodoInput = styled.div`
    width: 1000px;
    max-width: 1000px;
    height: 120px;
    margin: 0 auto;
    display: flex;
    
    
`
const AddTitle = styled.input`
    width: 400px;
    max-width: 400px;
    height: 30px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
`

const Addbody =styled.input`
    width: 400px;
    max-width: 400px;
    height: 30px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
`

const Addbtn = styled.button`
    width: 100px;
    max-width: 100px;
    height: 30px;
    margin: 34px;
`