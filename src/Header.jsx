import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Parrot.module.css";
import { Images } from "./parrotImages";
import shiftlogo from "./Images/logo2.png";

import { Navbar, Button, Container, Nav, Carousel, Form } from "react-bootstrap";

function Header() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="home-body" style={{ backgroundColor: "skyblue" }}>
			<h2>
				<img src={shiftlogo} />
				SHFT SOLUTION
			</h2>

			<Form style={{ backgroundColor: "yellow" }}>
				<div>
					<Offcanvas className={styles.offcansize} show={show} onHide={handleClose}>
						<Offcanvas.Header className={styles.sidebarbutn} closeButton></Offcanvas.Header>
						{/* <Offcanvas.Body> */}

						<div className={styles.sidebar}>
							<Link to="/Home">Home</Link>
							<br />
							<Link to="/AboutUs">About Us</Link>

							<br />
							<Link to="/ContactUs">Contact Us</Link>
							<br />
							<Link to="/Services">Services</Link>
							<br />

							<Link to="/Privacy">Privacy Policy</Link>
						</div>
					</Offcanvas>
				</div>
				{/* <Nav bar .Body> */}
				<div>
					<Navbar variant="dark" bg="dark" expand="sm">
						<Container>
							<Button variant="primary" onClick={handleShow}>
								Show Menu
							</Button>
							<Navbar.Brand href="./Home">Home</Navbar.Brand>
							<Navbar.Brand href="./AboutUs">About Us</Navbar.Brand>
							<Navbar.Brand href="./ContactUs">Contact Us</Navbar.Brand>
							<Navbar.Brand href="./Services">Services</Navbar.Brand>
							<Navbar.Brand href="./Privacy">Privacy Policy</Navbar.Brand>
						</Container>
					</Navbar>
				</div>
				{/* <crosal.Body> */}

				<div>
					<Container className={styles.carosalitem}>
						<Carousel>
							{Images.map((data, ind) => (
								<Carousel.Item interval={1000} key={ind}>
									<img className={styles.carosalimages} src={data} alt="" />
								</Carousel.Item>
							))}
						</Carousel>
					</Container>
				</div>
			</Form>
		</div>
	);
}

export default Header;
