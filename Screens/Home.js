import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text> Home </Text>
				<Button
					onPress={() => this.props.navigation.navigate("Contact")}
					title="Go to Contact"
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
	},
});
