(this["webpackJsonprancid-tomatillos"]=this["webpackJsonprancid-tomatillos"]||[]).push([[0],{40:function(e,t,i){},41:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){},73:function(e,t,i){},74:function(e,t,i){},75:function(e,t,i){},76:function(e,t,i){},77:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(1),s=i(19),c=i.n(s),r=(i(40),i(9)),o=i(10),l=i(12),u=i(11),d=i(8),m=(i(41),function(e){var t=e.poster,i=e.title,a=e.rating,s=e.id;return Object(n.jsxs)("section",{className:"thumbnail","data-testid":"individual-thumbnail",children:[Object(n.jsx)(d.b,{to:"/movie/".concat(s),children:Object(n.jsx)("img",{alt:"movie-poster-".concat(s),className:"movie-poster-image",src:t})}),Object(n.jsxs)("div",{className:"thumbnail-display-info",children:[Object(n.jsx)("h3",{className:"thumbnail-text",children:i}),Object(n.jsx)("p",{className:"thumbnail-text",children:Object(n.jsxs)("i",{children:["\u2b50 Avg Rating: ",a.toFixed(0)]})})]})]},"thumbnail-".concat(i))}),h=(i(47),function(e){var t=e.movies,i=e.displayMovie,a=t.map((function(e){return Object(n.jsx)(m,{poster:e.poster_path,backdrop:e.backdrop_path,title:e.title,rating:e.average_rating,releaseDate:e.release_date,id:e.id,displayMovie:i},e.id)}));return Object(n.jsx)("section",{className:"thumbnail-container","data-testid":"thumbnail-container",children:a})}),j=(i(48),function(e){var t=e.selectedMovie,i=e.displayHome;return Object(n.jsx)("header",{className:"header",style:{background:"url(".concat(t?t.backdrop_path:"https://i.imgur.com/l2Km3g7.jpg",")")},children:Object(n.jsx)(d.b,{to:"/",children:Object(n.jsx)("button",{className:"header-button",onClick:function(){return i()},disabled:!t,children:Object(n.jsxs)("h1",{className:"header-text","data-testid":"header-button",children:["RANCID",Object(n.jsx)("br",{}),"TOMATILLOS"]})})})})}),b=function(e){return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(e)).then((function(e){return e.json()}))},v=(i(49),i(32)),p=i.n(v),x=i(33),O=(i(72),i(73),function(e){var t=e.videoData.map((function(e){return Object(n.jsx)("div",{className:"youtube-video",children:Object(n.jsx)(p.a,{videokey:e.key,width:"60vw",playing:!1,url:"https://www.youtube.com/embed/".concat(e.key),"data-testid":"react-player"},e.id)},e.id)}));return Object(n.jsx)("section",{className:"videos-section","data-testid":"videos-section",children:Object(n.jsx)(x.Carousel,{renderThumbs:function(e){return e.map((function(e){return Object(n.jsx)("img",{src:"https://img.youtube.com/vi/".concat(e.props.children.props.videokey,"/default.jpg"),alt:"youtube-thumbnail-".concat(e.key)},e.key)}))},children:t})})}),f=function(e){Object(l.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).componentDidMount=function(){b(e.props.id).then((function(t){e.setState({movie:t.movie}),e.findVideos(),e.props.selectMovie(e.state.movie)})).catch((function(t){return e.setState({error:t.message})}))},e.findVideos=function(){var t;(t=e.state.movie.id,fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(t,"/videos")).then((function(e){return e.json()}))).then((function(t){return e.setState({videos:t.videos})})).catch((function(t){return e.setState({error:t.message})}))},e.state={movie:null,videos:[],error:""},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this;if(this.state.movie){var t=this.state.movie.genres.map((function(e){return Object(n.jsx)("li",{children:e},e)})),i=function(e,t){return e>0&&Object(n.jsxs)("p",{className:"detail-line",children:[Object(n.jsxs)("b",{children:[t,":"]})," $",new Intl.NumberFormat("en-US").format(e)]})};return Object(n.jsxs)("section",{className:"movie-section","data-testid":"movie-section",children:[Object(n.jsxs)("article",{className:"movie-info",children:[Object(n.jsx)("img",{src:this.state.movie.poster_path,alt:"movie-poster",className:"movie-poster"}),Object(n.jsxs)("div",{className:"movie-text",children:[Object(n.jsx)("h2",{className:"movie-title",children:this.state.movie.title}),this.state.movie.tagline&&Object(n.jsx)("h3",{children:this.state.movie.tagline}),Object(n.jsx)("p",{children:this.state.movie.overview})]})]}),Object(n.jsxs)("section",{className:"details",children:[Object(n.jsxs)("article",{className:"more-info",children:[Object(n.jsxs)("p",{className:"detail-line",children:[Object(n.jsx)("b",{children:"Average Rating:"})," ",this.state.movie.average_rating.toFixed(1)]}),Object(n.jsxs)("p",{className:"detail-line",children:[Object(n.jsx)("b",{children:"Release Date:"})," ",new Date(this.state.movie.release_date).toDateString()]}),Object(n.jsxs)("p",{className:"detail-line",children:[Object(n.jsx)("b",{children:"Runtime:"})," ",this.state.movie.runtime," minutes"]}),i(this.state.movie.budget,"Budget"),i(this.state.movie.revenue,"Revenue"),t&&Object(n.jsxs)("section",{children:[Object(n.jsx)("p",{className:"detail-line",children:Object(n.jsx)("b",{children:"Genres:"})}),Object(n.jsx)("ul",{children:t})]}),Object(n.jsx)(d.b,{to:"/",children:Object(n.jsx)("button",{onClick:function(){return e.props.displayHome()},className:"back-button",children:"Back to Main Page"})})]}),Object(n.jsx)("div",{children:this.state.videos&&Object(n.jsx)(O,{videoData:this.state.videos},this.state.movie.id)})]})]})}return Object(n.jsx)("h3",{children:"Loading..."})}}]),i}(a.Component),g=(i(74),function(e){Object(l.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).handleChange=function(t){e.setState({input:t.target.value}),e.props.updateText(t.target.value)},e.state={input:""},e}return Object(o.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("form",{className:"search-container",children:[Object(n.jsx)("label",{htmlFor:"search-bar"}),Object(n.jsx)("input",{type:"text",name:"search-bar",className:"search-bar",value:this.state.input,onChange:this.handleChange,placeholder:"Search by movie title"})]})}}]),i}(a.Component)),y=i(34),R=(i(75),function(e){Object(l.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).handleChange=function(t){e.setState(Object(y.a)({},t.target.name,parseInt(t.target.value)),(function(){e.props.updateRating(e.state.minRating,e.state.maxRating)}))},e.state={minRating:0,maxRating:10},e}return Object(o.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("section",{className:"rating-filter",children:[Object(n.jsx)("h3",{className:"filter-heading",children:"FILTER BY AVERAGE RATING:"}),Object(n.jsxs)("form",{className:"rating-filter-form",children:[Object(n.jsx)("label",{htmlFor:"minRating",children:"Minimum Rating: "}),Object(n.jsx)("input",{type:"number",name:"minRating",value:this.state.minRating,onChange:this.handleChange,min:"0",max:this.state.maxRating,placeholder:"min"}),Object(n.jsx)("label",{htmlFor:"maxRating",children:"Maximum Rating: "}),Object(n.jsx)("input",{type:"number",name:"maxRating",value:this.state.maxRating,onChange:this.handleChange,min:this.state.minRating,max:"10",placeholder:"max"})]})]})}}]),i}(a.Component)),N=(i(76),i(3)),k=function(e){Object(l.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).componentDidMount=function(){fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.movies})})).catch((function(t){return e.setState({error:t.message})}))},e.selectMovie=function(t){e.setState({selectedMovie:t})},e.displayHome=function(){return window.scrollTo(0,0),e.setState({selectedMovie:null,input:""})},e.displayMovie=function(t){b(t).then((function(t){e.setState({selectedMovie:t.movie}),e.findVideos()})).catch((function(t){return e.setState({error:t.message})}))},e.updateText=function(t){e.setState({input:t})},e.updateRating=function(t,i){e.setState({minRating:t,maxRating:i})},e.showRatingFilter=function(){return Object(n.jsx)(R,{updateRating:e.updateRating})},e.state={movies:[],input:"",minRating:0,maxRating:10,selectedMovie:null,error:""},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("main",{className:"App",children:[Object(n.jsx)(j,{selectedMovie:this.state.selectedMovie,displayHome:this.displayHome}),Object(n.jsxs)(N.c,{children:[Object(n.jsx)(N.a,{exact:!0,path:"/movie/:id",render:function(t){var i=t.match;return Object(n.jsx)(f,{id:i.params.id,displayHome:e.displayHome,selectMovie:e.selectMovie},i.params.id)}}),Object(n.jsx)(N.a,{path:"/",render:function(){return Object(n.jsxs)("section",{children:[Object(n.jsxs)("section",{className:"search-area",style:{backgroundColor:"hsl(360, 0%, 13%)"},children:[Object(n.jsx)(g,{updateText:e.updateText}),Object(n.jsx)(R,{updateRating:e.updateRating})]}),Object(n.jsx)(h,{movies:e.filteredMovies,displayMovie:e.displayMovie})]})}})]})]})}},{key:"filteredMovies",get:function(){var e=this.state.input.toLowerCase().trim(),t=this.state.minRating,i=this.state.maxRating;return this.state.movies.filter((function(e){return e.average_rating.toFixed(0)>=t&&e.average_rating.toFixed(0)<=i})).filter((function(t){return t.title.toLowerCase().includes(e)}))}}]),i}(a.Component),M=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,78)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),s(e),c(e)}))},C=Object(n.jsx)(d.a,{basename:"/rancid-tomatillos",children:Object(n.jsx)(k,{})});c.a.render(C,document.getElementById("root")),M()}},[[77,1,2]]]);
//# sourceMappingURL=main.225fa74e.chunk.js.map