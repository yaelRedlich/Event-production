
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {AddingProducer} from './components/AddingProducer.components.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EventComponent } from './components/Event.components.tsx';
import { EventProvider } from './context/ProducersEvent.context.tsx';
import { EventDetailsComponent } from './components/EventDetails.component.tsx';
import { ProducerMenu } from './components/ProducerMenu.components.tsx';
import { ProducerDetails } from './components/ProducerDetails.components.tsx';
import './index.css'
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <EventProvider>
        <App />     
        <Routes>
          <Route path='/events/:id' element = {<EventComponent />} />
          <Route path='/eventDetails/:id' element = {<EventDetailsComponent/>}/>
          <Route path='/producers/' element={<ProducerMenu />}/>
          <Route path='/AddingProducer' element={<AddingProducer/>}/>
          <Route path="/producers/:id" element={<ProducerDetails />} />
        </Routes>
      </EventProvider>
    </BrowserRouter>
  </StrictMode>
);


