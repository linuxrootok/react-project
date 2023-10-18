import React, { Component } from 'react';

import { connect } from 'react-redux';

import { HomeWrapper, HomeLeft, HomeRight, ActionRight } from './style';

import Article from './components/article';

import People from './components/people';

import axios from 'axios';

import { actionCreators } from './store';

class Home extends Component{
	// constructor(props){
	// 	super(props);
	// 	this.dispatchAction = this.dispatchAction.bind(this);
	// }
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt="banner" className="banner" src="https://i.pinimg.com/originals/39/95/4a/39954a5f77a37fdcfbb7e64562491215.jpg" />
					<Article list = {this.props.list}></Article>
				</HomeLeft>
				<HomeRight>
					<ActionRight>
						<a href="#">
							<img alt="" className="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzBW9VLQx6FrcsNfXYDvdZZleRvu0pszPnWErKvCu-6ANJqktMBA79tHRizltZF4HtWA&usqp=CAU" />
						</a>
						<a href="#">
							<img alt="" className="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfGeN8vfgwyvi8pcdbkNcRtW7woEp6dlPIQ35aOWFtMPWdiXrhNmncHupa9AXFSzWCfE&usqp=CAU" />
						</a>
						<a href="#">
							<img alt="" className="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7ukm9MVFN5JnMuKrL_Yid0MlHYqukZhpOQ&usqp=CAU" />
						</a>
					</ActionRight>
					<People>
					</People>
				</HomeRight>
			</HomeWrapper>
		)
	}
	componentDidMount(){
	    axios.get('/api/articleList.json').then((res) => {
	    		console.log(res);
	    		this.props.dispatchAction(res.data);	
	    	}).catch((e) => {
	    		console.log(e.message);
	    	})
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.home.get('list')
		//list: state.getIn(['home','list']),
		//focused: state.header.get('focused')
		//focused: state.get('header').get('focused')
		//focused: state.getIn(['header','focused'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		//console.log('dipatch here');		
		dispatchAction(data) {
			dispatch(actionCreators.getArticles(data));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);