import React, { Component } from 'react';

import { PeopleRight, PeopleList, PeopleRightDesc, PeopleRightPic } from '../style';

class People extends Component {

	render() {
		return (
			<div>
				<PeopleRight>
					<p className="desc">具有影响力的人物</p>
					<PeopleList>
						<PeopleRightPic>
							<img src="https://avatars.githubusercontent.com/u/4009942?v=4" className="pic" alt="here" />
							<img src="https://avatars.githubusercontent.com/u/4009942?v=4" className="pic" alt="here" />
							<img src="https://avatars.githubusercontent.com/u/4009942?v=4" className="pic" alt="here" />
							<img src="https://avatars.githubusercontent.com/u/4009942?v=4" className="pic" alt="here" />
							<img src="https://avatars.githubusercontent.com/u/4009942?v=4" className="pic" alt="here" />
						</PeopleRightPic>

						<PeopleRightDesc>
							<p className="title">Vitalik Buterin</p>
							<a href="/1" className="linkIcon"><img className="mlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" /></a>
							<a href="/2" className="linkIcon"><img className="mlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" /></a>

						</PeopleRightDesc>
					</PeopleList>

				</PeopleRight>
			</div>
		)
	}
}

export default People;