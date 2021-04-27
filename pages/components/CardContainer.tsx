import axios from 'axios'
import moment from 'moment'
import React from 'react'
import { Button } from '@material-ui/core'
import { Card } from './Card'

// TODO: Fix memory leak problem
// Typing
interface CardContainerProps {};
interface CardContainerState {
    postsUrl: string
    queryOptions: {
        per_page: number,
        page: number,
        _embed: boolean
    }
    posts: any[]
}

export default class CardContainer extends React.Component<CardContainerProps, CardContainerState> {
    state = {
        postsUrl: "http://indvillage.com/wp-json/wp/v2/posts",
        queryOptions: {
            per_page: 6,
            page: 1,
            _embed: true
        },
        posts: []
    }

    // Get recent posts from wp
    getRecentMessages() {
        axios
            .get(this.state.postsUrl, { params: this.state.queryOptions })
            .then(response => {
                this.setState({
                    postsUrl: this.state.postsUrl,
                    queryOptions: this.state.queryOptions,
                    posts: response.data
                })
                console.log("Posts retrieved!");    
        })//document.getElementById("test").id = "testing";
        .catch(error => {
            console.log(error);
        });
    }

    getPostDate(date) {
        return moment(date).format("111");
    }
    
    componentDidMount() {
        this.getRecentMessages();
    }
  
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="container" style={{"lineHeight":"1.76rem"}}>
                        <h2>Independence Village</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                </div>  
                <div className="container">
                    <div className="row">
                        {this.state.posts.map((post, index) => <Card key={index} post={post} id={"post" + index}/>)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
