import SearchBar from '../shearchbar/SearchBar';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {
	return (
		<nav>
			<img src='https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png' alt="Ricky&Morty" width="20%" />
			<div>
				<Link to='/home' className={style.links}>Home</Link>
				<Link to='/about' className={style.links}>About</Link>
				<button className={style.links} onClick={props.logout}>LogOut</button>
			</div>
			<SearchBar onSearch={props.onSearch} random={props.random} />
		</nav>
	)
}

