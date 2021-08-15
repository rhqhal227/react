import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MyNav extends Component{
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while( i < data.length ){
            lists.push(
            <li key={data[i].id}>
                <Link 
                to={data[i].title}
                data-id={data[i].id}
                onClick={function(e){
                    this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}
                >
                {data[i].title}
                </Link>
            </li>
            );
            i = i + 1;
        }
        return(
            <header>
                <div className="wrapper40">
                    <h1>
                        <Link 
                        to="/"
                        onClick={function(){
                            this.props.onChangePage(0);
                        }.bind(this)}
                        >I'm_
                        </Link>
                    </h1>
                    <nav id="gnb">
                        <a href="#!" className="btn_top" onClick={function(e){
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