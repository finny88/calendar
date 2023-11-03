import React from 'react'
import ProTip from './ProTip'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
if (rootElement === null) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement)

root.render(<ProTip />)
