import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage, HomePage, ProfilePage, LogInPage, SignUpPage, CataloguePage, } from "../pages";
import { AuthLayout, UserLayout }  from "../layouts";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/catalogue" element={<CataloguePage/>}/>
        </Route>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
