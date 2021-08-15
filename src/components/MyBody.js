import React, { Component } from 'react';
import MyNav from './MyNav'
import MyFooter from './MyFooter'
import MyContents from './MyContents'

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

class MyBody extends Component{
    render(){
        return(
            <div id="bodyMode" className={"body_wrap"}>
                <Accessibility></Accessibility>
                <MyNav 
                data={this.props.data}
                onChangePage={function(id){
                    if( id === 'top' ){
                        this.props.onChangePage('top');
                    }else if( Number(id) === 1 ){
                        this.props.onChangePage(1);
                    }else if( Number(id) === 2 ){
                        this.props.onChangePage(2);
                    }else{
                        this.props.onChangePage(0);
                    }
                }.bind(this)}
                ></MyNav>
                <MyContents
                mode={this.props.mode}
                fade={this.props.fade}
                load={this.props.load}
                onChangePage={function(id){
                    if( id === 'top' ){
                        this.props.onChangePage('top');
                    }else if( Number(id) === 1 ){
                        this.props.onChangePage(1);
                    }else if( Number(id) === 2 ){
                        this.props.onChangePage(2);
                    }else{
                        this.props.onChangePage(0);
                    }
                }.bind(this)}
                ></MyContents>
                <MyFooter></MyFooter>
            </div>
        )
    }
}

export default MyBody;