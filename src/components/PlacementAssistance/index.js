import './index.css'

function PlacementAssistance(){
    return(
        <div id='PlacementAssistance' className='placement-assistance-container'>
            <div className='d-flex flex-column align-items-center'>
                <h1 className='wcu-heading'>100% Placement Assistance</h1>
                <hr className='wcu-underline'/>
            </div>
            <div className='text-start ps-3 ps-sm-5'>
                <p className='fw-bold m-0'>Resume Building</p>
                <p>1FIN provides professional guidance to help you create an effective resume to help you create a lasting impression.</p>
            </div>
            <div className='text-start ps-3 ps-sm-5'>
                <p className='fw-bold m-0'>Career Counselling</p>
                <p>
                    We provide career counselling to conducting mock interviews and aptitude tests – we will assist you at every step, all the way, we make you job ready
                </p>
            </div>
            <div className='text-start ps-3 ps-sm-5'>
                <p className='fw-bold m-0'>Jobs</p>
                <p>
                    We will give you an edge over others with our direct corporate affiliations which will ensure that you are placed right.
                </p>
            </div>
        </div>
    )
}

export default PlacementAssistance