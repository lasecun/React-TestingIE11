import React, {Component} from 'react';
import './App.css';
import Card from './component/card/card';
import ColorSelector from "./component/colorSelector/colorSelector";
import _ from 'lodash';
import uuid from 'uuid';

class App extends Component {

    constructor(props) {
        super(props);
        this.originalList = require('./component/mockData/mockData');

        this.state = {
            itemList: this.originalList
        };
    }

    onColorSelected(color) {
        let colorValue = color.target.value;
        let filterList = _.cloneDeep(this.originalList);

        let colorItems = [];

        if (colorValue === 'all') {
            colorItems = this.originalList;
        } else {
            colorItems =
                filterList.filter(item => {
                    return item.color === colorValue;
                })
        }

        this.setState({
            itemList: colorItems
        });
    };

    render() {
        return (
            <div className="App">
                <div>
                    <ColorSelector colorList={this.getColorList()}
                                   onColorSelected={color => this.onColorSelected(color)}/>
                </div>
                <div>
                    {
                        this.state.itemList.map(item => {
                            return (<Card key={uuid.v4()}
                                          color={item.color}
                                          name={item.name}/>)
                        })
                    }
                </div>
            </div>
        );
    }

    getColorList() {
        return _.uniqBy(this.originalList, 'color');
    }
}

export default App;
