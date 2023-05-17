import React, { useEffect, useState } from "react";
import css from "../Dashboard.module.css";

import { menuActions } from "../../../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import DashboardMenuTableHead from "./TableHead";
import DashboardMenuTableBody from "./TableBody";
import Form from "./Form";

const DashbordMenu = () => {
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu.menu);
  const meal = useSelector((state) => state.menu);

  const [category, setCategory] = useState(menu);

  const { status: createMenu } = useSelector((state) => state.menu.createMenu);

  const { status: editMenu } = useSelector((state) => state.menu.editMenu);

  const { status: deleteMenuStatus } = useSelector(
    (state) => state.menu.deleteMenu
  );

// ///////////////////////////////////////////////

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

  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    description: "",
    image: null,
    name: "",
    price: "",
    category: "",
  });

  const [formAction, setFormAction] = useState({ name: "new", id: null });

  const handleEdit = (id) => {
    setIsOpen(true);
    setFormAction({ name: "edit", id });
  };
  const handleCreate = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen && formAction.name === "edit") {
      const finded = meal[category].find((m) => m.id === formAction.id);
      setForm(finded);
    }
  }, [isOpen, formAction, meal, category]);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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

  const onFormSubmit = () => {
    console.log("onFormSubmit", form);
    if (formAction.name === "new") dispatch(menuActions.createMenu(form));
    else dispatch(menuActions.editMenu({data:form,id:formAction.id}));
  };

  return (
    <div>
      <h1>All</h1>
      <Select options={options} onChange={handleSubmit} />
      <table>
        <DashboardMenuTableHead />
        <DashboardMenuTableBody
          meal={meal[category]}
          {...{ handleDelete, handleEdit }}
        />
      </table>
      <button onClick={() => setIsOpen(true)}>Modal</button>
      {isOpen && (
        <Form
          form={form}
          onChange={onChange}
          onClose={() => setIsOpen(false)}
          onSubmit={onFormSubmit}
        />
      )}
    </div>
  );
};

export default DashbordMenu;
