import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import HomePage from './pages/Home';
import TasksPage from './pages/Tasks';

const mainNavigation = createSwitchNavigator({
  HomePage,
  TasksPage,
});

const Routes = createAppContainer(mainNavigation);

export default Routes;
