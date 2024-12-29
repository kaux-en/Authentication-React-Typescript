import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';



const SessionStorageManager: React.FC = () => {
    const [token, setToken] = useState<string | null>(null);
    const [username, setUsername] = useState<any | null>(null)
    const [password, setPassword] = useState<any | null>(null)
    const navigate = useNavigate();

    const saveToken = (token: string) => {
        sessionStorage.setItem('jwtToken', token)
    }

    const getToken = (): string | null => {
        return sessionStorage.getItem('jwtToken')
    }

    const GetTokenByLogin = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({
                username: username,          //"mor_2314",
                password: password          //"83r5^_"
            })
        })
        if (!response.ok) {
            throw new Error("Error Logging in")
        }

        const { token: jwtToken} = await response.json();
        setToken(jwtToken)
        saveToken(jwtToken)
        console.log('New Token Saved')
        navigate('https://fakestoreapi.com')

        } catch (error) {
            console.log('Error:', error)
        }
    }

    React.useEffect(() => {
        const savedToken = getToken();
        if (savedToken) {
          setToken(savedToken);
        }
      }, []);
    
    return(
        <div>
            {token ? (
                <p>Logged in Successfully</p>
            ) : (
                <Container>
                    <input 
                        type='text'
                        placeholder='Username'
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <input 
                        type='text'
                        placeholder='Password'
                        value={password || ''}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <button onClick={GetTokenByLogin}>Login</button>
                </Container>
            )}
        </div>
    )

};

export default SessionStorageManager;