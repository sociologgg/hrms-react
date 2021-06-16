import { useState, useEffect } from "react";
import JobAdtsService from "../services/jobAdtsService";
import { Link } from "react-router-dom";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

export default function JobAdtList(params) {
  const [jobAdts, setJobAdts] = useState([]);

  useEffect(() => {
    let jobAdtService = new JobAdtsService();
    jobAdtService.getJobAdts().then((result) => setJobAdts(result.data.data));
    console.log(jobAdts);
  }, []);
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Şirket adı</Table.HeaderCell>
          <Table.HeaderCell>Pozisyon</Table.HeaderCell>
          <Table.HeaderCell>Açıklama</Table.HeaderCell>
          <Table.HeaderCell>Şehir</Table.HeaderCell>
          <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
          <Table.HeaderCell>Maaş</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {jobAdts.map((jobadt) => (
          <Table.Row key={jobadt.id}>
            <Table.Cell>{jobadt.employer.companyName}</Table.Cell>
            <Table.Cell>{jobadt.profession.professionName}</Table.Cell>
            <Table.Cell>{jobadt.description}</Table.Cell>
            <Table.Cell>{jobadt.city.name}</Table.Cell>
            <Table.Cell>{jobadt.publishedAt}</Table.Cell>
            <Table.Cell>{jobadt.maxSalary}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
