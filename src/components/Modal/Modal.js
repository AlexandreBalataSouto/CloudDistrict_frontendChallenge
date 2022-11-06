import { useState } from "react";
import axios from "axios";
import "./Modal.css";

//Base on the action (Check,Create or Edit) we display a different information and elements
const Modal = ({
  id,
  avatar,
  first_name,
  last_name,
  email,
  toggleModal,
  action,
}) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [isRequired, setIsRequired] = useState(false); //Used it in create form
  let mesg = ""; //Message for display Create and Edit

  if (action === "Edit" && name === "") {
    setName(first_name + " " + last_name);
  }
  if (action === "Edit" && job === "") {
    setJob("Job");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && job && action === "Create") {
      axios
        .post(process.env.REACT_APP_API_REGRES + "api/users", {
          name: name,
          job: job,
        })
        .then((response) => {
          console.log(response);
          mesg = `User created: id:${response.data.id}, name:${response.data.name}, job:${response.data.job}, status:${response.status}`;
          alert(mesg);
          toggleModal();
        })
        .catch((error) => {
          alert("Failed to create user");
        });
    } else if ((name || job) && action === "Edit") {
      axios
        .put(process.env.REACT_APP_API_REGRES + `api/users/${id}`, {
          name: name,
          job: job,
        })
        .then((response) => {
          console.log(response);
          mesg = `User edited: name:${response.data.name}, job:${response.data.job}, status:${response.status}`;
          alert(mesg);
          toggleModal();
        })
        .catch((error) => {
          alert("Failed to edit user");
        });
    }
    setIsRequired(true);
  };

  return (
    <div className="Modal">
      <div className="modal-content">
        <span className="close" onClick={() => toggleModal()}>
          &times;
        </span>
        {/**Check */}
        {action === "Check" && (
          <div className="modal_check">
            <img src={avatar} alt="userAvatar" />
            <div>
              <p>
                <strong>First name: </strong>
                {first_name}
              </p>
              <p>
                <strong>Last name: </strong>
                {last_name}
              </p>
              <p>
                <strong>Email: </strong>
                {email}
              </p>
            </div>
          </div>
        )}
        {/**END Check */}
        {/**Create */}
        {action === "Create" && (
          <form onSubmit={handleSubmit} className="modal_form">
            {isRequired && name === "" && (
              <span className="modal_form-alert">Name is mandatory</span>
            )}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {isRequired && job === "" && (
              <span className="modal_form-alert">Job is mandatory</span>
            )}
            <div>
              <label htmlFor="job">Job</label>
              <input
                type="text"
                name="job"
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        )}
        {/**END Create */}
        {/**Edit */}
        {action === "Edit" && (
          <form onSubmit={handleSubmit} className="modal_form">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={first_name + " " + last_name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="job">Job</label>
              <input
                type="text"
                name="job"
                defaultValue={"Job"}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        )}
        {/**END Edit */}
      </div>
    </div>
  );
};

export default Modal;
