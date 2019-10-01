import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";

const maxLength = maxLengthCreator(10);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    let AddPost = (value) => {
        props.addPost(value.addPost);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                  <AddPostsReduxForm onSubmit={AddPost}/>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const AddPostsForm = (props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'addPost'}  component={Textarea}
               placeholder={'New message'}  validate={[requiredField, maxLength]}/>
      </div>
      <div><button>Add Post</button></div>
    </form>
  )
};

const AddPostsReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddPostsForm);

export default MyPosts;