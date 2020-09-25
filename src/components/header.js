import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

//import './header.module.scss'
import headerStyles from './header.module.scss'


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className="title" to="/">
          {data.site.siteMetadata.title}
        </Link>
        </h1>
      <nav>
          <ul className="navList">
              <li >
                <Link className="navItem" activeClassName="activeNavItem" to="/">Home</Link>            
              </li>
              
              <li>
                <Link className="navItem" activeClassName="activeNavItem" to="/skills">Skills</Link>            
              </li>
              <li>
                <Link className="navItem" activeClassName="activeNavItem" to="/about">About</Link>            
              </li>
              <li>
                <Link className="navItem" activeClassName="activeNavItem" to="/contact">Contact</Link>           
              </li>
              
          </ul>
      </nav>
      
      
      
      
      
    </header>
  )
}

export default Header;  