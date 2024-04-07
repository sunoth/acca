import Button from 'react-bootstrap/Button';
import './index.css'
import RequestCallBack from '../RequestCallBack';

function KickOffACCAPrep() {
    return(
        <div className='prep-container'>
            <div className='kick-off-prep-container'>
                <h1 className='kick-off-heading'>Kick off your ACCA Prep Journey with IndigoLearn</h1>
                <p>Sign in and get instant access to our free course</p>
                <Button variant='danger mb-2'>SILVER LEARNING PARTNER ACCA</Button>
            </div>
            <RequestCallBack/>
        </div>
    )
}

export default KickOffACCAPrep