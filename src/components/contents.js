import axios, { Axios } from 'axios';
import React, {Component} from 'react';

class Contents extends Component{
/*
    constructor(){
        super();
        this.state={
            Name: '',
            Network:'',
            Image_thumbnail_path:''
        }
    }

    componentDidMount()
    {
      fetch('https://www.episodate.com/api/most-popular?page=1')
      .then((response) => response.json())
      .then((findresponse)=>{
        console.log(findresponse.total)
        this.setState({
          total:findresponse.total,
          Name: findresponse.state.Name,
          Network: findresponse.state.Network,
          Image_thumbnail_path:findresponse.state.Image_thumbnail_path
        })
      })
    }
    */
    render(){
        return(
            <div>
                <h1>Welcome to the TellyBox</h1>
                <hr></hr>
                <h4>Here you will find the top rated TV Show</h4>
                <p>You can delete what show you think dont deserve to be in the top 10 and even add the shows you think should be in the top 10</p>
                <hr></hr>
                
                <div class='slideShow'>
                    <div class='wrapper'>
                        <img src='https://www.independent.ie/entertainment/tv-radio/85431/29611555.ece/AUTOCROP/w1240h700/FEA_20130926_ENT_032_29054046_I1.JPG' width="300" height="300"></img>
                        <img src='https://cdn.wionews.com/sites/default/files/styles/story_page/public/2018/12/04/76764-new-37.jpg'  width="300" height="300"></img>
                        <img src='https://flxt.tmsimg.com/assets/p8630071_b_h8_bc.jpg'  width="300" height="300"></img>
                        <img src='https://upload.wikimedia.org/wikipedia/en/3/3f/House_of_Cards_title_card.png'  width="300" height="300"></img> 
                        <img src='https://m.media-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg'  width="300" height="300"></img>
                        <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/game-of-thrones-illustration-sean-longmore-1598631176.jpeg' width="300" height="300"></img> 
                        <img src='https://flxt.tmsimg.com/assets/p8952681_b_v13_ab.jpg'  width="300" height="300"></img>
                        <img src='https://flxt.tmsimg.com/assets/p185124_b_v9_aj.jpg'  width="300" height="300"></img>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Contents;