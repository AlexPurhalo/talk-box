import Actions from '/actions';
import CommentStore from '/stores/comment_store';
import CommentList from '/components/comment_list';

class CommentSection extends React.Component {
    constructor() {
        super();

        this.store = new CommentStore;
    }

    render() {
        return (
            <CommentList store={this.store} />
        );
    }
}

export default CommentSection;

window.CommentSection = CommentSection;
window.Actions = Actions;