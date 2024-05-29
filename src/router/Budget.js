import React from "react";
import Graph from "../components/Graph";
import Form from "../components/Form";

function Budget() {
  return (
    <div className="bg-white budget min-h-[100vh]">
      <h1 className="text-4xl text-center py-8 mb-10 bg-slate-800 text-white">
        Expense Tracker
      </h1>
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* charts */}
          <Graph></Graph>
          {/* form */}
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default Budget;
