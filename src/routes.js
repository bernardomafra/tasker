import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomePage from './pages/Home';
import TasksPage from './pages/Tasks';
import { TasksProvider } from './handlers/tasks'

const Wrapped = ({ navigation }) => {
  return (
    <TasksProvider>
      <TasksPage navigation={navigation} />
    </TasksProvider>
  )
}

const mainNavigation = createSwitchNavigator({
  HomePage,
  TasksPage: Wrapped,
});

const Routes = createAppContainer(mainNavigation);

export default Routes;
