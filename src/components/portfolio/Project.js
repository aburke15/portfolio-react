import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

const local = 'http://localhost:5302/api/repos';
// const api = 'http://api.aburke.io/api/repos';

const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
        compact: true
    },
    {
        name: 'Created Date',
        selector: 'createdAt',
        sortable: false
    },
    {
        name: 'Description',
        selector: 'description',
        sortable: false,
        wrap: true
    },
    {
        name: 'Url',
        selector: 'htmlUrl',
        sortable: false,
        wrap: true,
        cell: row => <a target="_blank" rel="noopener noreferrer" href={row.htmlUrl}>View in GitHub</a>
    },
    {
        name: 'Language',
        selector: 'language',
        sortable: true,
        compact: true
    }
];

export class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            repos: []
        };
    }

    componentDidMount() {
        fetch(local)
            .then(res => res.json())
            .then(
                (repos) => {
                    this.setState({
                        isLoaded: true,
                        repos: repos
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, repos } = this.state;
        console.log(repos);
        return (
            <section id="projects" className="projects-section global-padding">
                <Grid>
                    <Row>
                        <h2 className="text-center">Projects</h2>
                         <p className="b-underline"></p>
                    </Row>
                    <Row>
                        <DataTable responsive columns={columns} data={repos} />
                    </Row>
                </Grid>
                
            </section>
        );
        // const { error, isLoaded, repos } = this.state;
        // if (error) {
        //     return (
        //         <section id="projects" className="projects-section global-padding">
        //             <Grid>
        //                 <Row>
        //                     <h2 className="text-center">Projects</h2>
        //                     <p className="b-underline"></p>
        //                 </Row>
        //                 <Row className="global-margin">
        //                     <div className="text-center text-danger">Error: {error.message}</div>
        //                 </Row>
        //             </Grid>
        //         </section>
        //     );
        // } else if (!isLoaded) {
        //     return <div className="text-center">Loading...</div>;
        // } else {
        //     const secondColumnStart = Math.floor(repos.length / 2);
        //     return (
        //         <section id="projects" className="projects-section global-padding">
        //             <Grid>
        //                 <Row>
        //                     <h2 className="text-center">Projects</h2>
        //                     <p className="b-underline"></p>
        //                 </Row>
        //                 <Row className="global-margin">
        //                     <Col md={6}>
        //                         {repos.slice(0, secondColumnStart).map(repo => (
        //                             <Jumbotron key={repo.name}>
        //                                 <h3>{repo.name.toUpperCase()}</h3>
        //                                 <hr />
        //                                 <ListGroup>
        //                                     <ListGroupItem>Desc:&nbsp;{repo.description}</ListGroupItem>
        //                                     <ListGroupItem>Language:&nbsp;{repo.language}</ListGroupItem>
        //                                     <ListGroupItem>Forks:&nbsp;{repo.forks}</ListGroupItem>
        //                                     <ListGroupItem><a target="_blank" rel="noopener noreferrer" href={repo.htmlUrl}>View in GitHub</a></ListGroupItem>
        //                                     <ListGroupItem>Created:&nbsp;{repo.createdAt}</ListGroupItem>
        //                                 </ListGroup>
        //                             </Jumbotron>
        //                         ))}
        //                     </Col>
        //                     <Col md={6}>
        //                         {repos.slice(secondColumnStart).map(repo => (
        //                             <Jumbotron key={repo.name}>
        //                                 <h3>{repo.name.toUpperCase()}</h3>
        //                                 <hr />
        //                                 <ListGroup>
        //                                     <ListGroupItem>Desc:&nbsp;{repo.description}</ListGroupItem>
        //                                     <ListGroupItem>Language:&nbsp;{repo.language}</ListGroupItem>
        //                                     <ListGroupItem>Forks:&nbsp;{repo.forks}</ListGroupItem>
        //                                     <ListGroupItem><a target="_blank" rel="noopener noreferrer" href={repo.htmlUrl}>View in GitHub</a></ListGroupItem>
        //                                     <ListGroupItem>Created:&nbsp;{repo.createdAt}</ListGroupItem>
        //                                 </ListGroup>
        //                             </Jumbotron>
        //                         ))}
        //                     </Col>
        //                 </Row>
        //             </Grid>
        //         </section>
        //     );
        
    }
}