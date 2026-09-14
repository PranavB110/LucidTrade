import React from 'react';

function Hero() {
    return ( 
      <section className="container-fluid" id="supportHero">
        <div className="p-5"  id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="">Track Ticket</a>
        </div>
        <div className="p-5 ">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-3">Search for an answer or vrowse help topics to create a ticket</h1>
                    <input placeholder="Eg. how do i activate F$O"></input><br/>
                    <a href="">Track account opening</a>
                    <a href="">Track system activation</a>
                </div>
                <div className="col-6 p-5 ">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - Tanuary 2024</a></li>
                        <li>                    <a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </div>

      </section>
     );
}

export default Hero;