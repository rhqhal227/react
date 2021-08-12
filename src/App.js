import React, { Component } from 'react';
import MyNav from './components/MyNav'
import MyVisual from './components/MyVisual'
import PortfolioMain from './components/PortfolioMain'
import PortfolioList from './components/PortfolioList'
import About from './components/About'
import MyFooter from './components/MyFooter'
import './myApp/css/style.css';
import './myApp/common/css/base.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            mode:'main',
            fade:true,
            contents:[
                {id:1, title:'Portfolio'},
                {id:2, title:'About'}
            ]
        }
    }
    getVisual(){
        var _content = 'null';
        if( this.state.mode === 'main' ){
            _content = <MyVisual onChangePage={function(mode){
                this.setState({ mode:mode });
            }.bind(this)}></MyVisual>;
        }else{
            _content = '';
        }
        return _content;
    }
    getContent(){
        var _content = 'null';
        if( this.state.mode === 'main' ){
            _content = <PortfolioMain onChangePage={function(mode){
                this.setState({ mode:mode });
            }.bind(this)}></PortfolioMain>;
            window.scrollTo(0, 0);
        }else if( this.state.mode === 'portfolio' ){
            _content = <PortfolioList></PortfolioList>;
            window.scrollTo(0, 0);
        }else if(this.state.mode === 'about'){
            _content = <About></About>;
            window.scrollTo(0, 0);
        }
        return _content;
    }
    getClassName(){
        var _className = 'null';
        if( this.state.mode === 'main' ){
            _className = '';
        }else if( this.state.mode === 'portfolio' ){
            _className = 'body_'+this.state.mode;
        }else if(this.state.mode === 'about'){
            _className = 'body_'+this.state.mode;
        }
        return _className;
    }
    render(){
        return (
            <div id="bodyMode" className={'body_wrap '+this.getClassName()}>
                <Accessibility></Accessibility>
                <MyNav 
                    onChangePage={function(id){
                        if( Number(id) === 1 ){
                            this.setState({
                                mode:'portfolio'
                            })
                        }else if( Number(id) === 2 ){
                            this.setState({
                                mode:'about'
                            })
                        }else{
                            this.setState({
                                mode:'main'
                            })
                        }
                    }.bind(this)}
                    data={this.state.contents}
                >   
                </MyNav>
                <div id="container" className="container">
                    {this.getVisual()}
                    {this.getContent()}
                </div>
                <MyFooter></MyFooter>
            </div>
        );
    }
}

class Accessibility extends Component{
    render(){
        return(
            <div id="accessibility">
                <a href="#gnb">메뉴 바로가기</a>
                <a href="#container">본문 바로가기</a>
            </div>
        )
    }
}

export default App;
