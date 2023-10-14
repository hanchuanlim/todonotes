
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NotesStack from "./screens/NotesStack";
import AddScreen from "./screens/AddScreen";

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{ presentation: 'modal' }} >

       <Stack.Screen
         name="Notes Stack"
         component={NotesStack}
    options={{ headerShown: false, headerMode:false }}
       />
       <Stack.Screen name="Add Note" component={AddScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}


