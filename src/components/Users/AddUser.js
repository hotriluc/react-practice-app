import styles from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import React, { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState(false);

    const userNameInputHandler = (event) => {
        setUserName(event.target.value)
    }

    const ageInputHandler = (event) => {
        setAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        

        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({title: 'Invalid input', message: 'Please enter a valid name and age (non-empty)'})
           return
        }
        if (+age < 1) {
            setError({title: 'Invalid input', message: 'Age should be greater than 1'})
            return
        }

        const user = {
            id: Math.random(),
            name: userName,
            age: age
        }
        
        setUserName('')
        setAge('')
        props.addUserHandler(user)
    }

    const ErrorHandler = () => {
        setError(null)
    }

    return (
        <React.Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/> }
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={userName} onChange={userNameInputHandler}/>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={age} onChange={ageInputHandler}/>
                <Button type='submit'>Hello world</Button>
            </form>
        </Card>
        </React.Fragment>
    )
}

export default AddUser;