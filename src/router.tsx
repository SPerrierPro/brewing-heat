import App from './App.tsx'
import Home from "./pages/Home";
import About from "./pages/About";
import WrongPage from './pages/WrongPages.tsx';


export const routes =[
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
            path: "*",
            element: <WrongPage />
        },
      ],
    },
  ];