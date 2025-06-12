import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PublicLayout from './layouts/PublicLayout'
import { Home } from './routes/Home'
import { AuthLayout } from './layouts/AuthLayout'
import SignUpPage from './routes/SignupPage'
import SignInPage from './routes/SignInPage'
import ProtectedLayout from './layouts/ProtectedLayout'
import MainLayout from './layouts/MainLayout'
import Generate from './components/Generate'
import Dashboard from './routes/Dashboard'
import { CreateEditPage } from './routes/CreateEditPage'
import MockInterview from './routes/MockInterview'
import Result from './routes/Result'

function App() {
  return (
   
         <div className="flex flex-col w-full min-h-screen">
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='signup/*' element={<SignUpPage />} />
          <Route path='signin/*' element={<SignInPage />} />
        </Route>

        <Route element={<ProtectedLayout><MainLayout /></ProtectedLayout>}>
          <Route element={<Generate />} path='/generate'>
            <Route index element={<Dashboard />} />
              <Route path=':interviewId' element={<CreateEditPage />} />
            <Route path='interview/start' element={<MockInterview />} />
            <Route path='interview/result' element={<Result />} />
          </Route>
        </Route>


      </Routes>
      </BrowserRouter>
      </div>
 )
}

export default App