import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Header from './components/main/header/Header';
import Footer from './components/main/footer/Footer';
import { SnapshotRenderer } from './components/export/SnapshotService';

const basename = process.env.NODE_ENV === 'development' ? '/' : process.env.BASE_URL || '/';

const App = () => {
  useEffect(() => {
    // fetch data on load??
  }, []);

  return (
    <Router basename={basename}>
      <Header />
      <Routes />
      <Footer />
      <SnapshotRenderer />
    </Router>
  );
};

export default connect(null, null)(App);
