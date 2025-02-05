import type { Recipe } from "@/types";
import { Image, Text, View, StyleSheet } from "react-native";

type RecipeCardProps = { recipe: Recipe };

export default function RecipeCard(props: RecipeCardProps) {
	const { recipe } = props;
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: recipe.picture,
					headers: { Accept: "image/*" },
				}}
				style={styles.pic}
			/>

			<Text style={styles.title}>{recipe.title}</Text>
			<Text style={styles.time}>{recipe.timeMinutes} minutes</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	pic: {
		width: 150,
		height: 150,
	},
	container: {
		backgroundColor: "white",
		borderColor: "grey",
		borderWidth: 1,
		width: 200,
		padding: 10,
		alignItems: "center",
		marginVertical: 20,
	},
	title: { fontWeight: "bold" },
	time: { color: "grey" },
});
