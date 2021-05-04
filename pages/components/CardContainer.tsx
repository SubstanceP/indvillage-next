import axios from 'axios'
import moment from 'moment'
import React from 'react'
import { Button } from '@material-ui/core'
import Card from './Card'

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
                    <div className="container mission">
                        <h2>Independence Village</h2>
                        <p>Now, more than ever, upholding top notch senior living standards is crucial for both clients and their families, for piece of mind in the midst of such uncertain times.  Our communities implemented early safeguards to ensure our healthy environment remained that way, and our exceptional staff and management have done the impossible: to date our family of communities remain entirely <em>Covid free</em>. It’s essential to have experienced leadership facilitate a safe atmosphere in which clients not only feel comfortable, they feel at home</p>
                        <p>Independence Village and seniors are a match made in heaven! After 35 years of meeting their needs, exceeding their expectations, and becoming, arguably, the most trusted name in senior living, we think there is much to celebrate. Fresh interiors, bright, inspiring colors, and modern updates are some of the changes taking place, but what won’t be changing is our family’s commitment to you and your family – that’s carved in stone.
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
