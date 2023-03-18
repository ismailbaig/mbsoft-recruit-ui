import React from "react";
import "./Marks.css";
import data from "../../studentsdata/marksdata.json";

export const Marks = () => {
  return (
    <section>
      <div
        className="container"
        style={{ marginTop: "7rem", marginBottom: "2rem" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div>
              <div style={{ float: "left" }}>
                <span>
                  <b>Name :</b>
                </span>{" "}
                {data.name}
              </div>
              <br />
              <div style={{ float: "left" }}>
                <span>
                  <b>Roll No :</b>
                </span>{" "}
                {data.rollno}
              </div>
              <div class="container table-responsive py-5">
                <table class="table table-bordered table-hover">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Marks</th>
                      <th scope="col">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.marksdetails.map((marksdetail, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{marksdetail.subject}</td>
                        <td>{marksdetail.marks} / 100</td>
                        <td
                          className={
                            marksdetail.result == "PASS" ? "pass" : "fail"
                          }
                        >
                          <b>{marksdetail.result}</b>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ display: "none" }}>
              <div>Name : {data.name}</div>
              <div>Email : {data.email}</div>
              <div>Website : {data.website}</div>
              <div>
                <label>Country :</label>
                <select>
                  {data.country.map((country) => {
                    return (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
