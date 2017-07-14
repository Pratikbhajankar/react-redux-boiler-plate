import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {buttonClick} from './../action/simpleAction.js'
class SimpleComponent extends React.Component {

	constructor(props)
	{
		super(props);
		this.onLike = this.onLike.bind(this);
		this.onUnLike = this.onUnLike.bind(this);
	}

	onLike()
	{
		this.props.buttonClick(1);
	}

	onUnLike()
	{
		this.props.buttonClick(-1);
	}

	render()
	{
		let disabled = this.props.likeUnlike == 0;
		return (
			<div>
				<h4> Number of Likes to this project </h4>
				<h4 className="margin-top-10"> Like : <span className="red">
	                {this.props.likeUnlike ? this.props.likeUnlike : 0}
                </span>
					{disabled}
				</h4>

				<div className="margin-top-10">
					<button className="btn pull-left" onClick={this.onLike}>
						Like
					</button>
					<button className="btn pull-left" onClick={this.onUnLike}
					        disabled={disabled}>Unlike</button>
				</div>

			</div>
		);
	}

}
function mapStateToProps(state)
{
	return {
		likeUnlike: state.likeUnlike
	};
}

function matchDispatchToProps(dispatch)
{
	return bindActionCreators({buttonClick: buttonClick}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(SimpleComponent);