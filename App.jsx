// //Let's create a simple landing page for full stack quiz application.

// As discussed in the class, you need to clearly focus on following requirements and submit the tasks within the timeline.

// Instructions:

// 1. Setting Up React Environment
// 2. Creating Functional Components
// 3. Styling Components
// 4. Incorporating React Basics
import Header from "./components/header/Header";
import MainContent from "./components/main/Main";
import FooterContent from "./components/footer/footer";

import './App.css';

function App(){
  return(
    <div>
      <Header />
      <MainContent />
      <FooterContent />
    </div>
  )
}

export default App;