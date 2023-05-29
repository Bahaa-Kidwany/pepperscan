import Logo from "./../../assets/bell-pepper.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  return (
    <NavHeader>
      <NavList>
        <li>
          <a href="/">افحص محصولك الان</a>
        </li>
        <li>
          <a href="https://www.google.com/search?q=tensorflow+model+zoo+tf2&client=firefox-b-d&bih=767&biw=1440&hl=en&sxsrf=APwXEdfzHa6GF4sJJPVRMoyt2C4r1l9OnA%3A1683456076937&ei=TIBXZO_ZOIeA9u8PhuuSqAU&oq=tensorflow+model+zoo+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMggIABCKBRCGAzIICAAQigUQhgM6CggAEEcQ1gQQsAM6CggAEIoFELADEENKBAhBGABQQFhAYJwKaAFwAXgAgAF-iAF-kgEDMC4xmAEAoAEByAEKwAEB&sclient=gws-wiz-serp">تواصل معنا</a>
        </li>
        <li>
          <a href="http://www.pepperdiagnosis.tech/#team">فريق العمل</a>
        </li>
        <li>
          <a href="http://www.pepperdiagnosis.tech/#adv">المميزات</a>
        </li>
        <li>
          <a href="http://www.pepperdiagnosis.tech/#info">عن التطبيق</a>
        </li>
        <li>
          <a href="http://www.pepperdiagnosis.tech/">الرئيسية</a>
        </li>
        <li>
          <a href="/">
            <Icon src={Logo} alt="bell pepper" />
          </a>
        </li>
      </NavList>
    </NavHeader>
  );
}

export default Header;

const NavHeader = styled.nav`
  padding: 32px;
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 4px;

  li a {
    font-size: 1rem;
    color: black;
    font-weight: bold;
  }

  li:first-of-type {
    background-color: black;
    padding: 16px;
    border-radius: 32px;

    a {
      color: white;
    }
  }
  li:last-of-type {
    margin-left: auto;
  }
`;
const Icon = styled.img`
  width: 70px;
  min-width: 70px;
`;
