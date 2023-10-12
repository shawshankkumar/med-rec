export const TableData = (data: any) => {
  return (
    <div className="overflow-x-auto my-24">
      <table className="table table-ls table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <td>Drug Name</td>
            <td>Match Percentage</td>
            <td>Drug Class</td>
            <td>Description</td>
            <td>Medical Condition</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16a</td>
            <td>Reid Semiras</td>
            <td>Teacher</td>
            <td>Sporer, Sipes and Rogahn</td>
            <td>Sporer, Sipes and Rogahn</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
