
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import { useState } from 'react'
import Users, { UserProvider } from "./contexts/User"
import { UserContext} from "./contexts/User"

function App() {
  // const [loggedInUser, setLoggedInUser] = useState({
  //   username: 'jessjelly'
  // });
  console.log('displaying app.js')
  return (
  <BrowserRouter>
  {/* <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}> */}
  <UserProvider>
    <div className='app'>
        <Nav />
        {/* <ReplaceDatabase articles={articles} /> */}
          <Routes>
          <Route path="/" element={<ArticlesList/>}/>
            <Route path="/api/articles" element={<ArticlesList/>}/>
            <Route path="/api/articles/:article_id" element={<SingleArticle/>}/>
            {/* <Route path="/api/articles/:topic_slug" element= /> */}


          </Routes>
    </div>
    {/* </UserContext.Provider> */}
    </UserProvider>
  </BrowserRouter>

  )
}

export default App;
