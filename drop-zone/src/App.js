import './styles/App.scss';
import React from 'react';
import DropZone from './components/Dropzone';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <DropZone />
            </div>
        </DndProvider>
    );
}

export default App;
