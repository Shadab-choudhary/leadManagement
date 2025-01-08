import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import Analyst from './pages/Dashboard/Analyst';
import CreateLead from './pages/Dashboard/CreateLead';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Settings from './pages/Settings';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import RegisterLayout from './layout/RegisterLayout';
import SalesExecutive from './pages/SalesExecutive/SalesExecutive';
import SalesStatusTable from './components/Tables/SalesStatusTable';
import EditLead from './pages/Dashboard/EditLead';
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {

    window.scrollTo(0, 0);

    if (pathname == "/" && !isLogin) {
      navigate("/auth/signin")
    }
    else if (pathname == "/auth/signin" || pathname == "/auth/signup") {
      setIsLogin(false);
    }
    else {
      setIsLogin(true);
    }

  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    isLogin ?
      <DefaultLayout>
        <Routes>
          <Route
            path="/analyst"
            element={
              <>
                <PageTitle title="Analyst Dashboard " />
                <Analyst />
              </>
            }
          />
          <Route
            path="/create-lead"
            element={
              <>
                <PageTitle title="Create Lead" />
                <CreateLead />
              </>
            }
          />
           <Route
            path="/edit-leads"
            element={
              <>
                <PageTitle title="Edit Lead" />
                <EditLead />
              </>
            }
          />
          <Route
            path="/sales-executive"
            element={
              <>
                <PageTitle title="Sales Executive" />
                <SalesExecutive />
              </>
            }
          />
          <Route
            path="/view-leads"
            element={
              <>
                <PageTitle title="Profile " />
                <SalesStatusTable />
              </>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements " />
                <FormElements />
              </>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout " />
                <FormLayout />
              </>
            }
          />

          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings " />
                <Settings />
              </>
            }
          />
          <Route
            path="/chart"
            element={
              <>
                <PageTitle title="Basic Chart " />
                <Chart />
              </>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="Alerts " />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons " />
                <Buttons />
              </>
            }
          />
          <Route
            path="/auth/signin"
            element={
              <>
                <PageTitle title="Signin " />
                <SignIn />
              </>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <>
                <PageTitle title="Signup " />
                <SignUp />
              </>
            }
          />
        </Routes>
      </DefaultLayout>
      :
      <RegisterLayout>
        <Routes>
          <Route
            index
            path="/auth/signin"
            element={
              <>
                <PageTitle title="Signin " />
                <SignIn />
              </>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <>
                <PageTitle title="Signup " />
                <SignUp />
              </>
            }
          />
        </Routes>
      </RegisterLayout>
  );
}

export default App;
