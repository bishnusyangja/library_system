import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";


function BookList() {
    return <div>Login Form</div>
}

const RootElement = (props) => {
    let authToken = localStorage.getItem('authToken');
    let rootPath = props.hasOwnProperty('rootPath') ? props.rootPath : false;
    if (authToken !== null && authToken !== ''){
        if (rootPath){
            window.location.href = '/book-list';
        }
        return <> {props.child} </>
    }else{
        window.location.href = '/login';
    }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement rootPath={true} />,
  },
  {
    path: "/login",
    element: <LoginForm/>,
  },
  {
    path: "/register",
    element: <RegisterForm/>,
  },
  {
    path: "/book-list",
    element: <RootElement child={<BookList />} />,
  },

]);

function App() {
  return <div style={{margin: '50px', padding:'20px'}}><RouterProvider router={router}> </RouterProvider></div>
}

export default App;