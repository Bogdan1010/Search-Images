import React from 'react';
import ReactDOM from 'react-dom';
import ImageType from "./components/imagetype.jsx";
import ImageType2 from "./components/imagetype2.jsx";
import Orientation from "./components/orientation.jsx";
import Size from "./components/size.jsx";
import Category from "./components/category.jsx";
import Colors from "./components/colors.jsx";
import Gallery from "./components/gallery.jsx";
import Images from "./components/images.jsx";
import EditorsChoice from "./components/editorschoice.jsx";
import SafeSearch from "./components/safesearch.jsx";
import QSearch from "./components/qsearch.jsx";
import Order from "./components/order.jsx";
import NewSearch from "./components/newsearch.jsx";
import Update from "./components/update.jsx"


class App extends React.Component{
    state={
        q: "",
        image_type: "all",
        orientation: "all",
        category: "all",
        min_width: 0,
        min_height: 0,
        colors: "all",
        editors_choice: false,
        safesearch: true,
        order: "popular",
        page: 1,
        per_page: 199,
        results: [],
        class: "first",
        show: "hide",
        whatImg:{},
        showGallery: "hide"
    }
    
    searchAPI = (e) =>{
        let params = this.state;
        const key = "13132752-ce07e8cb46bfe3f8d92f90d89";
        let url = `https://pixabay.com/api/?key=${key}&q=${params.q}&image_type=${params.image_type}&orientation=${params.orientation}&category=${params.category}&min_width=${params.min_width}&min_height=${params.min_height}&colors=${params.colors}&editors_choice=${params.editors_choice}&safesearch=${params.safesearch}&order=${params.order}&page=${params.page}&per_page=${params.per_page}`;
        fetch (url).then( resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error ("Network error!")
        }).then( resp => {
            this.setState({
                results:resp.hits,
                class: "hide",
                show: "results"
            });
        } )
        .catch( err => {
            console.log("Erorr", err);
        })
    }

    imageTypeFn = (event) =>{
        this.setState({
            image_type: event.target.value
        });
    }

    qSearchFn = (event) =>{
        this.setState({
            q: event.target.value
        });
    }

    orientationFn = (event) =>{
        this.setState({
            orientation: event.target.value
        })
    }

    categoryFn = (event) =>{
        this.setState({
            category: event.target.value
        })
    }

    widthFn = (event) =>{
        this.setState({
            min_width: event.target.value
        })
    }
    heightFn = (event) =>{
        this.setState({
            min_height: event.target.value
        })
    }

    colorsFn = (event) =>{
        this.setState({
            colors: event.target.value
        })
    }

    editorsChoiceFn(){
        if (this.state.editors_choice == false){
            this.setState({
                editors_choice: true
            })
        } else {
            this.setState({
                editors_choice: false
            })
        }
    }

    safeSearchFn(){
        if (this,this.state.safesearch == true){
            this.setState({
                safesearch: false
            })
        } else {
            this.setState({
                safesearch: true
            })
        }
    }

    orderFn = (event) =>{
        this.setState({
            order: event.target.value
        })
        console.log("order", this.state.order)
    }
    
    whatImgFn=(imgsrc)=>{
        this.setState({
            whatImg: imgsrc,
            showGallery: "gallery",
            show: "hide"
        })
        console.log(imgsrc, "imgsrc");
        console.log(this.state.whatImg, "whatImg")
    }

    hideGalleryFn=(event)=>{
        this.setState({
            showGallery: "hide",
            show: "results"
        })
    }

    render(){
        let data = this.state;
            return(
                <>
                    <div className={this.state.class}>
                        <div className="firstText">
                            <p>Image Search</p>
                        </div>
                        <div className="firstSearch">
                            <div className="insideDiv">
                                <QSearch qsearch={data.q} done={this.qSearchFn} api={this.searchAPI}/>
                                <ImageType imageType={this.state.image_type} done={this.imageTypeFn}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.show}>
                        <div className="second">
                            <NewSearch qsearch={data.q} done={this.qSearchFn}/>
                            <ImageType2 imageType={this.state.image_type} done={this.imageTypeFn}/>
                            <Order order={data.order} done={this.orderFn}/>
                            <EditorsChoice editorsChoise={data.editors_choice} done={this.editorsChoiceFn.bind(this)}/>
                            <Orientation orientation={data.orientation} done={this.orientationFn}/>
                            <Category category={data.category} done={this.categoryFn}/>
                            <Size widthProp={data.min_width} heightProp={data.min_height} heightFunc={this.heightFn}
                            withhFunc={this.widthFn}/>
                            <Colors colors={data.colors} done={this.colorsFn}/>
                            <SafeSearch safeSearch={data.safesearch} done={this.safeSearchFn.bind(this)}/>
                            <div>
                                <Update done={this.searchAPI}/>
                            </div>
                        </div>
                        <div className="third">
                            <div id="images">
                                {this.state.results.map( el => 
                                    <Images imgsrc={el} done={this.whatImgFn}/>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={this.state.showGallery}>
                        <Gallery whatImg={this.state.whatImg} done={this.hideGalleryFn}/>
                    </div>
                    
                </>    
            )
        }
}


document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
       <App/>,
       document.getElementById('app')
   );
});