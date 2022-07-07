import './styles/App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/layouts/AuthLayout';
import MainLayout from './components/layouts/MainLayout';
import VineList from './components/vineTable/VineList';
// import Protected from './components/ProtectedRoutes/Protected';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className='App'>
                    <Routes>
                        <Route path='/auth' element={<AuthLayout />} />
                        {/* <Route path='/' element={<Protected redirect='/auth' ><MainLayout /></Protected>} > */}
                        <Route path='/' element={<MainLayout />} >
                            <Route index element={<VineList />}/>
                        </Route>
                    </Routes>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
