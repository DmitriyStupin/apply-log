import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout/AppLayout.tsx"

function HomePage() {
  return <h1>Главная</h1>
}

function ApplicationsPage() {
  return <h1>Отклики</h1>
}

function CompaniesPage() {
  return <h1>Компании</h1>
}

function SettingsPage() {
  return <h1>Настройки</h1>
}

function UserPage() {
  return <h1>Пользователь</h1>
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/applications"} element={<ApplicationsPage />} />
          <Route path={"/companies"} element={<CompaniesPage />} />
          <Route path={"/settings"} element={<SettingsPage />} />
          <Route path={"/user"} element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
