import React, { Component } from 'react';
import { Button } from 'react-mdc-web/lib';
export default class PageTwo extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
<div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px', display: 'flex', justifyContent: 'center'}}> Page Two</div>
                    <div className='SearchBtn' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',marginTop: '20px', alignItems: 'center'}}>
                        <Button raised
                            style={{ height: '44px',fontSize: '16px', background: '#2e9b50', color: "#FFF", border:  '1px solid #2e9b50' }}
                            onClick={() => this.handleClick()} >Go back </Button>
                    </div>
              
            </div>
        );
    }
}