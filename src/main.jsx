import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ProductDetails from './components/ProductDetails.jsx'
import Product from './components/Product.jsx'
// import ProductsPage from 
import HomePage from './components/HomePage.jsx'
// import Cart from './components/Cart.jsx'
import ErrorPage from './components/ErrorPage.jsx'
// import Checkout from './components/Checkout.jsx'
import { lazy,Suspense } from 'react'

let ProductPage= lazy(()=> import('./components/ProductsPage.jsx') );
let Cart= lazy(()=> import('./components/Cart.jsx') );
let Checkout= lazy(()=> import('./components/Checkout.jsx') );

const appRouter=createBrowserRouter([
  {path:"/",
    element: <App/>,
    children : [
      {
        path:"/",
        element: <HomePage/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"/products",
        element: <Suspense fallback={<div className="roundRotate relative flex flex-col justify-center items-center h-[100%] top-[100px]">
          <div className="w-[50px] h-[5px] bg-black m-[5px] absolute rotate-45 rounded-lg" ></div>
          <div className="w-[50px] h-[5px] bg-black m-[5px] absolute rotate-[-45deg] rounded-lg"></div>
          </div>}><ProductPage/></Suspense> 
      },
      {
        path:"/products/:id",
        element: <ProductDetails/>
      },
      {
        path:"/cart",
        element: <Suspense fallback={<div className="roundRotate relative flex flex-col justify-center items-center h-[100%] top-[100px]">
          <div className="w-[50px] h-[5px] bg-black m-[5px] absolute rotate-45 rounded-lg" ></div>
          <div className="w-[50px] h-[5px] bg-black m-[5px] absolute rotate-[-45deg] rounded-lg"></div>
          </div>}><Cart/></Suspense>
      },
      {
        path:"/checkout",
        element: <Suspense fallback={<div className="roundRotate relative flex flex-col justify-center items-center h-[100%] top-[100px]">
          <div className="w-[50px] h-[5px] bg-black m-[5px] absolute rotate-45 rounded-lg" ></div>
          <div className="w-[50px] h-[5px] bg-black m-[5px] absolute rotate-[-45deg] rounded-lg"></div>
          </div>}><Checkout/></Suspense>
      },
      {
        path:"/error",
        element: <ErrorPage/>
      },
    ],
    errorElement:<ErrorPage/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
