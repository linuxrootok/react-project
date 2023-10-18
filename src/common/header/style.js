import styled, { injectGlobal } from 'styled-components'
import logoPNG from '../../static/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 57px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
	href: '/',
})`
  position: absolute;
  top: 0;
  left: 0;

  display: block;
  width: 100px;
  height: 57px;
  background: url(${logoPNG});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.writter{
    color: #fff;
    background: #ec6149;
  }
  &.reg{
    color: #ec6149;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 56px;
`;

export const NavItem = styled.div`
  line-height: 57px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
  	float: left;
  }
  &.right {
  	float: right;
  	color: #969696;
  }
  &.active {
  	color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative; 
  float: left;

  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    background: green;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'	
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  margin-left: 20px;
  color: #777;
  padding: 0 35px 0 20px;
  &::placeholder{
    font-size: 10px;
    color: #999; 
  }
  font-size: 14px;
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;


