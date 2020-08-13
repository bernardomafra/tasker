import React from 'react';
import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import styles from './styles'
import logo from '../../public/assets/logo.png'

import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = ({ navigation }) => (
  <View style={styles.container}>
    <View
      style={styles.listContainer}>
      <Image source={logo} />
      <FlatList
        data={[
          { key: 'Organize your daily tasks' },
          { key: 'Build your routine' },
          { key: 'Concentrate' },
          { key: 'Focus' },
        ]}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Icon name="check-square" size={18} color="#FFFFFF" style={styles.check} />
            <Text style={styles.item}>{item.key}</Text>
          </View>
        )}
      />
    </View>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('TasksPage')}
    >
      <Text style={styles.buttonText}>Get started</Text>
    </TouchableOpacity>
  </View>
);

export default HomePage;