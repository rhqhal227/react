import React, { Component } from 'react';

class PortfolioList extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[
                {id:1, title:'iMBC 개편', desc:'2018 imbc 홈페이지 개편 각 채널 메인 코딩', img:'image/img_porfolio01.jpg', url:'http://www.imbc.com/'},
                {id:2, title:'MBC news 개편', desc:'2018 imbc 홈페이지 개편 각 채널 메인 코딩', img:'image/img_porfolio01.jpg'},
                {id:3, title:'MBC news 개편', desc:'2018 imbc 홈페이지 개편 각 채널 메인 코딩', img:'image/img_porfolio01.jpg'}
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
                <h2 className="title portfolio_title">portfolio</h2>
                <div className="portfolio_list">
                    <ul>{items}</ul>
                </div>
            </section>
        )
    }
}

export default PortfolioList;