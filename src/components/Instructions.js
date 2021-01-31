 import React from 'react'
 import Button from 'react-bootstrap/Button';
 import CoverImage from '../images/QM.png'

 export default function Instructions() {
     return (
         <div>

            <head>

                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>


                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
                <link rel="stylesheet" href="style.css"/>
                <title>Instructions</title>
            </head>
            <body id="bg-color">
            <div>
                <div class="container-fluid">
                    <div class="row" style={{backgroundColor: "white"}}>
                        <div class="col-md-4">
                            <img src={CoverImage} alt="header " id="myImg" />
                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <Button href="/" type="button" className="btn  btn-primary mt-3 w-50" id="myBtn" style={{marginLeft: "42%",float: "right", borderRadius: "24px"}} >
                                <h3 className="fw-bold">Home</h3>
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row justify-content-xl-center">
                        <h1 class="fw-bold text-white text-center mt-5"> Instructions</h1>
                    </div>
                    <div class="row">
                    <p class="text-white fw-bold">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 .</p>
                    </div>
                </div>

                </div>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>


            </body>

         </div>
     )
 }
