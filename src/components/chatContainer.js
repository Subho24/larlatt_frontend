import { Button } from './button';
import { useState } from 'react';
import axios from '../axios';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

export const ChatContainer = (props) => {
    const [inputText, setInputText] = useState("")
    const screenWidth = window.screen.width;
    // const [response, setResponse] = useState(null)
    const [outputText, setOutputText] = useState("");
    const [loading, setLoading] = useState(false);
    const styles = {
        div: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fef1e5',
            width: screenWidth < 500 ? '90%' : '40%',
            height: 'auto',
            margin: '50px auto auto auto',
            boxShadow: '-10px 10px #a3a3a36b'
        },

        textarea: {
            height: '250px',
            background: 'white',
            width: '75%',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '5px',
            padding: '2%',
            resize: 'none'
        },

        input: {
            width: '75%',
            height: '150px',
            margin: '5% auto 20px auto',
            padding: '5%',
            borderRadius: '15px',
            background: "white",
        }

    }

    const generateSummary = () => {
        setLoading(true)
        setOutputText("")
        axios.post('/api/text/summary', {
            message: inputText
        })
        .then(res => {
            setLoading(false)
            console.log(res)
            const response = res.data.message
            let i = -1
            let timer = setInterval(() => {
                i++
                if(i === response.length - 1) clearInterval(timer)
                setOutputText(prev => prev + response[i])
            }, 30)
        })
    }

    const generateSimplified = () => {
        setLoading(true)
        setOutputText("")
        axios.post('/api/text/simplify', {
            message: inputText
        })
        .then(res => {
            setLoading(false)
            console.log(res)
            const response = res.data.message
            let i = -1
            let timer = setInterval(() => {
                i++
                if(i === response.length - 1) clearInterval(timer)
                setOutputText(prev => prev + response[i])
            }, 30)
        })
    }

    const generateAdvanced = () => {
        setLoading(true)
        setOutputText("")
        axios.post('/api/text/advanced', {
            message: inputText
        })
        .then(res => {
            console.log(res)
            setLoading(false)
            const response = res.data.message
            let i = -1
            let timer = setInterval(() => {
                i++
                if(i === response.length - 1) clearInterval(timer)
                setOutputText(prev => prev + response[i])
            }, 30)
        })
    }

    const generateClearer = () => {
        setLoading(true)
        setOutputText("")
        axios.post('/api/text/clearer', {
            message: inputText
        })
        .then(res => {
            console.log(res)
            setLoading(false)
            const response = res.data.message
            let i = -1
            let timer = setInterval(() => {
                i++
                if(i === response.length - 1) clearInterval(timer)
                setOutputText(prev => prev + response[i])
            }, 30)
        })
    }

    const generateQuestions = () => {
        setLoading(true)
        setOutputText("")
        axios.post('/api/text/questions', {
            message: inputText
        })
        .then(res => {
            console.log(res)
            setLoading(false)
            const response = res.data.message
            let i = -1
            let timer = setInterval(() => {
                i++
                if(i === response.length - 1) clearInterval(timer)
                setOutputText(prev => prev + response[i])
            }, 30)
        })
    }

    const generateBulletPoints = () => {
        setOutputText("")
        axios.post('/api/text/bullets', {
            message: inputText
        })
        .then(res => {
            console.log(res)
            setLoading(false)
            const response = res.data.message
            let i = -1
            let timer = setInterval(() => {
                i++
                if(i === response.length - 1) clearInterval(timer)
                setOutputText(prev => prev + response[i])
            }, 30)
        })
    }

    const handleChnage = (text) => {
        console.log(text)
        setInputText(text)
    }

    return (
        <div style={styles.div}>
            <TextField
                placeholder="Skriv din text här..."
                variant="standard"
                sx={styles.input}
                multiline={true}
                maxRows={6}
                minRows={6}
                onChange={({target}) => {
                    handleChnage(target.value)
                }}
                value={inputText}
                inputProps={{maxLength: 2000}}
                helperText={`${inputText.length}/2000`}
                error={inputText.length > 1999}
            />
            <div style={{margin: '10px auto 0px auto'}}>
                <Button text="Förenkla" color="red" handleClick={generateSimplified} />
                <Button text="Avancerad" color="pink" handleClick={generateAdvanced} />
                <Button text="Tydligare" color="#06e006" handleClick={generateClearer} />
                <Button text="Sammanfatta" color="yellow" handleClick={generateSummary} />
                <Button text="Skapa frågor på texten" color="black" handleClick={generateQuestions} />

                <div style={{width:'100%', margin: '5% auto'}}>
                    {
                        loading ? 
                        <CircularProgress />
                            :
                        <textarea value={outputText} readOnly={true} style={styles.textarea} />
                    }
                </div>
            </div>
        </div>
    )
}