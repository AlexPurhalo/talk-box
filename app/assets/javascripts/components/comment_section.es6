import Actions from '/actions';
import CommentStore from '/stores/comment_store';
import CommentList from '/components/comment_list';
import CommentForm from '/components/comment_form';

class CommentSection extends React.Component {
    static get childContextTypes() {
        return {
            store: React.PropTypes.object.isRequired,
            actions: React.PropTypes.func.isRequired
        }
    }

    getChildContext() {
        return {
            store: this.store,
            actions: this.actions
        }
    }

    constructor(props) {
        super();

        this.store = new CommentStore;
        this.actions = Actions;
        this.actions.setComments(JSON.parse(props.comments));
        console.log(props)
    }

    render() {
        return (
            <div>
                <CommentForm />
                <CommentList />
            </div>
        );
    }
}

export default CommentSection;

window.CommentSection = CommentSection;
