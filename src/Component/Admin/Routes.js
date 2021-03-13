import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import TeacherPage from './pages/TeacherPage';
import ContactInfo from './pages/ContactInfo';
import BlogPage from './pages/BlogPage';
import FeedbackPage from './pages/FeedbackPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/admin/' exact component={DashboardPage} />
        <Route path='/admin/teachers' component={TeacherPage} />
        <Route path='/admin/contactinfo' component={ContactInfo} />
        <Route path='/admin/blog' component={BlogPage} />
        <Route path='/admin/feedback' component={FeedbackPage} />
      </Switch>
    );
  }
}

export default Routes;
