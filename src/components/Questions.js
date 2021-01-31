 import React from 'react'
 import Button from 'react-bootstrap/Button';
 import CoverImage from '../images/QM.png'


 export default function Questions() {
     return (
         <div>

            <head>
              <meta charset="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
              <link rel="stylesheet" href="style.css"/>
              <title>Credits</title>
            </head>
            <body id="bg-color">
              <div>

                  <div class="container-fluid">
                    <div class="row" style={{backgroundColor: "white"}}>
                        <div class="col-md-4">
                            <img src={CoverImage} alt="header" id="myImg" />
                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-4 ">
                        <Button href="/" type="button" className="btn  btn-primary mt-3 w-50" id="myBtn" style={{marginLeft: "42%",float: "right", borderRadius: "24px"}} >
                                <h3 className="fw-bold">Home</h3>
                        </Button>
                        </div>
                    </div>
                </div>
    <div class="container">
            <div class="row">
                <div class="col-md-3 text-center">
                    <button class="btn btn-success w-6" style={{borderRadius: "22px",marginTop:"177px"}}>
                        <h3 class="fs-3 fw-bold">Previous</h3>
                    </button>
                </div>

                <div class="col-md-6">
                    <div class="card mx-auto" style={{width: "23rem",backgroundColor: "orange", height: "20rem",marginTop: "5%",borderRadius: "35px"}}>
                        <div class="card-body p-4">

                          <h3 class="fs-3 fw-bold text-center text-white">Q1. What is Capital of usa?</h3>
                          <div class="text-center mb-2 mt-3" >
                            <p href="" class="btn btn-success" id="quesBtn">
                                <h3 class="fs-3 fw-bold">Option 1</h3>
                            </p>
                         </div>
                        <div class="text-center mb-2" >
                            <p  class="btn btn-success" id="quesBtn">
                                <h3 class="fs-3 fw-bold">Option 2</h3>
                            </p>
                         </div>
                         <div class="text-center mb-2" >
                            <p  class="btn btn-success" id="quesBtn">
                                <h3 class="fs-3 fw-bold">Option 3</h3>
                            </p>
                         </div>
                         <div class="text-center mb-2" >
                            <p class="btn btn-success" id="quesBtn">
                                <h3 class="fs-3 fw-bold">Option 4</h3>
                            </p>
                         </div>
                        </div>
                      </div>
                </div>
                <div class="col-md-3 text-center">
                    <h3 class="mt-2 fw-bold"> Time left: 10s</h3>
                    <button class="btn btn-success w-55" style={{borderRadius: "22px",marginTop:"135px"}}>
                        <h3 class="fs-3 fw-bold">Next</h3>
                    </button>
                </div>
            </div>

    </div>

              </div>

              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>


            </body>

         </div>
     )
 }
