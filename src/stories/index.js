import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Container, Row, Col, DummyBox} from '../index';

storiesOf('Container', module)
    .add('default view', () => (
        <Container>
            <Row>
                <Col md={4} sm={3}>
                    <DummyBox></DummyBox>
                </Col>
                <Col md={4} sm={3}>
                    <DummyBox></DummyBox>
                </Col>
                <Col md={4} sm={3}>
                    <DummyBox>
                        <Row>
                            <Col offsetmd={4} md={4}>
                                <DummyBox></DummyBox>
                            </Col>
                        </Row>
                    </DummyBox>
                </Col>
            </Row>

        </Container>
    ));
