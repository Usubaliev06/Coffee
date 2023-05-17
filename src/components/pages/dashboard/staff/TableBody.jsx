const DashbordStaffTableBody = ({ data, handleDelete, handleEdit }) => {
  return (
    <tbody>
      {data?.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.image}</td>
            <td>{item.position}</td>
            <td>{item.number}</td>
            <td>{item.email}</td>
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
  );
};

export default DashbordStaffTableBody;
