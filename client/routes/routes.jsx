import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Create from '../pages/Create'
import Edit from '../pages/Edit'
import Home from '../pages/Home'

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
        index: true,
        element: <Home />
    },
    {
        path: "new",
        element: <Create />
    },
    {
        path: "edit/:id",
        element: <Edit />
    }
    ]
}])