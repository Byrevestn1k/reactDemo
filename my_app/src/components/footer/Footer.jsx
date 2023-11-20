import './footer.css';
import FooterItem from "../FooterItem";
import NavigationItem from "../NavigationItem";

const Footer = () => {
   return (
      <footer>
         <FooterItem content='FOOTER' isLowersetext={true} />
         <div className="footer">
            <FooterItem content='Головна' isLowersetext={false} />
            <FooterItem content='Про нас' isLowersetext={false} />
            <FooterItem content='Контакти' isLowersetext={false} />
            <FooterItem content='Блог' isLowersetext={false} />
         </div>
      </footer>);
}

export default Footer;