import React from 'react'
import CoverImage from '../images/cover.png'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                {/* <!-- Bootstrap CSS --> */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
                <link rel="stylesheet" href="style.css"/>
                <title>Hello, world!</title>
            </head>
            <body id="bg-color">

                <div id="bgColor">
                <div class="container" >
                <div>
                    <img class="mx-auto d-block" src={CoverImage} alt="" id="homeImg"/>
                    </div>


                    <div class="row">
                        <div class="col text-center">
                           <Link to={"/topics"} type="button" className="btn  btn-primary mb-2 w-25" id="myBtn" ><h1 className="fs-8 fw-bold">Start</h1></Link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center">
                            <Link to={"/instructions"} type="button" className="btn  btn-primary mb-2 w-25" id="myBtn" >
                                <h3 className="fw-bold">Instructions</h3>
                            </Link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center">
                            <Link to={"/credits"} type="button" className="btn  btn-primary w-25" id="myBtn" >
                                <h2 className="fw-bold">Credits</h2>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
            </body>

        </div>
    )
}
