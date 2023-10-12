import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  process.env.uri,
  neo4j.auth.basic(process.env.user, process.env.pass)
);
const session = driver.session();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const medicine = searchParams.get("name");
  const result = await session.run(
    `MATCH (d:Drug) 
    WHERE toLower(d.name)=toLower("${medicine}")
    MATCH (d)-[r:TREATS]->(m:MedicalCondition)<-[r1:TREATS]-(drug:Drug)
    WHERE d <> drug
    WITH d, m, drug, [x IN d.drugClasses WHERE x IN drug.drugClasses] AS commonClasses
    RETURN d as searchQuery, drug as result, m.name as medicalCondition
    ORDER BY SIZE(commonClasses) DESC`,
    { name: medicine }
  );
  const data = result.records.map((record) => {
    return {
        name: record._fields[1].properties.name,
        description: record._fields[1].properties.description,
        drugClasses: record._fields[1].properties.drugClasses[0],
        medicalCondition: record._fields[2],
    }
  });
  return Response.json({ message: "ok", data });
}
