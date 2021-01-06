import React from "react";
import "./TodoListTemplate.css";

let today = new Date();
let year = today.getFullYear(); //년도
let month = today.getMonth(); //월
let date = today.getDate(); //날짜
let day = today.getDay(); //요일

if (month < 10) {
    month = '0' + String(month+1);
}
if (date < 10 ) {
    date = '0' + String(date);
}
if (day === 0){
    day="MON";
}
else if(day === 1){
    day="TUE";
}
else if(day === 2){
    day="WED";
}
else if(day === 3){
    day="THU";
}
else if(day===4){
    day="FRI";
}
else if(day===5){
    day="SAT";
}
else if(day === 6){
    day="SUN";
}

const TodoListTemplate = ({form, children})  => {

    return (
        <main className="todo-list-template">
            <div className="calander">
                {year}/{month}/{date} {day}
            </div>
            <div className="title">
                To Do List
            </div>
            
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
  };
  
  export default TodoListTemplate;