import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CreateCompany from './components/admin/CreateCompany';
import Company from './components/admin/Company';
import AdminJobs from './components/admin/AdminJobs';
import PostJob from './components/admin/PostJob';




const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/admin/companies",
    element: <Companies />
  },
  {
    path: "/admin/companies/create-company",
    element: <CreateCompany />
  },
  {
    path: "/admin/companies/:id",
    element: <Company />
  },
  {
    path: "/admin/jobs",
    element: <AdminJobs />
  },
  {
    path: "/admin/jobs/post-job",
    element: <PostJob />
  }



]);

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
};

export default App;
