import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.scss'

import { ReactComponent as CrwnLogo} from '../../../assets/crown (1).svg'
import { UserContext } from '../../../context/user.context'

const Navigation = () => {

	const {currentUser} = useContext(UserContext)
	console.log(currentUser)
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					<Link className='nav-link' to='/sign-In'>
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation
