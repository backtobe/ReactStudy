import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'

import './style/main.css'

class Main extends Component {
  static propTypes = {
    searchName:PropTypes.string.isRequired
  }
  state = {
    initView: true,
    loading: false,
    users: [],
    errorMsg: null
  }

  componentWillReceiveProps(newProps){
    let {initView, loading, errorMsg} = this.state
    const {searchName} = newProps
    initView = false
    loading = true
    errorMsg = false
    this.setState({initView, loading})
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        // 得到响应数据
        let users = []
        loading = false
        this.setState({loading})
        const result = response.data
        result.items.map(item => {
          users.push({name: item.login, url: item.html_url, avatarUrl: item.avatar_url})
        })
        console.log(users)
        // 更新状态(成功)
        this.setState({users})
      })
      .catch(error => {
        // 更新状态(失败)
        this.setState({loading: false, errorMsg: error.message})
      })
      
  }

  renderUsers = () => {
    const {users} = this.state
    return users.map((item,index) => {
      return (
        <div className="card" key={index}>
          <div className="card-img">
            <a href={item.url}>
              <img src={item.avatarUrl} alt=""/>
            </a>
          </div>
          <div className = "card-name" title={item.name}>
            {item.name}
          </div>
        </div>
      )
    }) 
  }
  render(){
    const {initView, loading, errorMsg, users} = this.state
    if(initView){
      return (
        <div className="to-search" >
          Enter name to search
        </div>
        )
      }
    else if(loading){
      return (
        <div className="searching">
          Loading for searching
        </div>
      )
    }else if (errorMsg){
      return (
        <div className="no-result">
          暂无搜索结果
        </div>
      )
    }else{
      return (
        <div className="main-container">
          { this.renderUsers()}
        </div>
        
      )
    }
  }
}
export default Main