import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, Button, Card, Segment, Input, Loader } from 'semantic-ui-react';

class Login extends Component {
    render() {
        const styles = {
            formLogin: {
                position: 'relative',
                top: '15vh',
            },
            button: {
                backgroundColor: "#ff5a60",
                color: 'white'
            },
            segment: {
                backgroundColor: '#ff5a60',
            },
            logo: {
                width: '100%', // Điều chỉnh kích thước hình ảnh theo nhu cầu
            },

        };

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md="4" style={styles.formLogin}>
                        <Segment style={styles.segment} >
                            <Card fluid>
                                <Card.Content>
                                <Loader active={true} size='massive'>Loading</Loader>
                                    <img
                                        src={process.env.PUBLIC_URL + '/images/tải xuống.png'}
                                        alt="Logo"
                                        style={styles.logo}
                                    />
                                        <Form>
                                        <Form.Field
                                            label="Username"
                                            name="username"
                                            control={Input}
                                            placeholder="Username account"
                                            required
                                        />
                                        <Form.Field
                                            label="Password"
                                            name="password"
                                            control={Input}
                                            placeholder="Password"
                                            required
                                        />
                                        <Button
                                            fluid
                                            type="login"
                                            className="button"
                                            style={styles.button}
                                        >
                                            Login
                                        </Button>
                                    </Form>
                                </Card.Content>
                            </Card>
                        </Segment>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;
