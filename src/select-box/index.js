import React from 'react';
import './styles.css';

class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items || [],
            showItems: false,
            selectedItem: {
                "code": "",
                "name": "Select Airport...",
                "city": "",
                "state": "",
                "country": "",
            },
            loadingComplete: true
        }
    }

    dropDown = () => {
        this.setState(prevState => ({
            loadingComplete: !prevState.showItems ? false : true,
        }))
        
        // A fake 1 sec timeout is being set here to simulate loading
        setTimeout(() => {
            this.setState(prevState => ({
                showItems: !prevState.showItems,
                loadingComplete: true
            }));
        }, 1000);
    }

    selectItem = (item) => this.setState ({
        selectedItem: item,
        showItems: false,
    })

    render() {
        return (
            <div>
            
            <div className="select-box-box">
                <div className="select-box-container">
                    <div className="select-box-selected-item"> 
                        <span> {this.state.selectedItem.name} </span> 
                        <span className={`${this.state.selectedItem.code ? 'select-box-additional-content': ''}`}>{this.state.selectedItem.code}</span>
                        <span className={`${this.state.selectedItem.city ? 'select-box-additional-content': ''}`}>{this.state.selectedItem.city}</span>
                        <span className={`${this.state.selectedItem.country ? 'select-box-additional-content': ''}`}>{this.state.selectedItem.country}</span>
                    </div>
                    <div className="select-box-arrow" onClick={this.dropDown}>
                        <span className={`${this.state.showItems ? 'select-box-arrow-up': 'select-box-arrow-down'}`}/>
                    </div>
                    {this.state.loadingComplete ?
                        (<div className={`${this.state.showItems ? "select-box-items": "no-display"}`}>
                            {
                                this.state.items.map(item => <div
                                    key={item.code}
                                    onClick={()=> this.selectItem(item)}
                                    className={this.state.selectedItem === item ? 'selected' : ''}
                                >
                                    <span> 
                                        <span> {item.name} </span> 
                                        <span className='select-box-additional-content'>{item.code}</span>
                                        <span className='select-box-additional-content'>{item.city}</span>
                                        <span className='select-box-additional-content'>{item.country}</span>
                                    </span>
                                </div>)
                            }
                        </div>) : <span>Loading...</span> }
                </div>
            </div>
            
            </div>
        )
    }
}

export default SelectBox;
