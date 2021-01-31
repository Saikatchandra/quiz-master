import React from "react";

class ques extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  clickButton = (index) => {
      this.props.optionSelect(index);
  };



  render() {
    return (
      <div>
        <div
          class="card mx-auto"
          style={{
            backgroundColor: "orange",
            marginTop: "5%",
            borderRadius: "35px",
          }}
        >
          <div class="card-body p-4">
            <h3 class="fs-3 fw-bold text-center text-white">
              {/* {this.props.data[0].question} */}
              {this.props.data.question}
            </h3>

            {this.props.data.option.map((item, index) => {
              return (
                <div class="text-center mb-2 mt-3" key={index}>
                  <button
                    class="btn btn-success w-100"
                    id="quesBtn"
                    onClick={() => this.clickButton(index)}
                   >
                    <h3 class="fs-3 fw-bold">{item}</h3>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ques;
