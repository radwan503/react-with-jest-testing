import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import CommentForm from './components/commentform/CommentForm';
import CommentList from './components/commentform/CommentList';
import { useState } from 'react';

function App() {
  const [comments, setComments] = useState([]);

  // const comments = [
  //   { id: 1, text: "nic pic" },
  //   { id: 2, text: "test comment 2" }
  // ]

  return (
    <div data-testid="myrootdiv">
      <CommentForm setComments={setComments} />
      <CommentList allcomments={comments} />
      {/* <Login /> */}
    </div>
  );
}

export default App;
