import React,{useState,useEffect} from "react";
import Header from '../components/Header' ;
import {Box,Typography,Button} from '@mui/material';
import AddInvoice from '../components/AddInvoice';
import Invoices from '../components/Invoices';
import {getAllInvoice,deleteInvoice} from '../services/api';
import About from '../components/About';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Home = () => {
    const [invoices,setInvoices]=useState([]);
    const [addInvoice,setAddInvoice]= useState(false);

    useEffect(() => {
        const getData = async () =>{
            const response = await getAllInvoice();
            response && response.data &&  setInvoices(response.data);
        } 
        getData();
    },[addInvoice])
    
    const toggleInvoice=()=>{
setAddInvoice(true);
    }

    const removeInvoice = async (id) => {
        await deleteInvoice(id);

      const updateInvoices= invoices.filter(invoices=>invoices.id !==id);
      setInvoices(updateInvoices);
    }
    
    return (
        <>
<Header/>
        <About/>
        <Box style ={{margin:20}}>
         
         
           <section class="section" id="invoices">
            <h1 class="heading" style={{ color: 'black', fontSize: '22px',marginTop:'455px' }}> ᴬᴰᴰ ʸᴼᵁᴿ ᴵᴺⱽᴼᴵᶜᴱ</h1>
            <Typography style={{ color: 'red', marginTop:'20px' }}>
               </Typography>
           </section>
           
         {!addInvoice && <Button variant="contained" 
         style={{marginLeft:0 , marginTop:'40px'}}                   
          onClick={() => toggleInvoice()}
        >Add Invoice</Button>
        
    }
           { addInvoice && <AddInvoice setAddInvoice={setAddInvoice}/> }
           <Invoices invoices={invoices} removeInvoice ={removeInvoice}
           />
        </Box>

        <section
    





  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 20px', // Padding for spacing
    color: 'white',
    position: 'relative', // Ensures it aligns with the scrolling backgrounds
    zIndex: 1, // Keeps it above the background
    minHeight: '100vh', // Ensures it spans the full viewport
  }}
>
  <h1 id="about" class="aboutSection" style={{
      fontSize: '24px',
      color:'white',
    
      marginBottom: '10px',
      marginTop: '21.5%',
      textAlign: 'center',
      fontFamily:'cursive',
    }}>Connect with us</h1>
  <h1
    style={{
      fontSize: '24px',
      marginBottom: '10px',
    
      textAlign: 'center',
    }}
  >
    ＡＢＯＵＴ　ＵＳ
  </h1>

  <Typography
    variant="body1"
    style={{
      textAlign: 'center',
      maxWidth: '600px',
      lineHeight: '1.6',
      marginBottom: '10px',
    }}
  >
    Time Savings: Reduces the time spent creating, approving, and managing invoices.
  </Typography>
  <Typography
    variant="body1"
    style={{
      textAlign: 'center',
      maxWidth: '600px',
      lineHeight: '1.6',
      marginBottom: '10px',
    }}
  >
    Cost Efficiency: Lowers administrative costs by automating repetitive tasks.
  </Typography>
  <Typography
    variant="body1"
    style={{
      textAlign: 'center',
      maxWidth: '600px',
      lineHeight: '1.6',
      marginBottom: '10px',
    }}
  >
    Improved Accuracy: Eliminates manual errors in calculations and data entry.
  </Typography>
  <Typography
    variant="body1"
    style={{
      textAlign: 'center',
      maxWidth: '600px',
      lineHeight: '1.6',
    }}
  >
    Faster Payments: Facilitates quicker invoicing and payment processing.
  </Typography>

  <div
    style={{
      marginTop: '30px',
      display: 'flex',
      gap: '20px', // Space between icons
      justifyContent: 'center',
    }}
  >
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit', cursor: 'pointer' }}
    >
      <InstagramIcon />
    </a>
    <a
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit', cursor: 'pointer' }}
    >
      <GitHubIcon />
    </a>
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit', cursor: 'pointer' }}
    >
      <FacebookIcon />
    </a>
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit', cursor: 'pointer' }}
    >
      <LinkedInIcon />
    </a>
  </div>
</section>


        </>
    )
}
export default Home;  