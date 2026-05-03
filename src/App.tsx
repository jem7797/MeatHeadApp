import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import privacyPdf from './assets/MeatHead_PrivacyPolicy (1).pdf'
import tosPdf from './assets/MeatHead_ToS (2).pdf'
import LegalDocumentPage from './pages/LegalDocumentPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/tos"
          element={<LegalDocumentPage src={tosPdf} title="Terms of Service" />}
        />
        <Route
          path="/privacy"
          element={<LegalDocumentPage src={privacyPdf} title="Privacy Policy" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
