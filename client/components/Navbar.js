import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Button} from 'react-bootstrap'
import CartButton from './CartButton'

/**
 * CONTAINER
 */

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1 className="center">Millie Meals</h1>
    <h3 className="center">Where healthy dogs come to chomp</h3>
    <nav className="center">
      {isLoggedIn ? (
        <div>
          <Link to="/home">
            <Button bsStyle="warning">Home</Button>
          </Link>

          <Link to="/#">
            <Button bsStyle="danger" onClick={handleClick}>
              Logout
            </Button>
          </Link>

          <Link to="/products">
            <Button bsStyle="info">Products</Button>
          </Link>

          <CartButton />
        </div>
      ) : (
        <div>
          <Link to="/login">
            <Button bsStyle="warning">Login</Button>
          </Link>

          <Link to="/signup">
            <Button bsStyle="success">Signup</Button>
          </Link>

          <Link to="/products">
            <Button bsStyle="info">Products</Button>
          </Link>

          <CartButton />
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
