import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './components/App'
import HomePage from './pages/Homepage'
import Sample01 from './pages/Sample01'
import Sample02 from './pages/Sample02'
import Sample03 from './pages/Sample03'

function Main(){
    return (
        <BrowserRouter>
        <App>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/list01" element={<Sample01 />} />
                <Route path="/list02" element={<Sample02 />} />
                <Route path="/list03" element={<Sample03 />} />
            </Routes>
        </App>
        </BrowserRouter>
    )
}

export default Main




