import React, { Component } from 'react';
import MyBody from './components/MyBody'
import './myApp/common/css/base.css';
import './myApp/css/style.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            mode:'main',
            load:true,
            fade:false,
            contents:[
                {id:1, title:'Portfolio'},
                {id:2, title:'About'}
            ]
        }
    }
    componentDidMount(){
        window.onpopstate = function(e) {
            var locationHref=window.location.href;
            if( locationHref.indexOf('Portfolio') > -1 ){
                this.setState({ mode:'portfolio' });
                document.getElementById('bodyMode').className = 'body_wrap body_portfolio';
            }else if( locationHref.indexOf('About') > -1 ){
                this.setState({ mode:'about' });
                document.getElementById('bodyMode').className = 'body_wrap body_about';
            }else{
                this.setState({mode:'main'});
                document.getElementById('bodyMode').className = 'body_wrap body_main';
            }
        }.bind(this);
    }
    render(){       
        return (
            <MyBody 
            data={this.state.contents}
            mode={this.state.mode}
            load={this.state.load}
            fade={this.state.fade}
            onChangePage={function(id, fade){
                window.scrollTo(0, 0);
                if( id === 'top' ){
                    window.scrollTo(0, 0);
                }else if( Number(id) === 1 ){
                    this.setState({mode:'portfolio'});
                    document.getElementById('bodyMode').className = 'body_wrap body_portfolio';
                }else if( Number(id) === 2 ){
                    this.setState({mode:'about'});
                    document.getElementById('bodyMode').className = 'body_wrap body_about';
                }else{
                    this.setState({mode:'main'});
                    document.getElementById('bodyMode').className = 'body_wrap body_main';
                }
            }.bind(this)}
            ></MyBody>
        );
    }
}

export default App;
