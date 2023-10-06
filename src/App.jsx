import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function NutritionInfo({ nutritionInfo }) {
  return (
    <div className="row border px-3 py-2 me-0 mt-5">
      <div className="col-xl-6">
        <p className="text-warning m-0">
          Calories: {nutritionInfo.calories} kcal
        </p>
        <p className="text-warning m-0">Protein: {nutritionInfo.protein} g</p>
        <p className="text-warning m-0">Carbs: {nutritionInfo.carbs} g</p>
      </div>
      <div className="col-xl-6">
        <p className="text-warning m-0">Fat: {nutritionInfo.fat} g</p>
        <p className="text-warning m-0">Sugar: {nutritionInfo.sugar} g</p>
      </div>
    </div>
  );
}

function MenuItem({ name, price, nutritionInfo, image }) {
  return (
    <div className="row">
      <div className="col-6 border-start p-3">
        <img
          className="rounded-circle"
          src={image}
          height="150px"
          width="150px"
        />
        <p className="text-danger">
          <strong>{name}</strong> | {price}
        </p>
      </div>
      <div className="col-6 mb-5">
        <NutritionInfo nutritionInfo={nutritionInfo} />
      </div>
    </div>
  );
}

function Category({ title, foods }) {
  return (
    <div className="text-light">
      <h2 className="border-bottom border-5">{title}</h2>
      {foods}
    </div>
  );
}

const chicken = (
  <>
    <MenuItem
      name={"2 pcs Fried Chicken"}
      price={"RM 10.00"}
      nutritionInfo={{
        calories: 540,
        protein: 31,
        carbs: 35,
        fat: 29,
        sugar: 1,
      }}
      image={"/src/assets/fried-chicken.jpg"}
    />
    <MenuItem
      name={"6 pcs Chicken Nugget"}
      price={"RM 6.00"}
      nutritionInfo={{
        calories: 350,
        protein: 15,
        carbs: 25,
        fat: 25,
        sugar: 1,
      }}
      image={"/src/assets/nuggets.jpg"}
    />
  </>
);

const dessert = (
  <>
    <MenuItem
      name={"1 pc Vanilla Ice Cream"}
      price={"RM 2.00"}
      nutritionInfo={{
        calories: 180,
        protein: 4,
        carbs: 20,
        fat: 12,
        sugar: 18,
      }}
      image={"/src/assets/vanilla-icecream.jpg"}
    />
    <MenuItem
      name={"1 pc Coffee Ice Cream"}
      price={"RM 3.00"}
      nutritionInfo={{
        calories: 190,
        protein: 4,
        carbs: 20,
        fat: 13,
        sugar: 19,
      }}
      image={"/src/assets/coffee-icecream.jpg"}
    />
  </>
);

function App() {
  return (
    <div className="p-5 bg-secondary bg-opacity-25">
      <img src="/src/assets/food-logo.png" height="42px" />
      <h1 className="display-1 text-warning">Food Menu</h1>
      <div className="row">
        <div className="col-xl-6">
          <Category title={"Ultimate Chicken"} foods={chicken} />
        </div>
        <div className="col-xl-6">
          <Category title={"Dessert"} foods={dessert} />
        </div>
      </div>
      <div className="text-light text-center mt-2">
        &copy; 2023 Zeph. All right reserved.
      </div>
    </div>
  );
}

export default App;
