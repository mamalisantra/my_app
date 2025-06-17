import { useEffect, useState } from "react";
import * as jnb from "react-bootstrap";
import axios from "axios";
export default function MyReport() {
  // ********* All states ********
  const [myData, setMyData] = useState([]);
  const [myErrMsg, setMyErrMsg] = useState("");
  const [myTable, setMyTable] = useState(false);

  // ****************GET MY TABLE API********************
  function getMyData() {
    const url = "http://172.16.118.42:9091/demoproject/myData";
    axios.get(url).then((res) => {
      if (res !== null && res !== undefined) {
        if (res?.data?.status === true) {
          setMyTable(true);
          setMyData(res?.data?.data);
          setMyErrMsg(false);
        } else {
          setMyTable(true);
          setMyData([]);
          setMyErrMsg(true);
        }
      }
    })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMyTable(true);
        setMyData([]);
        setMyErrMsg(true);
      });
  }
  useEffect(() => { getMyData(); }, [])

  return (<>
    <jnb.Row className="px-3">
      {myTable ? (<>
        <jnb.Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
          <div className="inner-herbpage-service-title-sub">
            <h3>My Report</h3>
          </div>
        </jnb.Col>
        <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          {myErrMsg ? (
            <center className="text-danger h3"> *** No Data Found *** </center>) : (<>
              <jnb.Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {myData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </jnb.Table>
            </>
          )}
        </jnb.Col>
      </>) : (<></>)}
    </jnb.Row>
  </>)
}
