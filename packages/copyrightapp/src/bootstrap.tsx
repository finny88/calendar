import ReactDOM from 'react-dom/client'
import Copyright from './Copyright'

const rootElement = document.getElementById('root')
if (rootElement === null) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement)

root.render(<Copyright />)
