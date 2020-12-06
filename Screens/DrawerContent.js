import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Contact from "./Contact";
import {
	Avatar,
	Caption,
	Paragraph,
	Text,
	Drawer,
	TouchableRipple,
	Switch,
	Title,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "react-native-reanimated";

export default class DrawerContent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const navigation = this.props;
		return (
			<View style={{ flex: 1 }}>
				<DrawerContentScrollView {...this.props}>
					<View style={styles.drawerContent}>
						<View style={styles.userInfoSection}>
							<View style={{ flexDirection: "row", marginTop: 15 }}>
								<Avatar.Image
									source={{
										uri:
											"data:image/jpeg;base64,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",
									}}
									size={100}
								/>
							</View>
							<View style={{ marginLeft: 15, flexDirection: "column" }}>
								<Title style={styles.title}>Nagabhushan Adiga</Title>
								<Caption style={styles.caption}>ID:1899087</Caption>
							</View>
						</View>
						<View style={styles.row}>
							<View style={styles.section}>
								<Paragraph style={[styles.paragraph, styles.caption]}>
									80
								</Paragraph>
								<Caption style={styles.caption}>Purchased</Caption>
							</View>
							<View style={styles.section}>
								<Paragraph style={[styles.paragraph, styles.caption]}>
									20
								</Paragraph>
								<Caption style={styles.caption}>Completed</Caption>
							</View>
						</View>
					</View>
					<Drawer.Section style={styles.drawerSection}>
						<Drawer.Item
							icon="camera"
							color="#000"
							label="Home"
							onPress={() => Alert.alert("Are You Sure ?")}
						/>
						<Drawer.Item
							icon="camera"
							color="#000"
							label="Home"
							onPress={() => Alert.alert("Are You Sure ?")}
						/>
						<Drawer.Item
							icon="camera"
							color="#000"
							label="Home"
							onPress={() => Alert.alert("Are You Sure ?")}
						/>
						<Drawer.Item
							icon="camera"
							color="#000"
							label="Home"
							onPress={() => Alert.alert("Are You Sure ?")}
						/>
						<Drawer.Item
							icon="camera"
							color="#000"
							label="Home"
							onPress={() => Alert.alert("Are You Sure ?")}
						/>
					</Drawer.Section>
					{/* <Drawer.Section title="Appearance">
						<TouchableRipple>
							<View style={styles.preference}>
								<Text>Dark Mode</Text>
								<Switch />
							</View>
						</TouchableRipple>
					</Drawer.Section> */}
				</DrawerContentScrollView>
				<Drawer.Section style={styles.bottomDrawerSection}>
					<Drawer.Item
						icon="exit-to-app"
						color="#000"
						label="signOut"
						onPress={() => Alert.alert("Are You Sure ?")}
					/>
				</Drawer.Section>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: "bold",
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	row: {
		marginTop: 20,
		left: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	section: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
	},
	paragraph: {
		fontWeight: "bold",
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: "#f4f4f4",
		borderTopWidth: 1,
	},
	preference: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});
