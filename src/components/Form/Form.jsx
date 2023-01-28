import React from "react";
import validation from "./validation";
import styles from './Form.module.css'
export default function Form(props){
    const [userData, setUserData] = React.useState({
        username:'',
        password:''
    });
    const [errors, setErrors] = React.useState({
        username:'',
        password:''
    })
    const handleInputChange = (e) =>{
        setUserData({
            ...userData,
            [e.target.name] : e.target.value,
        })
        setErrors(
            validation({ 
                ...userData,
                [e.target.name]: e.target.value,
            })
        )
    }
    const handleSubmit = e =>{
        e.preventDefault();
props.login(userData);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label className={styles.text}>
                    Username:
                </label >
                <input name="username" type='text'
                value={userData.username}
                onChange={handleInputChange} className={errors.username && styles.warning} />
                <p className='danger'>{errors.subject}</p>
                <label className={styles.text} >
                    Password:
                </label>
                <input name="password" type='password'
                value={userData.password} 
                onChange={handleInputChange} className={errors.password && styles.warning} />
            
                <p className='danger'>{errors.subject}</p>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}