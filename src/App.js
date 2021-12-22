import React from 'react';
import Pagination from './components/Pagination';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Background from './components/Background';

const dummyPosts = [
  {
    name: 'Samsung India',
    username: '@samsungIndia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
    likes: 123
  },
  {
    name: 'Max',
    username: '@max07',
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
    likes: 56
  },
  {
    name: 'Alice Colbey',
    username: '@colbey_alice',
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
    likes: 453
  },
  {
    name: 'Samsung India',
    username: '@samsungIndia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
    likes: 123
  },
  {
    name: 'Max',
    username: '@max07',
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
    likes: 56
  },
  
  {
    name: 'Alice Colbey',
    username: '@colbey_alice',
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
    likes: 453
  },
  {
    name: 'Samsung India',
    username: '@samsungIndia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
    likes: 123
  },
  {
    name: 'Max',
    username: '@max07',
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
    likes: 56
  },
 
  {
    name: 'Alice Colbey',
    username: '@colbey_alice',
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
    likes: 453
  },
  {
    name: 'Samsung India',
    username: '@samsungIndia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
    likes: 123
  },
  {
    name: 'Max',
    username: '@max07',
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
    likes: 56
  },
  
  {
    name: 'Alice Colbey',
    username: '@colbey_alice',
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
    likes: 453
  },
  {
    name: 'Samsung India',
    username: '@samsungIndia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
    likes: 123
  },
  {
    name: 'Max',
    username: '@max07',
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
    likes: 56
  },
  
  {
    name: 'Alice Colbey',
    username: '@colbey_alice',
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
    likes: 453
  },

  {
    name: 'Max',
    username: '@max07',
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
    likes: 56
  },
  {
    name: 'Samsung India',
    username: '@samsungIndia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
    likes: 123
  },
 
  {
    name: 'Alice Colbey',
    username: '@colbey_alice',
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
    likes: 453
  },
  {
    name: 'Samsung India',
    username: '@samsungIndia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
    likes: 123
  },
  {
    name: 'Max',
    username: '@max07',
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
    likes: 56
  },
 
  {
    name: 'Alice Colbey',
    username: '@colbey_alice',
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
    likes: 453
  },
  {
    name: 'Samsung India',
    username: '@samsungIndia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
    likes: 123
  },
 
  {
    name: 'Max',
    username: '@max07',
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
    likes: 56
  },
  {
    name: 'Alice Colbey',
    username: '@colbey_alice',
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
    likes: 453
  },

 
 
  {
    name: 'Samsung India',
    username: '@samsungIndia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNHE0krAKd2OIaru_AyTUgOr7IvrphZENVQDHiLe055thJlQt3LfFjASuYg4aI55yJJ0&usqp=CAU",
    likes: 123
  },
  {
    name: 'Max',
    username: '@max07',
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVbmaAsah9Sg/company-logo_200_200/0/1616471650203?e=2159024400&v=beta&t=XNOkWFs9MDBXPO0R-ImN4Mu61zk4s5bJvhvVtlWfPMo",
    likes: 56
  },
  
  {
    name: 'Alice Colbey',
    username: '@colbey_alice',
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHUo_h0JGtwYw/company-logo_200_200/0/1606490589727?e=2159024400&v=beta&t=MznxbjFunN-3xUqfv2aTCkKzTL8AGNJ4VwoYb3oc1Wk",
    likes: 453
  }
]

const postsPerPage = 10;
const totalPages = Math.ceil(dummyPosts.length / postsPerPage);

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Background />
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to='/1' />
          </Route>
          <Route path='/:mypage' exact>
            <Pagination
              postsArray={dummyPosts}
              totalPages={totalPages}
              postsPerPage={postsPerPage}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
