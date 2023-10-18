import React from 'react';

import { connect } from 'react-redux';
import { actionCreators } from './store'
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper, 
	Logo, 
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
} from './style';

const Header = (props) => {

		return (
			<HeaderWrapper>
				<Logo></Logo>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right">Aa</NavItem>
					<NavItem className="right">登录</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={props.focused}
							setTimeout={200}
							classNames="slide"
						>
							<NavSearch onFocus={props.handleInputFocused} onBlur={props.handleInputBlur} className={ props.focused ? 'focused':'' }></NavSearch>
						</CSSTransition>
						<i className={ props.focused ? 'focused iconfont':'iconfont' }>O</i>
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="writter">投稿</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}


const mapStateToProps = (state) => {
	return {
		focused: state.header.get('focused')
		//focused: state.get('header').get('focused')
		//focused: state.getIn(['header','focused'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocused(){
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
		
			dispatch(actionCreators.searchBlur());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);