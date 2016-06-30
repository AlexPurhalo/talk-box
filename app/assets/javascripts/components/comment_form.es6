import Actions from '/actions';

class CommentForm extends React.Component {
    constructor () {
        super();
        this.defaultState = { body: '' };
        this.state = this.defaultState;
    }

    onFieldChange (event) {
        let prop = [];
        prop[event.target.name] = event.target.value
        this.setState(prop);
        console.log(prop);
    }

    submitComment (event) {
        event.preventDefault();
        Actions.addComment(this.state);
        console.log(this.state)
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