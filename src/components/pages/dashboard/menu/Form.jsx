import css from "../Dashboard.module.css";

const Form = ({ form, onChange, onClose, onSubmit }) => {
  return (
      <div className={css.formWrapper}>
        <button onClick={onClose}>Close</button>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={form.description}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="imageSrc"
          value={form.imageSrc}
          onChange={onChange}
          name="imageSrc"
        /> 
        <input
          type="text"
          placeholder="price"
          name="price"
          value={form.price}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="category"
          name="category"
          value={form.category}
          onChange={onChange}
        />
        <button onClick={onSubmit}>Create</button>
      </div>
  );
};

export default Form;
