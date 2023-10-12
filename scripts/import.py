import csv
from neo4j import GraphDatabase

drugs = {}


def removeWhiteSpace(x): return x.strip()


# open the CSV file
with open('../project_data/drugs_side_effects_drugs_com.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        drugs[row["drug_name"]] = {
            "medical_condition": row['medical_condition'],
            "drug_classes": list(map(removeWhiteSpace, row['drug_classes'].split(','))),
            "description": row['medical_condition_description'],
        }

driver = GraphDatabase.driver(
    "neo4j+s://xx.xx.neo4j.io", auth=("neo4j", "xxx"))

# define a function to create a node


def create_nodes(tx, drugName, medicalCondition, drugClasses, description):
    result = tx.run("CREATE (d:Drug {name: $name, drugClasses: $drugClasses, description: $description}) RETURN ID(d) as id",
                    name=drugName, drugClasses=drugClasses, description=description)
    id = result.single()["id"]
    tx.run(
        "MATCH (d:Drug) WHERE ID(d)=$id MERGE (m:MedicalCondition {name: $name}) CREATE (d)-[r:TREATS]->(m)", id=id, name=medicalCondition)


for key, value in drugs.items():
    with driver.session() as session:
        session.execute_write(
            create_nodes, key, drugs[key]["medical_condition"], drugs[key]["drug_classes"], drugs[key]["description"])
driver.close()
