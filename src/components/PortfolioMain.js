import React, { Component } from 'react';

class PortfolioMain extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[
                {id:1, title:'iMBC 개편', desc:'2018 imbc 홈페이지 개편 각 채널 메인 코딩', img:'image/img_porfolio01.jpg', url:'http://www.imbc.com/'},
                {id:2, title:'MBC news 개편', desc:'2018 imbc 홈페이지 개편 각 채널 메인 코딩', img:'image/img_porfolio01.jpg'}
            ]
        }
    }
    render(){
        var items = [];
        var data = this.state.item;
        var i = 0;
        while( i < data.length ){
            items.push(
                <li key={i}>
                    <a 
                    href={data[i].url} 
                    className="list_wrap"
                    target="_blank"
                    >
                        <strong>{data[i].title}</strong>
                        <span className="txt">{data[i].desc}<br /><em>HTML, CSS, JavaScript, jQuery</em></span>
                        <span className="link">Visit website ↗</span>
                    </a>
                    <div className="img"><img src="image/img_portfolio01.jpg" alt="" /></div>
                </li>
            )
            i = i + 1;
        }
        return(
            <section className="portfolio wrapper">
                <div className="portfolio_txt">
                    <h2 className="blind">portfolio</h2>
                    <p>저는 <em>웹퍼블리셔</em> 입니다.<br />
                    HTML, CSS, Javascript, jQuery를 사용하여 코딩합니다.<br />
                    소통하는 자세로 업무를 수행하며,<br />성장하기 위해 끊임없이 노력하겠습니다.</p>
                    <a 
                    href="" 
                    className="btn_link"
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage('about');
                    }.bind(this)}
                    ><span>About Me ↗</span>
                    </a>
                </div>
                <div className="portfolio_list">
                    <ul>{items}</ul>
                    <div className="list_more">
                        <p>My Portfolio 
                            <a 
                            href="" 
                            className="btn_link"
                            onClick={function(e){
                                e.preventDefault();
                                this.props.onChangePage('portfolio');
                            }.bind(this)}
                            ><span>more view ↗</span>
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default PortfolioMain;