import React from 'react';
import {connect} from 'react-redux';
import {createPost, showAlert} from '../redux/actions';

class PostForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title:''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();

        const {title} = this.state;
        const {createPost, showAlert} = this.props;

        if (!title.trim()) {
            return showAlert('Введите текст в поле заметки');
        }

        const newPost = {
            title,
            id: Date.now().toString()
        };
        this.setState({
            ...this.state,
            title:''
        });

        createPost(newPost);
    };

    changeHandler = (e) => {
        e.persist();
        this.setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    render() {

        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Password</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           value={this.state.title}
                           name="title"
                           onChange={this.changeHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Create post</button>
            </form>
        )
    }
}

export default connect(null, {createPost, showAlert})(PostForm);
