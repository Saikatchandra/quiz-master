import React from "react";
import Button from "react-bootstrap/Button";

class Answer extends React.Component {
  state = {};

  // printArray = () => {
  //   const obj = Object.values(this.props.location.state);
  //   obj.map((item) => {
  //     return (
  //       <div>{ item }</div>
  //     );
  //   })
  // }

  render() {
    console.log("Answer page ");
    console.log(this.props.location.state);


    // console.log("obj", obj);
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
                <h1 className="fw-bold">Answer sheet for choosen Topic</h1>
              </div>
            </div>
            <div class="container">
              <div class='row mb-2'>
                ({this.props.location.state[0].id})
                {this.props.location.state[0].question}
                <p><b>Answer:</b>  {this.props.location.state[0].answer}</p>
              </div>
              <div class='row mb-2'>
                ({this.props.location.state[1].id})
                {this.props.location.state[1].question}<br/>
                <p><b>Answer:</b> {this.props.location.state[1].answer}</p>
              </div>
              <div class='row mb-2'>
                ({this.props.location.state[2].id})
                {this.props.location.state[2].question}<br/>
                <p><b>Answer:</b> {this.props.location.state[2].answer}</p>
              </div>
              <div class='row mb-2'>
                ({this.props.location.state[3].id})
                {this.props.location.state[3].question}<br/>
                <p><b>Answer:</b> {this.props.location.state[3].answer}</p>
              </div>
              <div class='row mb-2'>
                ({this.props.location.state[4].id})
                {this.props.location.state[4].question}<br/>
                <p><b>Answer:</b> {this.props.location.state[4].answer}</p>
              </div>
              <div class='row mb-2'>
                ({this.props.location.state[5].id})
                {this.props.location.state[5].question}<br/>
                <p><b>Answer:</b> {this.props.location.state[5].answer}</p>
              </div>
              <div class='row mb-2'>
                ({this.props.location.state[6].id})
                {this.props.location.state[6].question}<br/>
                <p><b>Answer:</b> {this.props.location.state[6].answer}</p>
              </div>
              <div class='row mb-2'>
                ({this.props.location.state[7].id})
                {this.props.location.state[7].question}<br/>
                <p><b>Answer:</b> {this.props.location.state[7].answer}</p>
              </div>
              <div class='row mb-2'>
                ({this.props.location.state[8].id})
                {this.props.location.state[8].question}<br/>
                <p><b>Answer:</b> {this.props.location.state[8].answer}</p>
              </div>
              <div class='row mb-2'>
                ({this.props.location.state[9].id})
                {this.props.location.state[9].question}<br/>
                <p><b>Answer:</b> {this.props.location.state[9].answer}</p>
              </div>
              <div class='row mb-2'>
              <Button href="/" class=" mb-5" style={{float:"right"}}>back</Button>
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

export default Answer;
