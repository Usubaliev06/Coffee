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
          placeholder="image src"
          value={form.imageSrc}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="position"
          name="position"
          value={form.position}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="phone"
          name="number"
          value={form.number}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <button onClick={onSubmit}>Create</button>
      </div>
  );
};

export default Form;
