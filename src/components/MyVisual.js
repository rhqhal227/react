import React, { Component } from 'react';

class MyVisual extends Component{
    render(){
        return(
            <section className="visual wrapper">
                <div className="visual_txt">
                    <h2>Hello, I'm_<strong>Web<br />publisher!</strong></h2>
                    <a 
                    href="" 
                    className="btn_link"
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage('portfolio');
                    }.bind(this)}
                    ><span>View Portfolio ↗</span>
                    </a>
                </div>
                <div className="bg visual_bg"><img src="image/bg_visual.jpg" alt="visual_background" /></div>
            </section>
        )
    }
}

export default MyVisual;