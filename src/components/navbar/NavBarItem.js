import Nav from 'react-bootstrap/Nav';
import styles from "./NavBarItem.module.scss";

const NavBarItem = ({ item, activeItem, handleItemClick }) => {
    return (
        <Nav.Link
            className={` text-uppercase ${styles.NavBarItem} ${activeItem === item.name ? styles.active : ''}`}
            href={`#${item.name}`}
            active={activeItem === item.name}
            onClick={handleItemClick}
        >
            {item.name}
        </Nav.Link>
    )
}

export default NavBarItem
