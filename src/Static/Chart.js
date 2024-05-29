import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (data) {
      // Convert 'Attendance' from string to number
      const modifiedData = data.map(item => ({
        ...item,
        Attendance: parseFloat(item.Attendance.replace("%", "")), // Assuming 'Attendance' is like '97%'
      }));
      setUser(modifiedData);
    }
  }, [data]);
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip text-white bg-gray-800 rounded-lg px-3 py-1">
          <p className="label">{`Sem: ${label}`}</p>
          <p className="label">{`${payload[0].dataKey}: ${payload[0].value}`}</p>
          <p className="label">{`${payload[1].dataKey}: ${payload[1].value}`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="mx-auto flex  justify-center items-center ">
      <ResponsiveContainer width="50%" height={400} >
        <ComposedChart
          data={user} // Use 'user' state that now holds the converted data
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
          <XAxis dataKey="sem" />
          <YAxis
            yAxisId="CGPA"
            label={{ value: "CGPA", angle: -90, position: "insideLeft" }}
          />
          <YAxis
            yAxisId="Attendance"
            orientation="right"
            label={{
              value: "Attendance (%)",
              angle: 90,
              position: "insideRight",
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            style={{ backgroundColor: "gold" }}
          />
          <Legend />

          <Area
            yAxisId="Attendance"
            type="monotone"
            dataKey="Attendance"
            stroke="yellow"
            width={40}
            fill="teal"
            fillOpacity={0.6}
          />

          <Line
            yAxisId="CGPA"
            type="monotone"
            dataKey="CGPA"
            stroke="red"
            activeDot={{ r: 8 }}
          />
        </ComposedChart>
      </ResponsiveContainer>


    </div>
  );
}
