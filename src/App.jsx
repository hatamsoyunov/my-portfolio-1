import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.sass';

import Preloader from './components/Preloader/Preloader';

// Layouts
import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Project from './pages/Project/Project';
import Contacts from './pages/Contacts/Contacts';

// Modal
import Modal from './components/Modal/Modal';
import './components/Modal/Modal.sass';

import OrderModal from './components/Modal/OrderModal';
import './components/Modal/OrderModal.sass';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pageLoaded: false,
			showModal: false,
			showMenu: false,
			showToTop: false
		};

		this.fullpageApiHandler = this.fullpageApiHandler.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleToggleMenu = this.handleToggleMenu.bind(this);
		this.fpOnLeaveHandler = this.fpOnLeaveHandler.bind(this);
	}

	componentDidMount() {
		// Preloader
		window.onload = () => {
			setTimeout(() => {
				this.setState({ pageLoaded: true });
			}, 1000);
		};
	}

	fullpageApiHandler(fullpageApi) {
		console.log('fullpageApiHandler:', fullpageApi);
		return fullpageApi;
	}

	fpOnLeaveHandler(origin, destination, direction) {
		const activeSectIndex = destination.index + 1;

		if (activeSectIndex > 1) {
			this.setState({ showToTop: true });
		} else {
			this.setState({ showToTop: false });
		}
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}

	handleToggleMenu() {
		this.setState({ showMenu: !this.state.showMenu });
	}

	render() {
		return (
			<Router>
				<Preloader pageLoaded={this.state.pageLoaded} />

				<Header
					fullpageApi={this.state.fullpageApi}
					onOpenModal={this.handleOpenModal}
					onMenuToggle={this.handleToggleMenu}
				/>

				<LeftAside
					showMenu={this.state.showMenu}
					showToTop={this.state.showToTop}
					onMenuToggle={this.handleToggleMenu}
				/>
				<Menu
					showMenu={this.state.showMenu}
					onMenuToggle={this.handleToggleMenu}
				/>

				<Switch>
					<Route exact path="/">
						<Home
							fullpageRender={this.fullpageApiHandler}
							fpOnLeave={this.fpOnLeaveHandler}
						/>
					</Route>
					<Route path="/about" component={About} />
					<Route path="/projects/:slug" component={Project} />
					<Route path="/contacts" component={Contacts} />
					<Route component={NotFound} />
				</Switch>

				<Footer onOpenModal={this.handleOpenModal} />
				<Modal
					isOpen={this.state.showModal}
					closeTimeoutMS={700}
					className="order-popup"
					onCloseModal={this.handleCloseModal}
					onOpenModal={this.handleOpenModal}
				>
					<OrderModal />
				</Modal>
			</Router>
		);
	}
}

export default App;
