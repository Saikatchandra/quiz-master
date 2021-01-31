import React from "react";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import CoverImage from "../../images/QM.png";
import Ques from "./ques";
import jsData from "../../questions.json";

// import Countdown from "react-countdown";

import { score } from "../../actions";
import { connect } from "react-redux";

class sports extends React.Component {
  constructor() {
    super();
    this.compare = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
    };

    this.data = jsData.topics[0].sports;

    const values = Object.values(jsData.topics[0].sports);
    const randomValue = values[parseInt(Math.random() * values.length)];

    console.log("sports random", randomValue);

    this.state = {
      count: 10,
      click: 1,
      sportsSingleData: this.data[0],
      randomValue,
      score: 0,
      selected_option_index: null,
    };
  }

  componentDidMount() {
    // this.setInterval = setInterval(() => {
    //   this.setState({ count: this.state.count - 1 });
    // }, 1000);
    this.onTimer();
  }

  onTimer = () => {
    setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
      // console.log(`count value : ${this.state.count}`)
      if (this.state.count < 0) {
        this.setState({
          count: 10,
        });
        this.increment();
      }
    }, 1000);
  };

  increment = () => {
    // const { history } = this.props;
    // console.log(this.data)
    this.setState({ click: this.state.click + 1 });
    this.setState({
      count: 10,
    });

    const values = Object.values(jsData.topics[0].sports);
    const randomValue = values[parseInt(Math.random() * values.length)];
    console.log("sports random", randomValue);

    this.setState({ sportsSingleData: randomValue });

    if (
      this.compare[this.state.selected_option_index] ===
      this.state.sportsSingleData.answer
    ) {
      // this.state.score = this.state.score + 10;
    this.setState({ score: this.state.score + 10 })
      this.props.score(this.state.score);
      console.log(`redux score value : ${this.props.store_score}`);

      console.log(this.state.score);
    } else {
      console.log(this.state.score);
    }
    this.setState({ selected_option_index: null });

    // this.setState({ sportsSingleData: randomValue });
    if (this.state.click > 9) {
      // history.push("/thankyou");
      console.log(this.data)
      this.props.history.push({
        pathname: "/thankyou",
        // search: '?query=abc',
        state: {
          answer_data: this.data
        }
      });
    }
    // console.log(this.state.sportsSingleData);
  };

  // onOptionSelect = (selectedItem) => {
  //   this.state.option_selected = selectedItem;
  //   console.log(`index: ${selectedItem}`);

  //   if (this.compare[selectedItem] == this.state.sportsSingleData.answer) {
  //     // console.log(true)
  //     this.state.score = this.state.score + 10;

  //     // this method is for redux action creator
  //     this.props.score(this.state.score);

  //     console.log(this.state.score);
  //   } else {
  //     console.log(this.state.score);
  //   }
  // };

  onOptionSelect = (item_index) => {
    this.setState({ selected_option_index: item_index });
    console.log(`selected item index no ${item_index}`);
  };

  render() {
    // Random component
    // const Completionist = () => <span>Time is Up</span>;

    // Renderer callback with condition
    // const renderer = ({ seconds, completed }) => {
    //   if (completed) {
    //     completed = false;
    //     this.increment();
    //     // Render a completed state
    //     return <Completionist />;
    //   } else {
    //     // console.log("seconds", seconds);
    //     if (seconds === 1) {
    //       this.increment();
    //       return <Completionist />;
    //     }
    //     // Render a countdown
    //     return <span>{seconds - 1}</span>;
    //   }
    // };
    const { count } = this.state;

    return (
      <div>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="style.css" />
          <title>Credits</title>
        </head>
        <body id="bg-color">
          <div>
            <div class="container-fluid">
              <div class="row" style={{ backgroundColor: "white" }}>
                <div class="col-md-4">
                  <img src={CoverImage} alt="header" id="myImg" />
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-4 ">
                  <Button
                    href="/"
                    type="button"
                    className="btn  btn-primary mt-3 w-50"
                    id="myBtn"
                    style={{
                      marginLeft: "42%",
                      float: "right",
                      borderRadius: "24px",
                    }}
                  >
                    <h3 className="fw-bold">Home</h3>
                  </Button>
                </div>
              </div>
            </div>
            <ProgressBar now={this.state.click * 10} />
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-3 text-center">
                  {/* <button
                    class="btn btn-success w-6"
                    style={{ borderRadius: "22px", marginTop: "177px" }}
                    onClick={this.decrement}
                  >
                    <h3 class="fs-3 fw-bold">Previous</h3>
                  </button> */}
                </div>

                <div class="col-md-6">
                  <Ques
                    data={this.state.sportsSingleData}
                    optionSelect={this.onOptionSelect}
                  />
                </div>
                <div class="col-md-3 text-center">
                  <h3 class="mt-2 fw-bold">
                    {" "}
                    Time left:
                    {/* <Countdown
                      date={Date.now() + 11000}
                      renderer={renderer}
                      autoStart
                    /> */}
                    {count}
                    s{" "}
                   
                  </h3>
                  <button
                    class="btn btn-success w-55"
                    style={{ borderRadius: "22px", marginTop: "135px" }}
                    onClick={this.increment}
                  >
                    <h3 class="fs-3 fw-bold">Next</h3>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossorigin="anonymous"
          ></script>
        </body>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { store_score: state.updated_score };
};

export default connect(mapStateToProps, { score })(sports);

// export default sports;