import React from "react";
import styles from "./Parrot.module.css";
import Footer from "./Footer";
import Header from "./Header";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { Form, Col, Row, ListGroup } from "react-bootstrap";

function ContactUs(props) {
	return (
		<div className="home-body">
			<Form className={styles.formbody}>

				<p>{<Header />}</p>

				<div className={styles.middlebody}>
					<h1>Contact Us</h1>
					<h3>Why should do you contact us?</h3>
				</div>
				<div className="parotBody">
					<Row>
						<Col>
							<ListGroup as="ol" numbered>
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

export default ContactUs;
