import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
  return (
    <h1> hello maruf</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

export default App;
