import React, { useEffect, useState } from "react";
import css from "./Dashboard.module.css";

import { menuActions } from "../../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { clear } from "@testing-library/user-event/dist/clear";


const DashbordMenu = () => {
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu.menu);
  const meal = useSelector((state) => state.menu);
  
  const [category, setCategory] = useState(menu);

  const [titleCreate, setTitleCreate] = useState("");
  const [descriptionCreate, setDescriptionCreate] = useState("");
  const [imageCreate, setImageCreate] = useState("");
  const [priceCreate, setPriceCreate] = useState("");
  const [categoryCreate, setCategoryCreate] = useState("");

  const [modal, setModal] = useState(css.modalClose);

  const { status: createMenuStatus } = useSelector(
    (state) => state.menu.createMenu
  );

  const { status: deleteMenuStatus } = useSelector(
    (state) => state.menu.deleteMenu
  );

  const { status: menuStatus } = useSelector((state) => state.menu.getMenu);

  const coffee = useSelector((state) => state.menu.coffee);
  const { status: coffeeStatus } = useSelector((state) => state.menu.getCoffee);

  const fastFood = useSelector((state) => state.menu.fastFood);
  const { status: fastFoodStatus } = useSelector(
    (state) => state.menu.getFastFood
  );

  const desert = useSelector((state) => state.menu.desert);
  const { status: desertStatus } = useSelector((state) => state.menu.getDesert);

  useEffect(() => {
    if (!menuStatus) dispatch(menuActions.getMenu());
    if (!coffeeStatus) dispatch(menuActions.getCoffee());
    if (!fastFoodStatus) dispatch(menuActions.getFastFood());
    if (!desertStatus) dispatch(menuActions.getDesert());
  }, [menuStatus, coffeeStatus, fastFoodStatus, desertStatus]);

  const handleDelete = (id) => dispatch(menuActions.deleteMenu(id));

  const handleSubmit = (cat) => setCategory(cat.value);

  const handleEdit = (id) => {
    console.log("edit", id);
  };

  const handleCreate = () => {
    const dataCreate = {
      description: descriptionCreate,
      image: null,
      name: titleCreate,
      price: priceCreate,
      category: categoryCreate,
    };
    // console.log(create);
    console.log(createMenuStatus)
    // if (createMenuStatus === "fulfilled") setModal(css.modalClose);
    // else if (createMenuStatus === "rejected")alert("error creating");
    // else console.log('wait')
    dispatch(menuActions.createMenu(dataCreate));
  };

  const handleModalOpen = () => setModal(css.modalOpen);
  const handleModalClose = () => setModal(css.modalClose);

  const options = [
    {
      value: "menu",
      label: "all",
    },
    {
      value: "fastFood",
      label: "fastFood",
    },
    {
      value: "coffee",
      label: "coffee",
    },
    {
      value: "desert",
      label: "desert",
    },
  ];

  // console.log(coffee, coffeeStatus);
  // console.log(fastFood, fastFoodStatus);
  // console.log("cat", category);

  return (
    <div>
      <h1>All</h1>
      <Select options={options} onChange={handleSubmit} />
      <table>
        <thead>
          <th>Name</th>
          <th>Decription</th>
          <th>image</th>
          <th>Price</th>
          <th>ID</th>
          <th>Delte</th>
          <th>Edit</th>
        </thead>
        {/* {category?.map((item) => { */}
        <tbody>
          {meal[category]?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.image}</td>
                <td>{item.price}</td>
                <td>{item.id}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleModalOpen}>Create new </button>
      <div className={modal}>
        <button onClick={handleModalClose}>Close</button>
        <input
          type="text"
          placeholder="title"
          value={titleCreate}
          onChange={(e) => {
            setTitleCreate(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          value={descriptionCreate}
          onChange={(e) => {
            setDescriptionCreate(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="image src"
          value={imageCreate}
          onChange={(e) => {
            setImageCreate(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="price"
          value={priceCreate}
          onChange={(e) => {
            setPriceCreate(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="category"
          value={categoryCreate}
          onChange={(e) => {
            setCategoryCreate(e.target.value);
          }}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
};

export default DashbordMenu;
