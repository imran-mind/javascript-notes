import './App.css';
import Table from './Components/Table/Table';

function DemoTable() {
    const data = [
        {
          Name: "Anssam",
          State: "MP",
          Country:"India",
          Age: "20"
        },
        {
          Name: "Rihab",
          State: "MP",
          Country:"India",
          Age: "12"
        },
        {
          Name: "Amir",
          State: "MP",
          Country:"India",
          Age: "3",
        },
      ];
  return (
    <div className="App">
        <Table
            data={data}
            theme={Table.THEME.LIGHT}
            density={Table.DENSITY.AVERAGE}
        >
        </Table>

    </div>
  );
}

export default DemoTable;
