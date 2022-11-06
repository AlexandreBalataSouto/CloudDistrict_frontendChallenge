import "./UserList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";

const UserList = () => {
  const [users, setUser] = useState([]); //For display the users in the table
  const [data, setData] = useState({}); //Used it in getPagination()
  const [modalInfo, setModalInfo] = useState({}); //Used it to pass data to the modal
  const [showModalInfo, setShowModalInfo] = useState(false); //toggleModal()
  const [action, setAction] = useState(""); //Actions (Check, Create and Edit)

  //Get users data, set the page we want to display and the total pages
  const getUsers = async (page) => {
    axios
      .get(
        process.env.REACT_APP_API_REGRES + `api/users?page=${page}&per_page=5`
      )
      .then((response) => {
        setUser(response.data.data);
        setData(response.data);
      })
      .catch((error) => {
        alert("Fail to get data");
      });
  };

  //Base on the number of pages, generates the buttons we need to pagination
  const getPagination = () => {
    let content = [];
    for (let i = 1; i <= data.total_pages; i++) {
      if (i === data.page) {
        content.push(
          <button className="active" key={i} onClick={() => getUsers(i)}>
            {i}
          </button>
        );
      } else {
        content.push(
          <button key={i} onClick={() => getUsers(i)}>
            {i}
          </button>
        );
      }
    }
    return content;
  };

  //Get data from a specific user and set that info for pass it to the modal component plus the action that is required (Check)
  const checkUser = async (id) => {
    axios
      .get(process.env.REACT_APP_API_REGRES + `api/users/${id}`)
      .then((response) => {
        setModalInfo(response.data.data);
        setAction("Check");
        toggleModal();
      })
      .catch((error) => {
        alert("Fail to get data");
      });
  };

  //Get data from a specific user and set that info for pass it to the modal component plus the action that is required (Edit)
  const editUser = async (id) => {
    axios
      .get(process.env.REACT_APP_API_REGRES + `api/users/${id}`)
      .then((response) => {
        setModalInfo(response.data.data);
        setAction("Edit");
        toggleModal();
      })
      .catch((error) => {
        alert("Fail to get data");
      });
  };

  const toggleModal = () => {
    setShowModalInfo(!showModalInfo);
  };

  useEffect(() => {
    getUsers(1);
  }, []);

  return (
    <section className="UserList">
      {/**Modal */}
      {showModalInfo && (
        <Modal {...modalInfo} toggleModal={toggleModal} action={action}></Modal>
      )}
      {/**END Modal */}
      {/**Button Create */}
      <div className="createUser">
        <button
          onClick={() => {
            setAction("Create");
            toggleModal();
          }}
        >
          Create User
        </button>
      </div>
      {/**END Button Create */}
      {/**Users table */}
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.avatar}
                    alt="userAvatar"
                    className="table_img"
                  />
                </td>
                <td>{item.first_name + " " + item.last_name}</td>
                <td>
                  <div className="table_actions">
                    <button onClick={() => checkUser(item.id)}>Check</button>
                    <button onClick={() => editUser(item.id)}>Edit</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">{getPagination()}</div>
      {/**END Users table */}
    </section>
  );
};

export default UserList;
