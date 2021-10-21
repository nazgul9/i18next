
import i18 from "i18next";
import React, { useState } from 'react';
// import {useTranslation} from "react-i18next";
import {Navbar,Nav,NavDropdown,Container }from 'react-bootstrap'
import {useTranslation} from "react-i18next";


function HNavbar(props) {
    const [count, setCount] = useState(0);
    const [coun, setCoun] = useState(0);

    const a = (lg) => {
        i18.changeLanguage(lg)
      }
      const { t } = useTranslation();      
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">{t('главный')}</Nav.Link>
        <Nav.Link href="#link">{t("О нас",({count}))}</Nav.Link>
        <Nav.Link href="#home">{t('Наши курсы')}</Nav.Link>
        <Nav.Link href="#link"> {t('IT компания')}</Nav.Link>
        <Nav.Link href="#home">{t('Новости')}</Nav.Link>
        <Nav.Link href="#link">{t('Фотогалерея')}({coun})</Nav.Link>
        
      </Nav>
       {/* <h2>{t('Welcome to React')}</h2> */}
          <button onClick={() => a('ky')}>ky</button>
          <button onClick={() => a('ru')}>ru</button> 
          <button onClick={() => setCount(count + "saas"+"jhh",)}>
        +
      </button>
      <button onClick={() => setCoun(coun - 1)}>
        -
      </button>
      


    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}

export default HNavbar;