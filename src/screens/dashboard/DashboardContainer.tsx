import React, { Fragment, useState } from "react";
import { Header, Loader, Select, Table } from "semantic-ui-react";
import api from "../../commons/api";
import SERVICES from "./helpers/services";

import { LOCATION_DROPDOWN } from "./helpers/static";
import { SCORE_DATA } from "./helpers/types";
import normalizeScoreData from "./helpers/utils";

function DashboardContainer() {
  const [selectedCountry, updateSelectedCountry] = useState<string>("");
  const [isLoadingScores, updateIsLoadingScores] = useState<boolean>(false);
  const [scoreList, updateScoreList] = useState<null | SCORE_DATA[]>(null);

  const getScores = async (value: string) => {
    updateIsLoadingScores(true);
    try {
      const { data } = await api.get(`${SERVICES.GET_SCORES}/${value}`);
      console.log("data: ", data);
      updateScoreList(normalizeScoreData(data));
    } catch (err) {}
    updateIsLoadingScores(false);
  };

  const onDropdownItemChange = (e: any, { value }: any) => {
    updateSelectedCountry(value);
    getScores(value);
  };

  const getImpactTable = () => {
    if (!scoreList) return null;

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>State</Table.HeaderCell>
            <Table.HeaderCell>Emotions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {scoreList.map((score) => {
          return (
            <Table.Body>
              <Table.Row>
                <Table.Cell>{score.provinceName}</Table.Cell>
                <Table.Cell>{score.score}</Table.Cell>
              </Table.Row>
            </Table.Body>
          );
        })}
      </Table>
    );
  };

  if (isLoadingScores) {
    return <Loader size="medium" active />;
  }

  return (
    <Fragment>
      <Header as="h1">Select a location to see the impact of Covid19.</Header>
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
