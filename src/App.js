import React, {useState} from 'react';

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Body from './components/body/Body';

function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [feedback, setFeedback] = useState(false);

  const handleHome = () => {
    setHome(true);
    setAbout(false);
    setContact(false);
    setFeedback(false);
  }

  const handleAbout = () => {
    setHome(false);
    setAbout(true);
    setContact(false);
    setFeedback(false);
  }

  const handleContact = () => {
    setHome(false);
    setAbout(false);
    setContact(true);
    setFeedback(false);
  }

  const handleFeedback = () => {
    setHome(false);
    setAbout(false);
    setContact(false);
    setFeedback(true);
  }

  return (
    <div className="App">
      <Sidebar handleHome={handleHome} handleAbout={handleAbout} handleContact={handleContact} handleFeedback={handleFeedback}/>
      <Body home={home} about={about} feedback={feedback} contact={contact} />
    </div>
  );
}

export default App;
