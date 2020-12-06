import * as React from "react";
import { View, Text, Vibration, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";

import Home from "./Screens/Home";
import Contact from "./Screens/Contact";
import Details from "./Screens/Details";
import DrawerContent from "./Screens/DrawerContent";

import { RectButton } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HomeStack = createStackNavigator();
const ContactStack = createStackNavigator();
const Drawer = createDrawerNavigator();

class HomeStackScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HomeStack.Navigator>
				<HomeStack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
						title: "HOME",
						headerLeft: () => (
							<Icon
								name="bars"
								style={{ left: 25 }}
								size={25}
								color="#000"
								onPress={() => this.props.navigation.openDrawer()}
							></Icon>
						),
					}}
				/>
			</HomeStack.Navigator>
		);
	}
}

class ContactStackScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ContactStack.Navigator>
				<ContactStack.Screen
					name="Contact"
					component={Contact}
					options={{
						title: "CONTACT",
						headerLeft: () => (
							<Icon
								name="bars"
								style={{ left: 25 }}
								size={25}
								color="#000"
								onPress={() => this.props.navigation.openDrawer()}
							></Icon>
						),
					}}
				/>
			</ContactStack.Navigator>
		);
	}
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<SafeAreaProvider>
				<NavigationContainer>
					<Drawer.Navigator
						drawerContent={
							(this.props = () => <DrawerContent {...this.props} />)
						}
					>
						<Drawer.Screen
							name="Home"
							component={HomeStackScreen}
							options={{ gestureEnabled: false }}
						/>
						<Drawer.Screen name="Contact" component={ContactStackScreen} />
					</Drawer.Navigator>
					{/* <Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#1BCA9B",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							color: "#fff",
						},
					}}
				>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Contact" component={Contact} />
					<Stack.Screen name="Details" component={Details} />
				</Stack.Navigator> */}
				</NavigationContainer>
			</SafeAreaProvider>
		);
	}
}
