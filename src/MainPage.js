import React, { Component } from 'react';
import { Button } from 'react-mdc-web/lib';
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = (type) => {
        this.props.history.push({ pathname: type === 1 ? '/PageOne' : '/PageTwo' });
    }
    render() {
        return (
            <div>
   <div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px', display: 'flex', justifyContent: 'center'}}> Rapido </div>
                    <div className='inputverify' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',marginTop: '20px', alignItems: 'center' }}>
                        <div className='VerifyBtn' style={{ padding: '20px'}}>
                        <Button raised
                                style={{ height: '44px', fontSize: '16px', background:  '#2e9b50', color: "#FFF", border:  '1px solid #2e9b50' }}
                                onClick={() => this.handleClick(1)}
                                >Page One </Button>
                        </div>
                        <div className='VerifyBtn'  style={{ padding: '20px'}}>
                            <Button raised
                                style={{ height: '44px', fontSize: '16px', background:  '#2e9b50', color: "#FFF", border:  '1px solid #2e9b50' }}
                                onClick={() => this.handleClick(2)}
                                >Page Two </Button></div>
                    </div>
            </div>
        );
    }
}