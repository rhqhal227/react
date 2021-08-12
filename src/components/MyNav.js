import React, { Component } from 'react';

class MyNav extends Component{
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while( i < data.length ){
            lists.push(
            <li key={data[i].id}>
                <a 
                href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}
                >{data[i].title}
                </a>
            </li>
            );
            i = i + 1;
        }
        return(
            <header>
                <div className="wrapper40">
                    <h1><a href="" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(0);
                    }.bind(this)}>I'm_</a></h1>
                    <nav id="gnb">
                        <a href="" className="btn_top" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage('top');
                    }.bind(this)}>top</a>
                        <ul className="nav">
                            {lists}
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default MyNav;