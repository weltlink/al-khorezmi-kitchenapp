export interface Meal {
  title: string;
  price: number;
  image: string;
  type: string;
}

export interface TimeSection {
  title: string;
  from: string;
  until: string;
  meals: Meal[];
}

export interface Menu {
}
