import { StatusBar } from 'expo-status-bar';
import React , { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView , FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { testProperties } from './Utils/testHelper';


export default function App() {
 
  const [ courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false); //setIsAddMode is the function to change the state: isAddMode
  
  const addGoalHandler = goalTitle => {
    
    if (goalTitle != '') {
    // Rendering done once for both states below 
    setCourseGoals(currentGoals => [...currentGoals, 
      { id: Math.random().toString(), value: goalTitle}]);
   // setCourseGoals([...courseGoals, enteredGoal]);
   setIsAddMode(false);
    }
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }
  console.log('Playing with react native debugger')
  return (
    <View style={styles.screen}>
      <Button {...testProperties('Add New Goal')} title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}/>
      <FlatList 
      keyExtractor={(item, index) => item.id }
        data={courseGoals}
        // renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}
        renderItem={itemData => <GoalItem 
            onDelete={removeGoalHandler.bind(this, itemData.item.id)} 
            title={itemData.item.value} 
            accessibilityID={itemData.item.value}/>}
  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    //backgroundColor: 'red' // to introduce a visual bug
  },
  inputContainer: {
   flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
});
