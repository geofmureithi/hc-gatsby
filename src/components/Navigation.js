import React from 'react'
import Link from 'gatsby-link'

const Navigation = (props) => (
    <div className="nav-mobile">
        <nav className="nav-main" itemScope itemType="http://schema.org/SiteNavigationElement">
            <ul className="nav-main__list">
                <li><Link itemProp="url" to="/" onClick={props.handleToggleNav}><span itemProp="name">Home</span></Link></li>
                <li><Link itemProp="url" to="/2017/12/11/python-writing-the-perfect-tribonacci-sequence/" onClick={props.handleToggleNav}><span itemProp="name">Python: Writing the perfect Tribonacci sequence</span></Link></li>
                <li><Link itemProp="url" to="/2016/06/24/python-the-f__k-it-approach/" onClick={props.handleToggleNav}><span itemProp="name">Python: The F#%K It Approach</span></Link></li>
                <li><Link itemProp="url" to="/2015/08/12/html-css-creating-a-simple-beautiful-tab-design-that-requires-no-javascript/" onClick={props.handleToggleNav}><span itemProp="name">Tab design that requires no Javascript</span></Link></li>
            </ul>
        </nav>
    </div>
)

Navigation.propTypes = {
    handleToggleNav: React.PropTypes.func
}

export default Navigation
