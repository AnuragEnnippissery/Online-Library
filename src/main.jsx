import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import BrowseBook from './components/BrowseBook.jsx'
import AddBook from "./components/AddBook.jsx"
import Home from './components/Home.jsx'
import BookDetails from './components/BookDetails.jsx'
import appStore from './utils/appstore.js'
import { Provider } from 'react-redux'
import Error from './components/Error.jsx'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Error/>,
    children:[{
      path:'/',element: <Home/>
    },
    {
      path: '/BrowseBook',element: <BrowseBook />,
    },
    {
        path:'/AddBook',element:<AddBook/>,
    },
    {
      path:'/BrowseBook/:id',element:<BookDetails/>,
    }
  ],
  
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
        <RouterProvider router={appRouter} />
    </Provider>
    
  </StrictMode>,
)
