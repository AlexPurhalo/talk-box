// 1. Create first component named "Comment"
var Comment = React.createClass({
// 2. Declare properties that we expect
    propTypes: {
        author: React.PropTypes.string,
        body: React.PropTypes.string
    },
// 3. Render JSX with properties from view file
    render: function() {
        return (
            <div>
                <p>{this.props.author}</p>
                <p>{this.props.body}</p>
            </div>
        );
    }

});