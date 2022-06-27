import { Provider } from 'react-redux'
import Desk from './components/Desk'
import './styles/App.scss'
import  store  from './store/store'


const App = () => {
    return (
        <Provider store={store}>
            <div className='app' >
                <Desk />
            </div>
        </Provider>
    )
}

export default App