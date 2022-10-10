import About from "../about/About";
import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";
import DashboardMessages from "../dashboard/DashboardMessages";
import Dashboardtask from "../dashboard/Dashboardtask";
import Tab, { Nav } from "../other/Tab";
import User from "../user/User";
import Public from "../protectedroutes/Public";
import ProtectedRoute from "../protectedroutes/ProtectedRoute";
import Private from "../protectedroutes/Private";
import Nav1 from "../navigation/Nav1";
import Searchparams from "../other/Searchparams";
import SuspenseDemo from "../suspense/SuspenseDemo";
import Fetch from "../restapi/Fetch";
import Axios from "../restapi/Axios";
import Index from "../javascript/Index";
import Form from "../form/Form";
import Login from "../form/Login";
import Form2 from "../form/Form2";
import StorageApi from "../storage api/StorageApi";
import ErrorDemo from "../other/ErrorDemo";
import LazyDemo from "../suspense/LazyDemo";
import Userdetail from "../user/Userdetail";
import NotFound from "../NotFound";
import DynamicDemo from "../form/DynamicDemo";
import ReduxDemo from "../reduxdemo/Index";
import CakeContainer from "../reduxdemo/cake/CakeContainer";
import IcecreameContainer from "../reduxdemo/icecreame/IcecreameContainer";
import UserContainer from "../reduxdemo/user/UserContainer";
import Counter from "../reusabledemo/Counter";
import Uncontroll from "../other/Uncontroll";
import QueryDemo from "../react quary/Index";
import RQfetch from "../react quary/RQfetch";
import { QueryClient, QueryClientProvider } from "react-query";
import RQuser from "../react quary/RQuser";
import RqdynamicParallel from "../react quary/RqdynamicParallel";
import Rqdependent from "../react quary/Rqdependent";
import InitialQuerydata from "../react quary/InitialQuerydata";
import Pagination from "../react quary/Pagination";
import Formik from "../formik/Index";
import FormikForm from "../formik/FormikForm";
import OldForm from "../formik/OldForm";
import FormikContainer from "../formik/FormikContainer";
import RegistrationForm from "../formik/RegistrationForm";
import InfiniteQuery from "../react quary/InfiniteQuery";
import AddData from "../react quary/AddData";
const queryClient = new QueryClient();

export const Arr = [
  {
    path: "/",
    element: <Home />,
    id: "home",
  },
  {
    path: "*",
    element: <NotFound />,
    id: "notfound",
  },
  {
    path: "about",
    element: <About />,
    id: "about",
  },
  // {
  //   path: "nav",
  //   element: <Nav />,
  //   id: "nav",
  // },
  {
    path: "nav1",
    element: <Nav1 />,
    id: "nav1",
  },
  {
    path: "search",
    element: <Searchparams />,
    id: "search",
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    id: "dashboard",
    abc: [
      {
        path: "dashboard/dasmsg",
        element: <DashboardMessages />,
        id: "dasmsg",
      },
      {
        path: "dashboard/dastask",
        element: <Dashboardtask />,
        id: "dastask",
      },
    ],
  },
  // {
  //   path: ":tab",
  //   element: <Tab />,
  //   id: "task",
  // },
  {
    path: "user",
    element: <User />,
    id: "user",
    abc: [
      {
        path: "user/:id",
        element: <Userdetail />,
        id: "id",
      },
    ],
  },
  {
    path: "public",
    element: <Public />,
    id: "public",
  },
  {
    path: "private",
    element: (
      <ProtectedRoute>
        <Private />
      </ProtectedRoute>
    ),
    id: "private",
  },
  {
    path: "suspense",
    element: <SuspenseDemo />,
    id: "suspense",
  },
  {
    path: "lazy",
    element: <LazyDemo />,
    id: "lazy",
  },
  {
    path: "error",
    element: <ErrorDemo />,
    id: "error",
  },
  {
    path: "fetch",
    element: <Fetch />,
    id: "fetch",
  },
  {
    path: "axios",
    element: <Axios />,
    id: "axios",
  },
  {
    path: "javascript",
    element: <Index />,
    id: "javascript",
  },
  {
    path: "form",
    element: <Form />,
    id: "form",
  },
  {
    path: "form2",
    element: <Form2 />,
    id: "form2",
  },
  {
    path: "login",
    element: <Login />,
    id: "login",
  },
  {
    path: "storageapi",
    element: <StorageApi />,
    id: "local",
  },
  {
    path: "dform",
    element: <DynamicDemo />,
    id: "dform",
  },
  {
    path: "redux",
    element: <ReduxDemo />,
    id: "redux",
    abc: [
      {
        path: "redux/cakecontainer",
        element: <CakeContainer />,
        id: "cake",
      },
      {
        path: "redux/icecreamecontainer",
        element: <IcecreameContainer />,
        id: "icecreame",
      },
      {
        path: "redux/users",
        element: <UserContainer />,
        id: "users",
      },
    ],
  },
  {
    path: "reusable",
    element: <Counter />,
    id: "reusable",
  },
  {
    path: "uncontroll",
    element: <Uncontroll />,
    id: "uncontroll",
  },
  {
    path: "query",
    element: <QueryDemo />,
    id: "query",
    abc: [
      {
        path: "query/rqfetch",
        element: (
          <QueryClientProvider client={queryClient}>
            <RQfetch />
          </QueryClientProvider>
        ),
        id: "rqfetch",
      },
      {
        path: "query/rquser/:id",
        element: (
          <QueryClientProvider client={queryClient}>
            <RQuser />
          </QueryClientProvider>
        ),
        id: "rquser",
      },
      {
        path: "query/rqdynamicparallel",
        element: (
          <QueryClientProvider client={queryClient}>
            <RqdynamicParallel ids={[1, 3]} />
          </QueryClientProvider>
        ),
        id: "rqdynamicparallel",
      },
      {
        path: "query/rqdependent",
        element: (
          <QueryClientProvider client={queryClient}>
            <Rqdependent email="tagline@gmail.com" />
          </QueryClientProvider>
        ),
        id: "rqdependent",
      },
      {
        path: "query/InitialQuerydata/:id",
        element: (
          <QueryClientProvider client={queryClient}>
            <InitialQuerydata />
          </QueryClientProvider>
        ),
        id: "InitialQuerydata",
      },
      {
        path: "query/pagination",
        element: (
          <QueryClientProvider client={queryClient}>
            <Pagination />
          </QueryClientProvider>
        ),
        id: "pagination",
      },
      {
        path: "query/infiniteQuery",
        element: (
          <QueryClientProvider client={queryClient}>
            <InfiniteQuery />
          </QueryClientProvider>
        ),
        id: "infiniteQuery",
      },
      {
        path: "query/adddata",
        element: (
          <QueryClientProvider client={queryClient}>
            <AddData />
          </QueryClientProvider>
        ),
        id: "adddata",
      },
    ],
  },
  {
    path: "formik",
    element: <Formik />,
    id: "formik",
    abc: [
      {
        path: "formik/formikform",
        element: <FormikForm />,
        id: "formikform",
      },
      {
        path: "formik/oldform",
        element: <OldForm />,
        id: "oldform",
      },
      {
        path: "formik/formikcontainer",
        element: <FormikContainer />,
        id: "oldformikcontainerform",
      },
      {
        path: "formik/Rform",
        element: <RegistrationForm />,
        id: "RegistrationForm",
      },
    ],
  },
];
