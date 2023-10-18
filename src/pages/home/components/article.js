import React, { Component } from 'react';

import { ListItem, ListInfo } from '../style';

class Article extends Component{
	render(){
		return (
			<div className={ this.props.list? 'focused iconfont':'iconfont' }>
				{ this.props.list.map((item)=>{
				return (
				<ListItem>
					<img className="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BkzORtQfrAu4qSTIZpzDFrRL3ve5SHR12Q&usqp=CAU" />
					<ListInfo>
						<a href="/detail" className="subject">{item.title}</a>
						<p className="content" alt="content" >{item.content}</p>
					</ListInfo>
				</ListItem>
				)})}
			</div>
		)
	}
}

export default Article;