
import { TableCell, Table, TableHead, TableRow, TableBody, Button, Typography, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTable = styled(Table)({
    margin: 20,
    marginTop: 40,
    width: '80%',
    '& > thead > tr > th': {
        background: '#000',
        color: '#FFFFFF',
        fontSize: 18,
        padding: '6px 10px', // Reduce padding for compactness
        lineHeight: 1,
    },
    '& > tbody > tr > td': {
        fontSize: 16,
    },
    '& > tbody > p': {
        fontSize: 18,
        marginTop: 15
    }
})

const Invoices = ({ invoices, removeInvoice }) => {
    return (
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>​🇻​​🇪​​🇳​​🇩​​🇴​​🇷​</TableCell>
                    <TableCell>​🇵​​🇷​​🇴​​🇩​​🇺​​🇨​​🇹​</TableCell>
                    <TableCell>🇦​​🇲​​🇴​​🇺​​🇳​​🇹​​</TableCell>
                    <TableCell>🇩​​🇦​​🇹​​🇪</TableCell>
                    <TableCell>​🇸​​🇹​​🇦​​🇹​​🇺​​🇸</TableCell>
                    <TableCell>🇦​​🇨​​🇹​​🇮​​🇴​​🇳</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    invoices && Array.isArray(invoices) && invoices.length > 0 ?
                        invoices.map(invoice => (
                            <TableRow key={invoice.id}>
                                <TableCell>{invoice.vendor}</TableCell>
                                <TableCell>{invoice.product}</TableCell>
                                <TableCell>Rs {invoice.amount}</TableCell>
                                <TableCell>{invoice.date}</TableCell>
                                <TableCell>{invoice.action}</TableCell>
                                <TableCell><Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => removeInvoice(invoice.id)}>Mark Done</Button></TableCell>
                            </TableRow>
                        ))
                        :
                        <Typography>🇳​​🇴​ ​🇵​​🇪​​🇳​​🇩​​🇮​​🇳​​🇬​ ​🇮​​🇳​​🇻​​🇴​​🇮​​🇨​​🇪</Typography>
                }
            </TableBody>
        </StyledTable>
    )
}

export default Invoices;