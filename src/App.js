import React, {Component} from 'react';
import './App.css';
import Card from './component/card/card';

const serviceDescription = (service) => {
    console.log(service);
};

const mockData = () => {
    return [
        {
            title: 'Mr',
            subTitle: 'Juanjo'
        }, {
            title: 'Mr',
            subTitle: 'Pablo'
        }, {
            title: 'Mr',
            subTitle: 'Fran'
        }
    ]
};


class App extends Component {
    render() {
        return (
            <div className="App">
                {mockData().map(item => {
                    return (
                        <Card
                            onServiceSelected={service => serviceDescription(service)}
                            title={item.title}
                            subtitle={item.subTitle}/>
                    )
                })}
            </div>
        );
    }
}

export default App;
