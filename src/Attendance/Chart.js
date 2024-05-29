import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  PieChart,
  Pie,
} from "recharts";

function Chart() {
  const data = [
    {
      name: "<20%",
      SecA: 20,
      SecB: 15,
      amt: 20,
    },
    {
      name: "(20-40)%",
      SecA: 20,
      SecB: 18,
      amt: 20,
    },
    {
      name: "(40-60)%",
      SecA: 50,
      SecB: 40,
      amt: 20,
    },
    {
      name: "(60-75)%",
      SecA: 30,
      SecB: 40,
      amt: 20,
    },
    {
      name: ">75%",
      SecA: 50,
      SecB: 55,
      amt: 20,
    },
  ];
  const secAData = [
    { name: "<20%", value: 20 },
    { name: "(20-40)%", value: 30 },
    { name: "(40-60)%", value: 50 },
    { name: "(60-75)%", value: 30 },
    { name: ">75%", value: 50 },
  ];
  const secBData = [
    { name: "<20%", value: 15 },
    { name: "(20-40)%", value: 18 },
    { name: "(40-60)%", value: 40 },
    { name: "(60-75)%", value: 40 },
    { name: ">75%", value: 55 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#EA4335"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      {/* vipin */}
      <div className="flex mx-auto justify-center gap-4 mt-10 items-center flex-wrap">
        <div className="border-2  p-3 py-14  bg-gray-100 ">
          <BarChart
            width={500}
            height={240}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend fontSize={""} />
            <Bar
              dataKey="SecA"
              // fill="#"
              fill="#82ca9d"
              // fill="gold"
              activeBar={<Rectangle fill="#82cf7d" stroke="purple" />}
            />
            <Bar
              dataKey="SecB"
              fill="#8884d8"
              activeBar={<Rectangle fill="#8884f8" stroke="blue" />}
            />
          </BarChart>
        </div>

        <div className="border-2  p-3 rounded-md flex flex-col items-center bg-slate-300  ">
          <PieChart width={400} height={300}>
            <Pie
              data={secAData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              activeBar
            >
              {secAData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <h1 className=" font-bold text-2xl text-deepBlue ">Section A</h1>
        </div>

        <div className="border-2  p-3 flex flex-col items-center rounded-md bg-slate-300  ">
          <PieChart width={400} height={300}>
            <Pie
              data={secBData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              activeBar
            >
              {secBData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <h1 className=" font-bold text-2xl text-deepBlue ">Section B</h1>
        </div>
      </div>
    </div>
  );
}

export default Chart;
