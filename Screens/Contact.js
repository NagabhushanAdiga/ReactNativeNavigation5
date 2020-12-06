import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text> Contact </Text>
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
