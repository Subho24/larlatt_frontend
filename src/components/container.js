import { ChatContainer } from './chatContainer';
import { PictureConatiner } from './pictureContainer';

export const Container = (props) => {
    const containerStyle = {
        display: 'flex',
        width: '100%',
        height: '100%',
    }

    return (
        <div className='mainContainer' >
            <ChatContainer />
            <PictureConatiner />
        </div>
    )
}