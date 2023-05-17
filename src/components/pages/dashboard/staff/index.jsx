import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { staffActions } from "../../../../store/staffSlice";
import DashbordStaffTableBody from "./TableBody";
import DashbordStaffTableHead from "./TableHead";
import Form from "./Form";

const DashboardStaff = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.staff.data);
  const { status } = useSelector((state) => state.staff.getData);
  const { status: createData } = useSelector((state) => state.staff.createData);
  const { status: editData } = useSelector((state) => state.staff.editData);

  useEffect(() => {
    if (!status) {
      dispatch(staffActions.getData());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => dispatch(staffActions.deleteData(id));


  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    position: "",
    imageSrc: "",
    name: "",
    number: "",
    email: "",
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
      const finded = data.find((m) => m.id === formAction.id);
      setForm(finded);
    }
  }, [isOpen, formAction,data]);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const onFormSubmit = () => {
    console.log("onFormSubmit", form);
    if (formAction.name === "new") dispatch(staffActions.createData(form));
    else dispatch(staffActions.editData({data:form,id:formAction.id}));
  };


  return (
    <div>
      <table>
        <DashbordStaffTableHead />
        <DashbordStaffTableBody data={data} {...{ handleDelete, handleEdit }} />
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

export default DashboardStaff;
