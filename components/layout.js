import Link from 'next/link'
import Image from "next/image";
import Meta from '../components/Meta';
import NavBar from './Header/NavBar';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Meta/>
      <NavBar/>
      <main className="lockup">{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    <Footer/>
    </div>
  );
}
