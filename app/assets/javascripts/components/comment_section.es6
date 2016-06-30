import Actions from '/actions';
import CommentStore from '/stores/comment_store';
import CommentList from '/components/comment_list';

class CommentSection extends React.Component {
    static get childContextTypes() {
        return {
            store: React.PropTypes.object.isRequired
        }
    }

    getChildContext() {
        return {
            store: this.store
        }
    }

    constructor() {
        super();

        this.store = new CommentStore;
    }

    render() {
        return (
            <CommentList />
        );
    }
}

export default CommentSection;

window.CommentSection = CommentSection;
window.Actions = Actions;