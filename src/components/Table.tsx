export const TableData = ({search} : any) => {
    console.log(search);
  return (
    <>
      {search.length ? (
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
            {search.map((e: any, index: number) => {
                return (
                    <tbody>
                    <tr>
                      <td>{e.name}</td>
                      <td>100%</td>
                      <td>{e.drugClasses}</td>
                      <td>{e.description}</td>
                      <td>{e.medicalCondition}</td>
                    </tr>
                  </tbody>
                )
            })}
          </table>
        </div>
      ) : <></>}
    </>
  );
};
