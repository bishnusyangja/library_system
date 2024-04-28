import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";


function BookList() {
    return <div>Login Form</div>
}

const AppRoute = (props) => {
    let authToken = localStorage.getItem('authToken');
    let is_public = props.hasOwnProperty('is_public') ? props.is_public : false;
    if (props.is_public){
        return {path: props.path, element: props.element};
    }else if (authToken !== null && authToken !== ''){
        return {path: props.path, element: props.element};
    }else{
        return {path: '/login', element: <LoginForm/>};
    }
}

const router = createBrowserRouter([
  AppRoute({
    is_public: true,
    path: "/",
    element: <LoginForm/>,
  }),
  AppRoute({
    is_public: true,
    path: "/login",
    element: <LoginForm/>,
  }),
  AppRoute({
    is_public: true,
    path: "/register",
    element: <RegisterForm/>,
  }),
  AppRoute({
    path: "/book-list",
    element: <BookList/>,
  }),

]);

function App() {
  return <div style={{margin: '50px', padding:'20px'}}><RouterProvider router={router}> </RouterProvider></div>
}

export default App;