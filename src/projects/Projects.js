import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import './Projects.css';

export class Projects extends React.Component {
    render() {
        return (
            <Grid>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
                </Col>
                <Col xs={6} md={4}>Project2</Col>
                <Col xs={6} md={4}>Project3</Col>
              </Row>
              <Row className="show-grid">
                <Col xs={6} md={4}>Project4</Col>
                <Col xs={6} md={4}>Project5</Col>
                <Col xs={6} md={4}>Project6</Col>
              </Row>
            </Grid>
        )
    }
}

export default Projects;
