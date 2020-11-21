import React, { Fragment, useState } from "react";
import { Button, Header, Loader, Select, Table } from "semantic-ui-react";
import classnames from 'classnames';

import api from "../../commons/api";
import SERVICES from "./helpers/services";
import { BAR_LABEL, DASHBOARD_CONTENT, LOCATION_DROPDOWN } from "./helpers/static";
import { EMOTION_DATA, PROVINCE_SCORE, SCORE_DATA, SCORE_DATA_API } from "./helpers/types";
import { normalizeScoreData } from "./helpers/utils";
import BarChartView from "./views/components/BarChartView";
import "./views/styles/DashboardStyles.scss";

function DashboardContainer() {
  const [selectedCountry, updateSelectedCountry] = useState<string>("");
  const [isLoadingScores, updateIsLoadingScores] = useState<boolean>(false);
  // ToDo: undefined should not be a valid type. update this when it is handled in getScores method.
  const [scoreList, updateScoreList] = useState<null | undefined | SCORE_DATA[]>(null);
  const [barChartData, updateBarChartData] = useState<null | PROVINCE_SCORE[]>(null);
  const [selectedProvince, updateSelectedProvince] = useState("");

  const getScores = async () => {
    updateIsLoadingScores(true);
    try {
      const { data } = await api.get(`${SERVICES.GET_SCORES_MOCKY}/${selectedCountry}`);
      updateScoreList(normalizeScoreData(data));
    } catch (err) {
      // ToDo: handle api failure
    }
    updateIsLoadingScores(false);
  };

  const onDropdownItemChange = (e: any, { value }: any) => {
    updateSelectedCountry(value);
  };

  const onSubmitClick = () => {
    getScores();
  };

  const onStateClick = (score: SCORE_DATA) => {
    return () => {
      const chartData = [];
      chartData.push({ name: "Joy", Emotion: score.joyScore });
      chartData.push({ name: "Sadness", Emotion: score.sadnessScore });
      chartData.push({ name: "Fear", Emotion: score.fearScore });
      updateBarChartData(chartData);
      updateSelectedProvince(score.provinceName)
    };
  };

  const getImpactView = () => {
    if (!scoreList) {
      return null;
    }

    return (
      <Fragment>
        <BarChartView data={barChartData} />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>State</Table.HeaderCell>
              <Table.HeaderCell>Emotion</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {scoreList.map((score) => {
            return (
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <div
                      onClick={onStateClick(score)}
                      className={classnames({ "dashboard__province-button": true, "dashboard__province-button-selected": selectedProvince === score.provinceName })}
                    >
                      {score.provinceName}
                    </div>
                  </Table.Cell>
                  <Table.Cell>{score.score}</Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
        </Table>
      </Fragment>
    );
  };

  if (isLoadingScores) {
    return <Loader size="huge" active />;
  }

  return (
    <Fragment>
      <Header as="h1">{DASHBOARD_CONTENT.LOCATION_HEADER}</Header>
      <form onSubmit={onSubmitClick}>
        <Select
          placeholder={LOCATION_DROPDOWN.PLACEHOLDER}
          options={LOCATION_DROPDOWN.ITEMS}
          value={selectedCountry}
          onChange={onDropdownItemChange}
          className="dashboard__location-select"
          fluid
          search
        />
        <Button
          primary
          disabled={!selectedCountry}
        >
          {DASHBOARD_CONTENT.SUBMIT_BUTTON}
        </Button>
      </form>
      {getImpactView()}
    </Fragment>
  );
}

export default DashboardContainer;
