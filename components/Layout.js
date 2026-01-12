import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";
import Navbar from "@/components/BottomNav";

function Layout() {
  return (
    <Container className="helveticaBold">
      <Row>
        <h1
          tabIndex={0}
          role="heading"
          aria-level="3"
          className="helveticaBold"
        >
          Hello.
        </h1>
      </Row>

      <Stack gap={4}>
        {/* panels */}
        <Stack gap={4}>
          {/** top row */}
          <Row className="g-4">
            <Col xs={12} md={4}>
              <Nav.Link href="https://www.rekaicentre.com/">
                <div className="border image-wrapper">
                  <Image
                    src="/images/tour-booking.gif"
                    alt="Demo of the tour booking page for The Rekai Centres. 
                    Form fields include guest name, email address, 
                    number of guests (automatically caps at a certain number, in this case 8), 
                    and date of tour (uses a date picker calendar with certain dates greyed 
                    out based on available tour dates)."
                  />
                </div>
              </Nav.Link>
            </Col>
            <Col xs={12} md={4}>
              <Nav.Link href="https://github.com/lgoitom/smile-detector">
                <div className="border image-wrapper">
                  <Image
                    src="/images/smile-detection-webcam.gif"
                    alt="Demo of a smile detection application that detects a person smiling 
                    from live or prerecorded camera footage."
                  />
                </div>
              </Nav.Link>
            </Col>
            <Col xs={12} md={4}>
              <Nav.Link href="https://github.com/lgoitom/fragments">
                <div className="border image-wrapper">
                  <Image
                    src="/images/fragments.gif"
                    alt="Demo of a web application using AWS for creating, viewing, 
                    converting, updating, and deleting fragments of plain text, 
                    JSON, and markdown."
                  />
                </div>
              </Nav.Link>
            </Col>
          </Row>

          {/**bottom row */}
          <Row className="g-4">
            <Col xs={12} md={4}>
              <Nav.Link href="https://met-chi.vercel.app/">
                <div className="border image-wrapper">
                  <Image
                    src="/images/met.gif"
                    alt="Demo of a website with advanced 
                  search features to view the MET Museum artwork collection in New York City."
                  />
                </div>
              </Nav.Link>
            </Col>
            <Col xs={12} md={4}>
              <Nav.Link href="https://github.com/lgoitom/Hotel_ABC">
                <div className="border image-wrapper">
                  <Image
                    src="/images/hotel-booking-cropped.gif"
                    alt="Demo of a Java hotel booking and management application. 
                    Admins can create, modify, and cancel bookings, while guests 
                    can select rooms and duration, confirm bookings, and rate their stay."
                  />
                </div>
              </Nav.Link>
            </Col>
            <Col xs={12} md={4}>
              <Nav.Link href="https://github.com/lgoitom/discogify">
                <div className="border image-wrapper">
                  <Image
                    src="/images/discogify-gif.gif"
                    alt="Demo of a web application displaying songs from featured 
                    artists like Kendrick Lamar, Tyler The Creator, and Drake, 
                    showing song title, year, album cover, length, and YouTube 
                    link, with options to request new artists and sign up for the newsletter."
                  />
                </div>
              </Nav.Link>
            </Col>
          </Row>
        </Stack>

        <Stack gap={6}>
          {/* name */}
          <Row>
            <Col xs={12} md={12}>
              <h3
                tabIndex={0}
                role="heading"
                aria-level="3"
                className="helveticaBold"
              >
                Meet Luwam.
              </h3>
            </Col>
          </Row>

          {/* desc/contact */}

          <Row>
            <Col xs={12} md={5}>
              <p tabIndex={0}>
                Luwam is a freelance web developer with hands-on project
                experience in full-stack development. She works across front and
                back-end technologies and has experience with (but not limited
                to) Python, Java, and C/C++. She graduated from Computer
                Programming and Analysis at Seneca Polytechnic in December 2025
                and has a strong interest building engaging, user-focused
                applications. When she&apos;s not programming, Luwam likes to
                read, game, and try new food.
              </p>
            </Col>
            <Col xs={12} md={{ span: 6, offset: 1 }}>
              <Nav.Link href="mailto:luwam.may08@gmail.com">
                <p>
                  <i aria-label="Email" className="bi bi-envelope"></i>{" "}
                  luwam.may08@gmail.com
                </p>
              </Nav.Link>

              {/* linkedin */}
              <Nav.Link href="https://www.linkedin.com/in/luwamgoitomworre/">
                <p>
                  <i aria-label="LinkedIn" className="bi bi-linkedin"></i>{" "}
                  /luwamgoitomworre
                </p>
              </Nav.Link>

              {/* github */}
              <Nav.Link href="https://github.com/lgoitom">
                <p>
                  <i aria-label="GitHub" className="bi bi-github"></i> /lgoitom
                </p>
              </Nav.Link>
            </Col>
          </Row>
        </Stack>
      </Stack>
      <Navbar fixed="bottom" />
    </Container>
  );
}
export default Layout;
