import {useState} from 'react'; 
import {Box,Typography,TextField,Button,styled} from '@mui/material';
import {saveInvoice} from '../services/api';

const Component=styled(Box)({
    marginTop: 20,
    '& > p':{
        fontSize: 26,

    }
})

    
    const defaultObj={
      vendor:'',
      product:'',
      amount: 0,
      date: '',
      action:'pending'
    }

    const AddInvoice= ({setAddInvoice}) => {
    const[invoice , setInvoice]=useState(defaultObj);    
    
    const onValueChange =(e) => {
        setInvoice({...invoice, [e.target.name] :e.target.value});
    }
    const addNewInvoice=async () =>{
     await saveInvoice({...invoice, amount:Number(invoice['amount'])});

    setAddInvoice(false);
    }
    return(
       
        <Component>
            <Typography style={{ color: 'white' }}>Add Invoice</Typography>
            <Box>
                <TextField
                    variant="standard"
                    placeholder="Enter the name"
                    onChange={(e)=> onValueChange(e)}
                    name="vendor"
                    sx={{
                        input: {
                            color: 'black',
                            backgroundColor: 'white',
                            padding: '2px',
                            borderRadius: '4px',
                            marginRight: '10px',
                        },
                    }}
                />
                <TextField
                       
                    variant="standard"
                    placeholder="product"
                    onChange={(e)=> onValueChange(e)}
                    name="product"
                    sx={{
                        input: {
                            color: 'black',
                            backgroundColor: 'white',
                            padding: '2px',
                            borderRadius: '4px',
                            marginRight: '10px',
                        },
                    }}
                />
                <TextField
                    variant="standard"
                    placeholder="amount"
                    type="number"
                    onChange={(e)=> onValueChange(e)}
                    name="amount"
                    sx={{
                        input: {
                            color: 'black',
                            backgroundColor: 'white',
                            padding: '2px',
                            borderRadius: '4px',
                            marginRight: '10px',
                        },
                    }}
                />
                
                <TextField
                    variant="standard"
                    placeholder="Enter date"
                    type="date"
                    onChange={(e)=> onValueChange(e)}
                    name="date"
                    sx={{
                        input: {
                            color: 'black',
                            backgroundColor: 'white',
                            padding: '2px',
                            borderRadius: '4px',
                            marginRight: '10px',
                        },
                    }}
                />
                <Button style={{marginLeft: 50}} variant="contained"
                
                onClick= {()=> addNewInvoice()}
                >
                    Add Invoice

                    </Button> 
                            </Box>
        </Component>
    )
}
 export default AddInvoice;