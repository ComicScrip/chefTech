import RecipeCard from "@/components/RecipeCard";
import type { Recipe } from "@/types";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	const recipes: Recipe[] = [
		{
			title: "Crêpes",
			picture:
				"https://img.cuisineaz.com/660x495/2015/01/29/i113699-photo-de-crepe-facile.jpeg",
			timeMinutes: 5,
		},
		{
			title: "Lasagnes",
			picture:
				"https://zapetti.fr/app/uploads/2022/04/Lasagne_ligne-3-scaled.jpg",
			timeMinutes: 60,
		},
	];

	return (
		<SafeAreaView style={{ alignItems: "center" }}>
			<FlatList
				data={recipes}
				renderItem={({ item }) => <RecipeCard recipe={item} />}
				keyExtractor={(item) => item.title}
			/>
		</SafeAreaView>
	);
}
