import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const elem = <div></div>;

const Header = () => {
  // const scr = '<script>alert("Error!")</script>';
  return <h2>Hello World!</h2>;
  // return <h2>{scr}</h2>;
};

const Field = () => {
  const holder = 'Enter there';
  const styleField = {
    width: '300px',
  };
  return <input style={styleField} type="text" placeholder={holder} autoComplete="" className="first" htmlFor="" />;
};

const Button = () => {
  const text = 'Log in';
  // const res = () => {
  //   return 'Log in, please';
  // };
  // const p = <p>Log in</p>
  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Field />
      <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
