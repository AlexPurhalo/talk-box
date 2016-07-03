class CommentForm extends React.Component {
    static get contextTypes() {
        return {
            actions: React.PropTypes.func.isRequired
        }
    }

    constructor () {
        super();
        this.defaultState = { body: '' };
        this.state = this.defaultState;
    }

    onFieldChange (event) {
        let prop = [];
        prop[event.target.name] = event.target.value
        this.setState(prop);
    }

    submitComment (event) {
        event.preventDefault();
        this.context.actions.addComment(this.state);
        this.setState(this.defaultState);
    }

    render () {
        return (
            <form>
                <input
                    type="text"
                    name="body"
                    value={this.state.body}
                    onChange={this.onFieldChange.bind(this)} />
                <button
                    type="submit"
                    onClick={this.submitComment.bind(this)} >
                    Submit
                </button>
            </form>
            )
    }
}

export default CommentForm;