import React, { Fragment, useState } from "react";
import { Select, Table } from "semantic-ui-react";

import { LOCATION_DROPDOWN } from "./helpers/static";

function DashboardContainer() {
  const [selectedCountry, updateSelectedCountry] = useState("");

  const onDropdownItemChange = (e: any, { value }: any) => {
    updateSelectedCountry(value);
  };

  const getImpactTable = () => {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>State</Table.HeaderCell>
            <Table.HeaderCell>Emotions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>State Name</Table.Cell>
            <Table.Cell>Emotion #1</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  };

  return (
    <Fragment>
      <Select
        placeholder={LOCATION_DROPDOWN.PLACEHOLDER}
        options={LOCATION_DROPDOWN.ITEMS}
        value={selectedCountry}
        onChange={onDropdownItemChange}
        fluid
      />
      {getImpactTable()}
    </Fragment>
  );
}

export default DashboardContainer;
