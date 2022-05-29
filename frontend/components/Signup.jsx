import styles from '../styles/Signup.module.css';
import { useState } from 'react';

const Signup = ({ signup, wallet }) => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState('');

  const signUpClicked = () => {
    signup(username, profile);
  }

  return (
    <div className={styles.authContainer}>
      <h1 className={styles.title}>Inicia sesión con TikTok</h1>
      <div className={styles.signupForm}>
          <div className={styles.inputField}>
              <div className={styles.inputTitle}>Usuario:</div>
              <div className={styles.inputContainer}>
                  <input type="text" className={styles.input} onChange={(e)=>setUsername(e.target.value)} />
              </div>
          </div>
          <div className={styles.inputField}>
          <div className={styles.inputTitle}>Imagen perfil:</div>
              <div className={styles.inputContainer}>
                  <input type="text" className={styles.input} onChange={(e)=>setProfile(e.target.value)} />
              </div>
          </div>
      </div>
      <div className={styles.loginButton} onClick={signUpClicked}>Entrar</div>
    </div>
  )
}

export default Signup;
