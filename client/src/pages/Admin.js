import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddCompanyModal from "../components/AdminComponent/AddCompanyModal";
import EditModal from "../components/AdminComponent/EditModal";
import styles from "./../components/Data.module.css";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
export default function Admin(props) {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [type, setType] = useState("placement");
  const [error, setError] = useState(true);
  const deleteHandle = async (e) => {
    await axios.delete(`/api/${type}/delete/${e.target.id}`);

    setData((prev) => {
      return prev.filter((ele) => {
        return ele.id !== e.target.id;
      });
    });
  };
  const typeHandle = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    //  console.log(token);
    axios.get("/api/verifyToken", {
      headers: {
        "x-auth-token": token,
      },
    }).then((response) => {
      console.log(response);
      if (response.status != 200) {
        console.log(response.status)
        navigate("/admin_login");
      }
      // console.log(response);
    });
  });

  useEffect(() => {
    axios
      .get(`/api/${type}/all_companies`)
      .then((response) => {
        setData(response.data);
      });
  }, [type]);

  return (
    <Container sm={12} md={6}>
      <Form.Select
        className="m-3"
        style={{ width: "50%" }}
        value={type}
        onChange={typeHandle}
        aria-label="Default select example"
      >
        <option value="placement">Placement</option>
        <option value="internship">Internship</option>
      </Form.Select>

      <AddCompanyModal show={modalShow} onHide={() => setModalShow(false)} />
      <Button
        variant="outline-primary m-3 align-self-end"
        onClick={() => setModalShow(true)}
      >
        Add New
      </Button>
      <Row>
        <>
          {data.map((comp) => {
            return (
              <>
                <Container>
                  <Row>


                    <Col>

                      <h1 className={styles.comp_name}>{comp.company_name}</h1>

                    </Col>
                    <Col>

                      <img
                        style={{ width: "20%" }}
                        src={comp.logo}
                        alt="logo"
                        draggable={false}
                      />
                    </Col>
                    {Object.keys(comp).map((e, i) => {
                      if (
                        e === "logo" ||
                        e === "_id" ||
                        e === "__v" ||
                        e === "company_name"
                      ) {
                        return <></>;
                      }



                      // return (
                      // <div>
                      //   <h3
                      //     style={{
                      //       textTransform: "capitalize",
                      //       textAlign: "center",
                      //     }}
                      //   >
                      //     {e}
                      //   </h3>
                      //   {typeof comp[e] === "object" ? (
                      //     Object.keys(comp[e]).map((x, idx) => {
                      //       return <div>{comp[e][x]}</div>;
                      //     })
                      //   ) : (
                      //     <div>{comp[e]}</div>
                      //   )}
                      // </div>
                      //   <></>
                      // );
                    })}
                    <Col>

                      <Button
                        variant="outline-danger mx-2 "
                        id={comp._id}
                        onClick={() => deleteHandle}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </>
            );
          })}
        </>
      </Row>
    </Container>
  );
}
