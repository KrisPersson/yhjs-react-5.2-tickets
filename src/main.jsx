import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Events from './views/Events'
import Buy from './views/Buy'
import Tickets from './views/Tickets'

import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'

import { ticketReducer } from './reducers/ticketReducer'

import './index.css'

const store = legacy_createStore(
  ticketReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Events />
      },
      {
        path: '/buy',
        element: <Buy />
      },
      {
        path: '/tickets',
        element: <Tickets />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>
  </Provider>,
)
