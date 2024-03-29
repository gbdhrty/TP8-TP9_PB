import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BooksListScreen } from './BooksListScreen';
import { GalleryPage } from './GalleryPage';
import { TakePicture } from '../components/TakePicture';

const Tab = createBottomTabNavigator();

export function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="List" 
                component={BooksListScreen} 
                options={{ 
                    title: "Livros Cadastrados",
                    headerShown: false 
                }} 
            />
            <Tab.Screen 
                name="Gallery" 
                component={GalleryPage} 
                options={{ 
                    title: "Galeria",
                    headerShown: false 
                }} 
            />
            <Tab.Screen 
                name="Camera" 
                component={TakePicture} 
                options={{ 
                    title: "Câmera",
                    headerShown: false 
                }} 
            />
        </Tab.Navigator>
    );
}