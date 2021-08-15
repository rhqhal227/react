import React, { Component } from 'react';
import PortfolioList from './PortfolioList';
import About from './About';
import MyMain from './MyMain';
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class MyContents extends Component{
    render(){
        return(
            <div id="container" className="container">
                <Route
                render={({ location }) => (
                    <TransitionGroup>
                    <CSSTransition key={location.key} timeout={500} classNames="fade">
                    <Switch>
                        <Route 
                        path="/react/" 
                        render={() => <MyMain
                            mode={this.props.mode}
                            onChangePage={function(id){
                                this.props.onChangePage(id);
                            }.bind(this)}
                            ></MyMain>}
                        exact={true}
                        >
                        </Route>
                        <Route path="/react/Portfolio" component={PortfolioList}></Route>
                        <Route path="/react/About" component={About}></Route>
                    </Switch>
                    </CSSTransition>
                    </TransitionGroup>
                )}
                ></Route>
            </div>
        )
    }
}

export default MyContents;