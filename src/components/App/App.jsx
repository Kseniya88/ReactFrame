import { useRef } from 'react';
import { Messages } from '../Messages';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import BluetoothAudioIcon from '@material-ui/icons/BluetoothAudio';

import TextField from '@material-ui/core/TextField';

function App() {
    const messageRef = useRef();

    console.log(messageRef);

    return (
        <div>

            <Messages />

            <div>
                <TextField label='Standard' inputRef={messageRef} />
                <Button
                    color='primary'
                    variant='contained'
                    startIcon={<Icon>send</Icon>}
                    endIcon={<BluetoothAudioIcon />}
                >
                    Click me
                </Button>
            </div>
        </div>
    );
}

export { App };
