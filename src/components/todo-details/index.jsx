import { Dialog } from '@mui/material'
import { DialogActions, DialogTitle, Button } from '@mui/material'
import { DialogContent, DialogContentText } from '@mui/material'
import React, { Fragment } from 'react'  

function TodoDetails ({todoDetails,openDialog,setOpenDialog,setTodoDetails})  {
 
 
    return (<Fragment>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogContent>
             <DialogContentText>
                        <strong>Status:</strong> {todoDetails?.completed ? 'Completed' : 'Not Completed'}
                    </DialogContentText>
        </DialogContent>
            <DialogActions>
                <Button onClick={()=> {setTodoDetails(null); setOpenDialog(false)}}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>)

    
  
}

export default TodoDetails;