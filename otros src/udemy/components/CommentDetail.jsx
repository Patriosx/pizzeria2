import faker from "faker";

const CommentDetail = (props) => {
	const images = props.photos;
	const infoCard = props.data;
	return (
		<div className="ui container comments">
			<div className="comment">
				<a href="/" className="avatar">
					<img src={images.avatar()} alt="avatar" />
				</a>
				<div className="content">
					<a href="" className="author">
						{props.name}
					</a>
					<div className="metadata">
						<span className="date">Today at 10:00PM</span>
					</div>
					<div className="text">
						<p>{infoCard.posts[0].paragraph}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentDetail;
