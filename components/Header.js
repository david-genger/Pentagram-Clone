import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <Link prefetch href='/'>
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>
    <Link prefetch href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
    <Link prefetch href='/archive'>
      <a className={pathname === '/archive' ? 'is-active' : ''}>Archive</a>
    </Link>
    <Link prefetch href='/work'>
      <a className={pathname === '/work' ? 'is-active' : ''}>Work</a>
    </Link>
    <style jsx>{`
      header {
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
)

export default withRouter(Header)