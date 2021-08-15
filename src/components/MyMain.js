import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MyMain extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[
                {id:1, title:'iMBC 개편', desc:'2018 imbc 홈페이지 개편 각 채널 메인 코딩 및 유지보수', img:'image/img_portfolio_imbc.jpg', url:'http://www.imbc.com/'},
                {id:2, title:'MBC news 개편', desc:'2018 MBC news 홈페이지 개편 코딩(모바일, 반응형, 모바일앱 웹뷰)', img:'image/img_portfolio_news.jpg', url:'https://imnews.imbc.com/m_main.html'},
                {id:3, title:'2020 국회의원 총선', desc:'2020 국회의원 총선 홍보 및 개표 홈페이지 코딩(모바일)', img:'image/img_portfolio_vote.jpg', url:'https://imnews.imbc.com/issue/vote2020/elect/m/gp.html'},
                {id:4, title:'MBC 시청자 소통센터', desc:'MBC 시청자 소통센터 홈페이지 개편 코딩 및 유지보수', img:'image/img_portfolio_center.jpg', url:'http://withmbc.imbc.com/center'},
                {id:5, title:'MBC와 함께', desc:'MBC와 함께 홈페이지 개편 코딩 및 유지보수(모바일)', img:'image/img_portfolio_with.jpg', url:'http://with.mbc.co.kr/m/'},
            ]
        }
    }
    render(){
        var items = [];
        var data = this.state.item;
        var i = 0;
        while( i < data.length ){
            if(data[i].url===undefined){
                items.push(
                    <li key={i}>
                        <a href="#!" className="list_wrap">
                            <strong>{data[i].title}</strong>
                            <span className="txt">{data[i].desc}<br /><em>HTML, CSS, JavaScript, jQuery</em></span>
                        </a>
                    </li>
                )
            }else{
                items.push(
                    <li key={i}>
                        <a 
                        href={data[i].url} 
                        className="list_wrap"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={data[i].title+' 새창'}
                        >
                            <strong>{data[i].title}</strong>
                            <span className="txt">{data[i].desc}<br /><em>HTML, CSS, JavaScript, jQuery</em></span>
                            <span className="link">Visit website ↗</span>
                        </a>
                        <div className="img"><img src={data[i].img} alt={data[i].title+' 이미지'} /></div>
                    </li>
                )
            }
            i = i + 1;
        }
        return(
            <div className="main_wrap">
                <section className="visual">
                    <div class="wrapper">
                        <div className="visual_txt">
                            <h2>Hello, I'm_<strong>Web<br />publisher!</strong></h2>
                            <Link 
                            to="/Portfolio"
                            className="btn_link"
                            onClick={function(){
                                this.props.onChangePage(1);
                            }.bind(this)}
                            ><span>View Portfolio ↗</span>
                            </Link>
                        </div>
                        <div className="bg visual_bg"><img src="image/bg_visual.jpg" alt="visual_background" /></div>
                    </div>
                </section>
                <section className="portfolio wrapper">
                <div className="portfolio_txt">
                    <h2 className="blind">portfolio</h2>
                        <p>저는 <em>웹퍼블리셔</em>입니다.<br />
                        HTML, CSS, Javascript, jQuery를 사용하여 코딩합니다.<br />
                        소통하는 자세로 업무를 수행하며,<br />성장하기 위해 끊임없이 노력하겠습니다.</p>
                        <Link 
                        to="/react/About"
                        className="btn_link"
                        onClick={function(){
                            this.props.onChangePage(2);
                        }.bind(this)}
                        ><span>About Me ↗</span>
                        </Link>
                    </div>
                    <div className="portfolio_list">
                        <ul>{items}</ul>
                        <div className="list_more">
                            <p>My Portfolio
                                <Link 
                                to="/react/Portfolio"
                                className="btn_link"
                                onClick={function(){
                                    this.props.onChangePage(1);
                                }.bind(this)}
                                ><span>more view ↗</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MyMain;