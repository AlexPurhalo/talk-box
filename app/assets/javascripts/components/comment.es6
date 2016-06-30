class Comment extends React.Component {
    propTypes: {
            author: React.PropTypes.string,
            body: React.PropTypes.string
        };

    render () {
        return (
            <div>
                <p>{this.props.author}</p>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

export default Comment;