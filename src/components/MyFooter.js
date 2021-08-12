import React, { Component } from 'react';

class MyFooter extends Component{
    render(){
        return(
            <footer>
                <div className="wrapper">
                    <h2>Say, Hello!</h2>
                    <ul className="info">
                        <li>서울시 서대문구 홍제동 106-13 1층</li>
                        <li>010 4670 2538</li>
                        <li><a className="btn_link" href="mailto:rhqhal227@naver.com"><span>rhqhal227@naver.com</span></a></li>
                    </ul>
                    <a href="" className="btn_link sns"><span>Instargram ↗</span></a>
                </div>
            </footer>
        )
    }
}
export default MyFooter;