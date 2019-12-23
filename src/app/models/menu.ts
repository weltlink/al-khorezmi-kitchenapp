export interface DishType {
  id: number;
  name: string;
  ordering: number;
}

export interface MealsSection {
  title: string;
  meals: Meal[];
}

export interface Meal {
  name: string;
  price: number;
  img: string;
  dish_type: DishType;
}

export interface TimeSection {
  type: string;
  start_time: string;
  end_time: string;
  dishes: Meal[];
  mealTypes: MealsSection[];
}

