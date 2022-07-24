import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./app-router";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore()


const root = (
  <BrowserRouter>

    <Provider store={store}>
      <AppRouter />
    </Provider>

  </BrowserRouter>
)



ReactDOM.render(root, document.getElementById('root'))