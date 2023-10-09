import { Button } from './button';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import blankBackground from '../blankBackground.webp'
import axios from '../axios';
import TextField from '@mui/material/TextField';

export const PictureConatiner = (props) => {
    const [loading, setLoading] = useState(false)
    const [inputText, setInputText] = useState("")
    const [url, setUrl] = useState(null);
    const screenWidth = window.screen.width;


    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fef1e5',
            width: screenWidth < 500 ? '85%' : '40%',
            margin: '50px auto auto auto',
            padding: 10,
            boxShadow: '-10px 10px #a3a3a36b'
        },

        textarea: {
            height: '200px',
            background: '#10162f',
            width: '75%',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '5px',
            padding: '2%',
            resize: 'none'
        },

        input: {
            width: '100%',
            margin: 'auto',
            padding: '2%',
            borderRadius: '5px',
            background: "white",
        }

    }

    const generateImage = () => {
        setInputText("")
        setLoading(true)
        axios.post('/api/image/generateImage', {
            message: inputText
        })
        .then(res => {
            console.log(res)
            setUrl(res.data.url)
            setLoading(false)
        })
    }

    const handleChnage = (text) => {
        setInputText(text)
    }



    return (
        <div style={styles.container}>
            <div style={{display: 'flex'}}>
                {/* <TextArea setInputText={setInputText} inputText={inputText} /> */}
                <TextField
                    placeholder="Förklara med bild"
                    variant="standard"
                    sx={styles.input}
                    multiline={true}
                    minRows={3}
                    onChange={({target}) => {
                        handleChnage(target.value)
                    }}
                    inputProps={{maxLength: 100}}
                    helperText={`${inputText.length}/100`}
                    error={inputText.length > 99}
                />
                <Button text="Bild" color="blue" handleClick={generateImage} customStyle={{margin: "auto 5px" }} />
            </div>
            <div style={{margin: '10px auto 0px auto'}}>
                {
                    loading ?
                        <CircularProgress />
                    :
                        <img src={url ? url : blankBackground} alt='Empty' style={{height: 500, width: '95%'}}/>
                }
            </div>
        </div>
    )
}