import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: '1',
    name: 'Margheritta',
    description: 'Sauce, cheese',
    price: 8.99,
  },
  {
    id: '2',
    name: 'Funghi',
    description: 'Sauce, cheese, mushrooms',
    price: 12.99,
  },
  {
    id: '3',
    name: 'Vesuvio',
    description: 'Sauce, cheese, ham',
    price: 13.99,
  },
  {
    id: '4',
    name: 'Toscana',
    description: 'Sauce, cheese, mushrooms, ham',
    price: 15.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
