import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Parrot.module.css";

import { Form, Col, Row, ListGroup } from "react-bootstrap";

function Services() {
	return (
		<div className="home-body">
			<Form className={styles.formbody}>
				<p>{<Header />}</p>

				<div className={styles.middlebody}>
					<h1>Our Services</h1>
					<h3>It is our pleasure to offer our services at your door step.</h3>
				</div>
				<div className="parotBodyservices">
					<Row>
						<Col>
							<ListGroup className={styles.ListGroup2} as="ol" numbered>
								<ListGroup.Item className={styles.ListGroup2Items}>Expreinced Team</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>
									Variety of Animals
								</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>
									Economical Prices
								</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>Medical Advices</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>
									Customer Satisfaction
								</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>Birds Cages</ListGroup.Item>
								<ListGroup.Item className={styles.ListGroup2Items}>Birds Feed</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</div>
				<Row>{<Footer />}</Row>
			</Form>
		</div>
	);
}

export default Services;
