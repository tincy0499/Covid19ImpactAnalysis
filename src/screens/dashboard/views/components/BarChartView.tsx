import React from 'react';
import PropTypes from "prop-types";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
} from "recharts";
import { BAR_LABEL, DASHBOARD_CONTENT, EMOTIONS_EMOJI, EMOTION_BAR_COLORS } from '../../helpers/static';
import "../styles/BarChartViewStyles.scss";
import Emoji from '../../../../components/EmojiContainer';

const BarChartView = ({ data }: any) => {

  const renderCustomAxisTick = ({ x, y, payload }) =>
    <Emoji x={x} y={y} symbol={EMOTIONS_EMOJI[payload.value]} label={payload.value} />

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
          <XAxis dataKey={BAR_LABEL.NAME} tick={renderCustomAxisTick} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={BAR_LABEL.EMOTION}>
            {
              data.map((entry, index) => {
                console.log(entry);
                return (
                  <Cell key={`cell-${index}`} fill={EMOTION_BAR_COLORS[entry.name]} />
                )
              })
            }
          </Bar>
        </BarChart>
      ) : <div>{DASHBOARD_CONTENT.SELECT_PROVINCE}</div>}
    </div>
  );
};

BarChartView.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]),
}

export default BarChartView;
