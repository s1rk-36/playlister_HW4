import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ErrorModal(props) {

    let modalClass = "modal-is-visible";

    return(
        <Modal
            open = {props.propOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Alert severity="error">{props.propMessage}</Alert>
            <Button 
            variant='contained'
            color="error" 
            onClick={props.hideAlert}
            > X </Button>
            </Box> 
        </Modal>
    )
}