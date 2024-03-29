import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialPage } from './src/screens/InitialPage';
import { SignInScreen } from './src/screens/SignInScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { BookDetails } from './src/components/BookDetails';
import { Home } from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="InitialPage" 
          component={InitialPage} 
          options={{ title: "Página Inicial" }}
        />
        <Stack.Screen name="Entrar" component={SignInScreen} />
        <Stack.Screen name="Criar Conta" component={SignUpScreen} />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{ 
            title: "My Books",
            headerLeft: null
          }}
        />
        <Stack.Screen 
          name="Details" 
          component={BookDetails} 
          options={{ title: "Detalhes" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}