import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import CommentForm from './components/commentform/CommentForm';

function App() {
  const a = 2, b = 3;
  return (
    <div data-testid="myrootdiv">
      <CommentForm />
      {/* <Login /> */}
    </div>
  );
}

export default App;
