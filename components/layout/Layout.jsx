import Footer from './Footer';
import classes from './Layout.module.scss';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className={classes.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
