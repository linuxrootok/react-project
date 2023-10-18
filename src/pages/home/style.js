import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`
export const HomeLeft = styled.div`
	float: left;
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	.banner{
		width: 625px;
		height: 240px;
	}
`
export const HomeRight = styled.div`
	padding-top: 18px;
	float: right;
	width: 300px;

`
export const PeopleRight = styled.div`
	padding-bottom: 10px;
	border-bottom: 1px solid #dcdcdc;
	box-sizing: border-box;
	.desc {
		text-decoration: none;
		font-size: 18px;
		line-height: 17px;
		font-weight: bold;
		color: #333;
	}
`

export const PeopleRightDesc = styled.div`
	width: 270px;
	padding-bottom: 10px;
	.mlogo {
		display: block;
		width: 20px;
		height: 20px;
	}
	.title {
		text-decoration: none;
		font-size: 18px;
		line-height: 17px;
		font-weight: bold;
		color: #666;
	}
	.linkIcon {
		float: left;
		width: 30px;
		height: 30px;
	}
`	
export const PeopleRightPic = styled.div`
	overflow: hidden;
	padding-bottom: 10px;
	.pic {
		cursor: pointer;
		border-radius: 50%;
		padding-top: 12px;
		width: 60px;
		height: 60px;
	}

`
export const PeopleList = styled.div`
	width: 330px;
	overflow: hidden;
`
export const ActionRight = styled.div`
	overflow: hidden;
	padding-bottom: 15px;
	.pic {
		padding-top: 12px;
		display: block;
		width: 300px;
		height: 60px;
	}
`
//	border-bottom: 1px solid #dcdcdc;

export const ListItem = styled.div`
	padding: 12px 0;
	border-bottom: 1px solid #dcdcdc;
	overflow: hidden;
	.pic {
		display: block;
		width: 100px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.subject {
		text-decoration: none;
		font-size: 18px;
		line-height: 17px;
		font-weight: bold;
		margin-right: 10px;
		color: #333;
	}
	.content {
		font-size: 13px;
		line-height: 17px;
		color: #777;
		text-align: left;
	}

`
