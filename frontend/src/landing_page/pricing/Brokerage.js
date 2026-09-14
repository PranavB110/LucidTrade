import React from 'react';

function Brokerage() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8 p-4">
                    <a href="" style={{ textDecoration: "none"}}>Brokerage calculator</a>
                    <ul style={{ textAlign: "left", lineHeight: "2.5", fontSize:"12px"}} className="text-muted">
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of $50 + GST per order.</li>                         
                        <li>Digital contract notes will be sent via e-mail</li>
                        <li>Physical copies oof contract notes, if required, shall be charged $20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PSI), 0.5% or $100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PSI), 0.5% or $200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged $40 per executed order instead of $20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <a href="" style={{ textDecoration: "none"}}>Brokerage calculator</a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;