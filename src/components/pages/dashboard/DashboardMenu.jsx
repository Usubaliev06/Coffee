import React, { useEffect } from "react";

import { menuActions } from "../../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";

const DashbordMenu = () => {
  const dispatch = useDispatch();

  const coffee = useSelector((state) => state.menu.coffee);
  const { status: coffeeStatus } = useSelector((state) => state.menu.getCoffee);

  const fastFood = useSelector((state) => state.menu.fastFood);
  const { status: fastFoodStatus } = useSelector(
    (state) => state.menu.getFastFood
  );

  const desert = useSelector((state) => state.menu.desert);
  const { status: desertStatus } = useSelector((state) => state.menu.getDesert);

  useEffect(() => {
    if (!coffeeStatus) {
      dispatch(menuActions.getCoffee());
    }
    if (!fastFoodStatus) {
      dispatch(menuActions.getFastFood());
    }
    if (!desertStatus) {
      dispatch(menuActions.getDesert());
    }
  }, [coffeeStatus, fastFoodStatus, desertStatus]);

  console.log(coffee,coffeeStatus)
  console.log(fastFood, fastFoodStatus);


  return (
    <div>
      coffee
      {
        coffee.map((item)=>{
        return( <div>
            <p>name: {item.name}</p>
            <p>dec: {item.description}</p>
            <p>price: {item.price}</p>
            <p>id: {item.id}</p>
          </div>
        )
        })
      }

    </div>
  );
}

export default DashbordMenu;
