import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Modal from './Components/modal';
import axios from 'axios';
export default class VegetableSection extends React.Component {
    state = {
        posts: [],
        show: false,
    }
    showModal = (post) => {
        this.setState({ show: true });
        document.getElementById('family').innerHTML = post.Family;
        document.getElementById('noun').innerHTML = post.CollectiveNoun;
        document.getElementById('image').src = post.ImageURLs.FullSize;
    }
    hideModal = () => {
        this.setState({ show: false });
    };
    componentDidMount() {
        axios.get(`http://styleguide.effectivedigital.com/interview/api/fruitveg`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            });
    }
    render() {
        return (
            <div>
                {this.state.posts.map(post =>
                    <div key={post.Id} className="columnClass">
                        <h4>{post.Title}</h4>
                        <img src={post.ImageURLs.Thumb} onClick={() => this.showModal(post)} />
                        <p><i>{post.Description}</i></p>
                    </div>
                )}
                <Modal show={this.state.show} handleClose={this.hideModal} customClassName="slidesNumber">
                    <div>
                        <img src="" id="image" height="325" width="auto" />

                        <label className="familyLabel" >Family -</label> <span id="family" className="spanFamily"> </span>
                        <label className="nounLabel">Genus -</label> <span id="noun" className="spanNoun"></span>
                    </div>


                </Modal>
            </div>
        );
    }
}