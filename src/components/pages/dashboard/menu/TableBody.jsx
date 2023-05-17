const DashbordMenuTableBody = ({ meal, handleDelete, handleEdit }) => {
  return (
    <tbody>
          {meal?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.image}</td>
                <td>{item.position}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
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
  );
};
 
export default DashbordMenuTableBody;
