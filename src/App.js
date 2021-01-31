import React from 'react';
import { BrowserRouter as Router , Link ,Route} from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
import { Button } from 'antd';
import './index.scss';
class App extends React.Component{
    render() {
        return (
            <Router>
                <div className="app">
                    app
                    <Button type="primary">Button</Button>
                </div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/city">城市选择</Link></li>
                    <li><Link to="/map">地图找房</Link></li>
                </ul>
                <Route path="/home" component={Home}></Route>
                <Route path="/city" component={City}></Route>
                <Route path="/map" component={Map}></Route>
            </Router>
        )
    }
}
export default App

