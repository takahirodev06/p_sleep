import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
     <NavigationContainer>
         <Stack.Navigator initialRouteName="Main">
           <Stack.Screen
             name="Main"
             component={Main}
           />
           <Stack.Screen
             name="AddScreen"
             component={AddScreen}
           />
         </Stack.Navigator>
       </NavigationContainer>
  );
}

export default function home_screen() {
  return (
    <View style={styles.container}>
      <Text>Pokémon sleep App</Text>
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
