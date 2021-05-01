import React from 'react';

export default class HeaderContent extends React.Component {
    render() {
        return(
            <div className="header-content">
                <div id="header">
                    <div className="row">
                        <div className="col s12" style={{"height":"35em"}}>
                            <h3 style={{"textAlign": "center",
                                        "marginTop": "1.66em",
                                        "color": "white",
                                        "font-family": "time",
                                        "line-height": "1.66em"}}>
                                        Experience<br />
                                        Knowledge<br />
                                        Commitment<br />
                                        Compassion
                            </h3>
                                {/*<p class="p-heading p-large">Our family of communities remain entirely Covid free</p>
                                <a className="btn-solid-lg page-scroll" href="#contact">Contact Us</a>-->*/} 
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> /* end of header-content */
        )
    }
}