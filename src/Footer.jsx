import React from "react";
import tweet from "./Images/tweet.png";
import utube from "./Images/utube.png";
import whatsapp from "./Images/whatsapp.png";
import insta from "./Images/insta.png";
import facebook from "./Images/facebook.png";
import styles from "./Parrot.module.css";
import { Form, Col, Row } from "react-bootstrap";

const Fotter = () => {
	return (
		<div>
			<Form>
				<Row className="fotter-row mt-1">
					<div className="col-md-6">
						<Col className={styles.footerCol1}>
							<ul className={styles.fottertext}>
								<li>10/25 Swami Nagar Lahore 54900.</li>
								<li>Cell# : 03270767029</li>
								<li>What's App#: 03270767029</li>
							</ul>
						</Col>
					</div>
					<div className="col-md-6">
						<Col className={styles.footerCol2}>
							<div>
								<h6 className={styles.fottertext}>You can also follow us on...</h6>
								<img className={styles.fotterimage} src={utube} alt="utube_pic" />
								<img className={styles.fotterimage} src={tweet} alt="utube_pic" />
								<img className={styles.fotterimage} src={insta} alt="utube_pic" />
								<img className={styles.fotterimage} src={whatsapp} alt="utube_pic" />
								<img className={styles.fotterimage} src={facebook} alt="utube_pic" />
							</div>
						</Col>
					</div>
				</Row>
			</Form>
		</div>
	);
};
export default Fotter;
