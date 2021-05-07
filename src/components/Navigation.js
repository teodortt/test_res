import { Navbar, Nav, Container } from 'react-bootstrap';

// import One from './components/One';
// import Two from './components/Two';
// import Home from './components/Home';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Task 1</Nav.Link>
                            <Nav.Link href='/one'>Task 2</Nav.Link>
                            <Nav.Link href='/two'>Test</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation;