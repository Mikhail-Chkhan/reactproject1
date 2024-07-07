import React, {Component} from 'react';
import IPost from "../../models/IPosts";

class PostComponent extends Component<IPost> {

    componentDidMount() {}
    render() {
        const { id, title, body, tags} = this.props;
        return (
            <div className={"divPost"}><h2>{title}</h2> <p>{body}</p> </div>
        );
    }
}

export default PostComponent;