import React from 'react';
import styles from './details.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Details(props) {
    return (
        <section className={styles.section}>
            <div className={styles.title}>
                <h3>Profile</h3>
            </div>
            <Container>
                <Row>
                    <Col md={2}>
                        <h3>Works</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, quae ad repudiandae ut nam aliquid error iusto! Totam, in id!</p>
                    </Col>
                    <Col md={8}>Variable width content</Col>
                    <Col md={2}>
                        3 of 3
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Details;