
import React, { Fragment} from 'react';
import FeedbackForm from './components/FeedbackForm';
import Feedbacklist from './components/Feedbacklist';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import './index.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {



 
  return (
  <FeedbackProvider>
    <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <Fragment>
                  <FeedbackForm />
                  <FeedbackStats/>
                  <Feedbacklist />
                </Fragment>
              }>
                
              </Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
      </FeedbackProvider>
  );
}

export default App;
