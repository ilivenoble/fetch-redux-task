import React from "react";
import { covidApi } from "./services/covidData";

export const Covid = () => {
  const { data, error, isLoading } = covidApi.endpoints.getCovidData.useQuery();

  return (
    <main>
      {error ? (
        <div className="error-div">
          <h3 className="error-message">Oh no, there was an error</h3>
        </div>
      ) : isLoading ? (
        <div className="loading-div">
          <h3 className="loading">Loading...</h3>
        </div>
      ) : data ? (
        <div>
          <div>
            <h1>Summary of Nigerian Covid Data</h1>
            <h3>
              Total Sample Tested: <span>{data.data.totalSamplesTested}</span>
            </h3>
            <h3>Total Confirmed Case:<span>{data.data.totalConfirmedCases}</span></h3>
            <h3>Total Active Cases: <span>{data.data.totalActiveCases}</span></h3>
            <h3>Discharged: <span>{data.data.discharged}</span></h3>
            <h3>Death: <span>{data.data.death}</span></h3>
          </div>
          <h2 className="states-breakdown">
            Breakdown of Covid Data by States
          </h2>
          <table>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Admission</th>
              <th>Discharged</th>
              <th>Death</th>
            </tr>
            {data.data.states.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.state}</td>
                  <td>{item.confirmedCases}</td>
                  <td>{item.casesOnAdmission}</td>
                  <td>{item.discharged}</td>
                  <td>{item.death}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : null}
    </main>
  );
};

