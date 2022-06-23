import './styles/App.scss';
import { Provider } from 'react-redux';
import Desk from './components/desk/Desk';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <DndProvider backend={HTML5Backend}>
                    <Desk />
                </DndProvider>
            </div>
        </Provider>
    );
}

export default App;
