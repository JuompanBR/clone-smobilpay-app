import { BACKEND_URL, beResourceMapping } from '@/constants';
import { useAppStore } from '@/stores';
import { CategoryType } from '@/types';
import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";
import ThemedText from '../ThemedText';
import CategoryItem from './CategoryItem';

const CategoryList: React.FC = () => {

  const appStore = useAppStore();
  
  // Fetch categories
  const { isPending, error, data, isFetching } = useQuery({

    queryKey: ['categories'],
    queryFn: async () => {
      let response = await fetch(BACKEND_URL + beResourceMapping.category);

      const result = await response.json();
      appStore.setCategoryList(result);
      return result;
    },
  });

  if (isPending) return <ThemedText>Loading...</ThemedText>

  if (error) return <ThemedText>{'An error has occurred: ' + error.message}</ThemedText>

  return (
    <View style={{ paddingVertical: 12, paddingHorizontal: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'baseline', gap: 15 }}>
      {data.map((category: CategoryType) => (
        <CategoryItem category={category} key={category.id}/>
      ))}
    </View>
  );
}

export default CategoryList;