import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Components/Layout";
import Jobs from "./Pages/Jobs";
import NotFoundPage from "./Pages/NotFoundPage";
import Job, { jobLoader } from "./Pages/Job";
import AddJob from "./Pages/AddJob";
import EditJob from "./Pages/EditJob";
import CompleteAccount from "./Pages/CompleteAccount"
import ViewReport from "./Pages/ViewReport";
import axios from "axios";
import Account, { userLoader } from "./Pages/Account";
import UpdateUser from "./Pages/UpdateUser";
import SignUp from "./Pages/SignUp";
import ValidatedLoginForm from "./Pages/Login";
import ViewApplicants from "./Pages/ViewApplicants"
import ApplyJob from "./Pages/ApplyJob";

const App = () => {
  // Add new job
  const addJob = async (newJob) => {
    await axios.post('/api/jobs', newJob);
  };

  // Deleting job
  const deleteJob = async (id) => {
    await axios.delete(`/api/jobs/${id}`);
  };

  // Updating job
  const updateJob = async (job) => {
    await axios.put(`/api/jobs/${job.id}`, job);
  };
  
  const completeInfo = async (userInformation) => {
    await axios.post('/api/user', userInformation);
  };

  const updatedInfo = async (user) => {
    await axios.put(`/api/user/${user.id}`, user);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/report' element={<ViewReport />} />
        <Route path='/add-job' element={<AddJob addJobSubmit={addJob} />} />
        <Route path='/register' element={<CompleteAccount userInformationSubmit={completeInfo} />} />
        <Route path='/UpdateUser/:id' element={<UpdateUser updateInformationSubmit={updatedInfo} />} loader={userLoader} />
        <Route path='/edit-job/:id' element={<EditJob updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='/job/:id' element={<Job deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/account/:id' element={<Account />} loader={userLoader} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<ValidatedLoginForm />} />
        <Route path='/applicants/:id' element={<ViewApplicants />} />
        <Route path='/apply/:id' element={<ApplyJob />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
