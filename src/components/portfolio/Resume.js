import React, { Component } from 'react'; 
import { Grid, Row } from 'react-bootstrap';

export class Resume extends Component {

    render() {
        return (
            <section id="resume" className="resume-section global-padding">
                <Grid>
                    <Row>
                        <h2 className="text-center">Resume</h2>
                        <p className="b-underline"></p>
                    </Row>
                    <Row className="global-margin">
                        <img className="img-responsive resume" width="85%" src="../img/portfolio/AndreBurke.jpg" alt="My Resume" />
                    </Row>
                </Grid>
            </section>
        );
    }
}