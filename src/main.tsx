import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/globals.scss'
import {ThemeProvider} from '@gravity-ui/uikit';
import { Provider } from 'react-redux';
import { setupStore } from './store/store.ts';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import User from './page/user/User.tsx';
import Admin from './page/admin/Admin.tsx';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';


const router = createBrowserRouter([
  {
    path: "/orders",
    element: <User/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/",
    element: <App/>,
  },
]);



const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <ThemeProvider theme='light'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
)
