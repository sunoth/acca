
import './index.css'

function WhatWillYouLearnInACCA() {
    return(
        <div id='WhatWillYouLearnInACCA' className='mt-4 d-flex flex-column align-items-center'>
            <h1 className='wcu-heading'>What Will You Learn In ACCA?</h1>
            <hr className='wcu-underline' />
            <div className='d-md-flex flex-wrap justify-content-center'>
                <div className='learn-acca-container'>
                    <div className='w-100'>
                        <div className='bg-primary text-light p-2'>Knowledge Level</div>
                        <ul className='text-start mt-1'>
                            <li>Business and Technology (BT)</li>
                            <li>Management Accounting (MA)</li>
                            <li>Financial Accounting (FA)</li>
                        </ul>
                    </div>
                    <div className='w-100'>
                        <div className='bg-primary text-light p-2'>3 papers</div>
                    </div>
                </div>
                <div className='learn-acca-container'>
                    <div className='w-100'>
                        <div className='bg-primary text-light p-2'>Skill Level</div>
                        <ul className='text-start mt-1'>
                            <li>Corporate and Business Law (LW)</li>
                            <li>Performance Management (PM)</li>
                            <li>Taxation (TX)</li>
                            <li>Financial Reporting (FR)</li>
                            <li>Audit and Assurance (AA)</li>
                            <li>Financial Management (FM)</li>
                        </ul>
                    </div>
                    <div className='w-100'>
                        <div className='bg-primary text-light p-2'>6 papers</div>
                    </div>
                </div>
                <div className='learn-acca-container'>
                    <div className='w-100'>
                        <div className='bg-primary text-light p-2'>Professional Level</div>
                        <p className='ps-4 m-0 text-start fw-bold'>compulsory</p>
                        <ul className='text-start mt-1'>
                            <li>SBL - Strategic Business Leader</li>
                            <li>SBR - Strategic Business Reporting</li>
                        </ul>
                        <p className='ps-4 m-0 text-start fw-bold'>Two out of the following</p>
                        <ul className='text-start mt-1'>
                            <li className='fs-6'>Advanced Financial Management (AFM)</li>
                            <li>Advanced Performance Management (APM)</li>
                            <li>Advanced Taxation (ATX)</li>
                            <li>Advanced Audit and Assurance (AAA)</li>
                        </ul>
                    </div>
                    <div className='w-100'>
                        <div className='bg-primary text-light p-2'>4 papers</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWillYouLearnInACCA