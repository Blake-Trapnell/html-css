import React from "react"
import "./demonstration.css"

export default function Demonstration() {

    return (
        <div className="Demon">
            <article>
                <h1>Demonstration</h1>
                <h2>This is a demonstration of all the html and css compentancies</h2>
            </article>
            <section>
                <h1>This is a section tag</h1>
                <h1>it allows us to organize and defines sections in a documnet <p></p> such as chapters, headers, and footers</h1>
            </section>
            <div id="box" className="box_model">

                <h4> <span style={{ color: "yellow" }}>box</span>  <p></p> Model</h4>
            </div>
            <div className="float_display">
                <div className="float">
                    <h4>float</h4>
                </div>
                <div className="display">
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                    </ul>
                    <div className="Flexbox">
                        <div className="Align_Justify"></div>
                    </div>

                </div>
            <script> Script Contents... </script>
            </div>
            <div className="font">
                <h4>Font</h4>
            </div>
            <div id="background_img">
                <h1>Position</h1>
            </div>
            <div className="Selectors">
                <div className="Selectors_second">
                    <h1>Selectors</h1>
                </div>
                <h1>Second </h1>
            </div>
            <footer>
                <img src="https://cdn4.iconfinder.com/data/icons/like-18/32/52-01-512.png" alt="thumbs up" />
                <div>
                    <link rel="stylesheet" href="http://www.acesdungeoncreator.com/" />
                    <h1>thumbs up</h1>
                </div>
            </footer>
        </div>
    )
}