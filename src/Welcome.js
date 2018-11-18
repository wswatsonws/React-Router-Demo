import React from 'react'

class Welcome extends React.Component{
    render(){
        const todolist = ['learn a','learn b']
        const islogin = false
        return (
        <div className="this" htmlFor="">
        <h1> Hello React</h1>
        <ul>
            {
                todolist.map(item =>
                    <li>{item}</li>
                )
            }
            {islogin ? <p>你已经登录</p> : <p>请登录</p>}

        </ul>
        {12 + 45}
        </div>
        )
    }
   
}

export default Welcome