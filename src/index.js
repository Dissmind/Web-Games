import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./app-router";



const root = (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
)



ReactDOM.render(root, document.getElementById('root'))