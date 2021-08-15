import React, { Component } from 'react';

class PortfolioList extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[
                {id:1, title:'DMC 페스티벌', desc:'2017 DMC 페스티벌 홈페이지 코딩 및 유지보수(모바일)', img:'image/img_portfolio_dmc.jpg', url:'http://dmcfestival.imbc.com/m/'},
                {id:2, title:'2018 MBC 아시안 게임', desc:'2018 MBC 아시안 게임 홈페이지 코딩(PC)', img:'image/img_portfolio_asian.jpg', url:'http://2018asian.imbc.com/'},
                {id:3, title:'2018 MBC 러시아월드컵', desc:'2018 MBC 러시아월드컵 홈페이지 코딩(PC, 모바일)', img:'image/img_portfolio_worldcup.jpg', url:'http://2018worldcup.imbc.com/'},
                {id:4, title:'iMBC 개편', desc:'2018 imbc 홈페이지 개편 각 채널 메인 코딩 및 유지보수', img:'image/img_portfolio_imbc.jpg', url:'http://www.imbc.com/'},
                {id:5, title:'MBC news 개편', desc:'2018 MBC news 홈페이지 개편 코딩(모바일, 반응형, 모바일앱 웹뷰)', img:'image/img_portfolio_news.jpg', url:'https://imnews.imbc.com/m_main.html'},
                {id:6, title:'2020 국회의원 총선', desc:'2020 국회의원 총선 홍보 및 개표 홈페이지 코딩(모바일)', img:'image/img_portfolio_vote.jpg', url:'https://imnews.imbc.com/issue/vote2020/elect/m/gp.html'},
                {id:7, title:'MBC 드라마 극본공모', desc:'MBC 드라마 극본공모 홈페이지 코딩 및 유지보수', img:'image/img_portfolio_drama.jpg', url:'http://writer.imbc.com/'},
                {id:8, title:'MBC 시청자 소통센터', desc:'MBC 시청자 소통센터 홈페이지 개편 코딩 및 유지보수', img:'image/img_portfolio_center.jpg', url:'http://withmbc.imbc.com/center'},
                {id:9, title:'MBC 챔피언스트로피', desc:'MBC 챔피언스트로피 홈페이지 코딩 및 유지보수(PC, 모바일)', img:'image/img_portfolio_mct.jpg', url:'http://mct.imbc.com/'},
                {id:10, title:'MBC와 함께', desc:'MBC와 함께 홈페이지 개편 코딩 및 유지보수(모바일)', img:'image/img_portfolio_with.jpg', url:'http://with.mbc.co.kr/m/'},
                {id:11, title:'MBC 아카이브', desc:'MBC 아카이브 홈페이지 개편 코딩(PC)', img:'image/img_portfolio_acv.jpg', url:'https://www.mbcarchive.com/include/default.html'},
                {id:12, title:'iMBC 고객센터', desc:'iMBC 고객센터 홈페이지 개편 코딩 및 유지보수(PC, 모바일, 관리자툴)', img:'image/img_portfolio_help.jpg', url:'http://help.imbc.com/faq/pc_index'},
                {id:13, title:'iMBC 게시판', desc:'iMBC 게시판 PC버전 개편 코딩'}
            ]
        }
    }
    render(){
        document.addEventListener("DOMContentLoaded", function(){
            document.getElementById('bodyMode').className = 'body_wrap body_portfolio';
        });
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
            <section className="portfolio wrapper">
                <h2 className="title portfolio_title">portfolio📝</h2>
                <div className="portfolio_list">
                    <ul>{items}</ul>
                </div>
            </section>
        )
    }
}

export default PortfolioList;