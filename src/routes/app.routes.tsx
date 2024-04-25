import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { MealCreation } from '@screens/MealCreation';
import { MealDetails } from '@screens/MealDetails';
import { Statistics } from '@screens/Statistics';
import { Feedback } from '@screens/Feedback';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={Home}
            />
            <Screen
                name='statistics'
                component={Statistics}
            />
            <Screen
                name='mealCreation'
                component={MealCreation}
            />
            <Screen
                name='feedback'
                component={Feedback}
            />
            <Screen
                name='mealDetails'
                component={MealDetails}
            />
        </Navigator>
    )
}