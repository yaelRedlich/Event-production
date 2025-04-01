import {  Routes, Route } from 'react-router-dom';
import './App.css'
import { EventManager } from './components/EventManager.components';
import { ShowAllEvents } from './components/AllEvents.component';

function App() {
  return (
      <Routes>
        <Route  path="/" element={<EventManager/>} />
        <Route path="/users" element={<ShowAllEvents />} />
      </Routes>
  )
}

export default App
