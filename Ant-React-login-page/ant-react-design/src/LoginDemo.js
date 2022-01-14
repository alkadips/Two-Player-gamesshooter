import React ,{ useState } from 'react';
import Login from 'ant-design-pro/lib/Login';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
 return fetch('https://myphysio.digitaldarwin.in/api/login/', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

const { Tab, UserName, Password, Captcha, Submit } = Login;

export default function LoginDemo({ setToken }){
  const [autoLogin, setAutoLogin] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const  onSubmit = async(err, values) => {
          if (!err && (values.username !== 'admin' || values.password !== '888888')) {
            const token = await loginUser({
              username:values.username,
              password:values.password
            });
            setToken(token);
          }
  };
 const changeAutoLogin = e => {
    setAutoLogin({
      autoLogin: e.target.checked,
    });
  };
 
    return (
      <div className="login-warp">
        Please Log In:
        <Login
          defaultActiveKey={this.state.type}
          onTabChange={this.onTabChange}
          onSubmit={onSubmit}
        >
            <UserName onChange={e => setUserName(e.target.value)} name="username" />
            <Password onChange={e => setPassword(e.target.value)} name="password" />
            <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" /> 
          <Submit>Login</Submit> 
        </Login>
      </div>
    );
  }

  LoginDemo.propTypes = {
    setToken: PropTypes.func.isRequired
  }
