import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import { BAR_LABEL, DASHBOARD_CONTENT } from '../../helpers/static';
import "../styles/BarChartViewStyles.scss";

const BarChartView = ({ data }: any) => {
  console.log('data:', data);

  return (
    <div className="bar-chart-view__container">
      {data ? (
        <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={BAR_LABEL.NAME} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={BAR_LABEL.EMOTION} fill="#8884d8" />
      </BarChart>
      ) : <div>{DASHBOARD_CONTENT.SELECT_PROVINCE}</div>}
    </div>
  );
};

BarChartView.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]),
}

export default BarChartView;
