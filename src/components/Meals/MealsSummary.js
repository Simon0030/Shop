import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Order your favorite Pizza!</h2>
      <p>
        Choose your favorite pizza and add it to your cart.
      </p>
    </section>
  );
};

export default MealsSummary;
