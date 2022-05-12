import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App'
import { Counter } from './components/Counter';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <>
        <App/>
        <Counter/>
    </>    
);
