import { CategoryType } from '@/types';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';

const IconSets: Record<string, any> = {
  "Ionicons": Ionicons,
  "MaterialIcons": MaterialIcons,
  "FontAwesome": FontAwesome,
};

type Props = {
  category: CategoryType;
};

const IconComponent: React.FC<Props> = ({ category }: {category: CategoryType}) => {
  const SelectIconComponent = IconSets[category.iconSet];

  return (
    <SelectIconComponent name={category.iconName} size={24} color="#00b894" />
  );
};

export default IconComponent;