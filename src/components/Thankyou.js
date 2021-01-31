import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Thankyou extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log(`thank you page data`);
    console.log(this.props.location.state.answer_data);
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
          <title>Thank you </title>
        </head>
        <body id="bg-color">
          <div>
            <div class="container-fluid">
              <div class="row text-center" style={{ backgroundColor: "white" }}>
                <h1 className="fw-bold">Thank you for playing</h1>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-3 text-center"></div>

                <div class="col-md-6">
                  <div
                    class="card mx-auto w-75 h-85 mt-5"
                    style={{ backgroundColor: "orange", borderRadius: "35px" }}
                  >
                    <div class="card-body p-4">
                      <h1 class="card-title text-center fw-bold">
                        Your Score {this.props.store_score}
                      </h1>

                      

                      <div class="text-center mb-2 mt-3">
                        <Button
                          href="/"
                          type="button"
                          class="btn btn-success w-100"
                          style={{
                            borderRadius: "20px",
                            backgroundColor: "#568856",
                          }}
                        >
                          <h1 class="fw-bold">Home</h1>
                        </Button>
                      </div>
                      <div class="text-center mb-2">
                        <Link
                          to={{
                            pathname: "/answer",
                            state: this.props.location.state.answer_data
                           }}
                          class="btn btn-success w-75"
                          style={{ borderRadius: "20px" }}
                        >
                          <h3 class="fw-bold">Check Answer</h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 text-center"></div>
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

export default connect(mapStateToProps)(Thankyou);

// export default Thankyou;
