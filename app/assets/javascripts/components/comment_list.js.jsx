var CommentList = React.createClass({
    componentDidMount: function() {
        Store.addChangeListener(this._onChange)
    },

    componentWillMount: function() {
        Store.removeChangeListener(this._onChange)
    },

    _onChange: function() {
        this.forceUpdate();
    },

    render: function() {
        // console.log("rendering");
        return (
            <div>
                {
                    Store.comments().map(function(comment) {
                        return (
                            <Comment key={comment.id} {... comment} />
                        )
                    })
                }
            </div>
        )
    }
});