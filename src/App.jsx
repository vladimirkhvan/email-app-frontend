import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import NotFound from './pages/NotFound/NotFound';
import { Main } from './pages/Main';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/messages" element={<Main />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
