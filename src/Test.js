import React from 'react'
import './Test.css'
// 用来测试伪类
class Test extends React.Component {

    componentDidMount() {
        let items = document.getElementsByClassName('content');
        let arr = [];
        for(var i = 0; i < items.length; i++) {
            arr.push(items[items.length - i - 1]);
        }
        items = null;
        let popInterval = setInterval(function() {
            let item = arr.pop();
            console.log(item.className)
            item.className += ' full';
            // item.style.width = '100%'
            // item.style.height = '50px'
            if(arr.length === 0) {
                console.log('clearpopinterval')
                clearInterval(popInterval);
            }  
        },333);
    }
    render() {
        return (
            <div id='parent'>
                <div className='head'>
                    <h2>2018年10月10日</h2>
                    <h2>星期一</h2>
                </div>
                <div className='body'>
                    <div className='first content'></div>
                    <div className='second content'></div>
                    <div className='third content'></div>
                    <div className='forth content'></div>
                    <div className='fifth content'></div>
                    <div className='sixth content'></div>
                </div>
            </div>
        )
    }
} 

export default Test;