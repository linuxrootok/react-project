import React, { Component } from 'react';

import { PeopleRight } from '../style';

class People extends Component {

	render() {
		return (
			<div>
				<PeopleRight>
					<p className="desc">具有影响力的人物</p>
					<div>
						<img src="https://avatars.githubusercontent.com/u/4009942?v=4" className="pic" />
						<p className="title">Vitalik Buterin</p>
					</div>
					<div>
						<a href="" className="linkIcon"><img className="mlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" /></a>
					</div>
				</PeopleRight>
			</div>
		)
	}
}

export default People;