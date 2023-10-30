import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Copyright from "./Copyright";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <Copyright />,
);
