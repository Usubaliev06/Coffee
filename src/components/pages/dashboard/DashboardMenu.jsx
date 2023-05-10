import React, { useEffect, useState } from "react";
import css from "./Dashboard.module.css";

import { menuActions } from "../../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { clear } from "@testing-library/user-event/dist/clear";

const DashbordMenu = () => {
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu.menu);
  const { status: menuStatus } = useSelector((state) => state.menu.getMenu);
  const { status: deleteMenuStatus } = useSelector((state) => state.menu.deleteMenu);

  console.log(deleteMenuStatus)

  const coffee = useSelector((state) => state.menu.coffee);
  const { status: coffeeStatus } = useSelector((state) => state.menu.getCoffee);

  const fastFood = useSelector((state) => state.menu.fastFood);
  const { status: fastFoodStatus } = useSelector(
    (state) => state.menu.getFastFood
  );

  const desert = useSelector((state) => state.menu.desert);
  const { status: desertStatus } = useSelector((state) => state.menu.getDesert);

  useEffect(() => {
    if (!menuStatus) {
      dispatch(menuActions.getMenu());
    }
    if (!coffeeStatus) {
      dispatch(menuActions.getCoffee());
    }
    if (!fastFoodStatus) {
      dispatch(menuActions.getFastFood());
    }
    if (!desertStatus) {
      dispatch(menuActions.getDesert());
    }
    
  }, [menuStatus, coffeeStatus, fastFoodStatus, desertStatus,]);

  const [category, setCategory] = useState(menu);

  const handleDelete = (id) => {
    dispatch(menuActions.deleteMenu(id))
  };

  const handleSubmit = (category) => {
    console.log(category.value);
    setCategory(category.value);
  };

  const options = [
    {
      value: menu,
      label: "all",
    },
    {
      value: fastFood,
      label: "fastFood",
    },
    {
      value: coffee,
      label: "coffee",
    },
    {
      value: desert,
      label: "desert",
    },
  ];

  // console.log(coffee, coffeeStatus);
  console.log(fastFood, fastFoodStatus);
  console.log(menu, menuStatus);

  return (
    <div>
      <h1>All</h1>

      <Select options={options} onChange={handleSubmit} />

      <table>
        <tr>
          <th>Name</th>
          <th>Decription</th>
          <th>Price</th>
          <th>ID</th>
          <th>Delte</th>
          <th>Edit</th>
        </tr>

        {category?.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.id}</td>
              <td>
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default DashbordMenu;
