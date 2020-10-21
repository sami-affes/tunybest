import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trailer: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/video")
      .then((res) => {
        this.setState({
          trailer: res.data,
        });
      })
      .catch((err) => console.log(err, "errr"));
  }
  render() {
    const trailerVideos = this.state.trailer.map((videoTrailer) => (
      <div key={videoTrailer.id}>
        <iframe width="640" height="480" src={videoTrailer.urlTrailor}></iframe>
        <br></br>
        {videoTrailer.name}
      </div>
    ));
    return <div>{trailerVideos}</div>;
  }
}

export default Home;
