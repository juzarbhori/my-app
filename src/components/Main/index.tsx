

import React from 'react';
import CustomTable from '../common/CustomTable/CustomTable'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class HomeScreen extends React.Component<any, {
  dateData: string,
  billReference: string,
  amount:number,
  dataTable:any
}> {
  constructor(props: any) {
    super(props);
    this.state = {
      dateData: '',
      billReference: '',
      amount:0,
      dataTable: [] 
    }
  }

  handleSubmit = () =>{
    const {dateData,billReference,amount,dataTable} =this.state;
    let dataT = [...dataTable];
    dataT.push({dateData:dateData,billReference:billReference,amount:amount});

    this.setState({
      dataTable:dataT,
      dateData:'',
      billReference:'',
      amount:0
    })
    
  }
  removeData = (index:any) => {
    const {dataTable} =this.state;
    let dataR = [...dataTable];
    dataR.splice(index, 1);
    this.setState({
      dataTable:dataR
    })
  }
  handleInputChange = (event: any, key: any) => {
    const value: any = event.target.value;
    let setObj: any = {};
    setObj[key] = value;
    console.log(setObj)
    this.setState(setObj)
  }
  renderForm = () => {
    const {dateData,billReference,amount } = this.state;
    return (
      <div >

        <TextField
          value={dateData}
          label=""
          type="text"
          margin="normal"
          variant="outlined"
          placeholder="Enter date"
          fullWidth
          className="custom-input"
          name="date"
          onChange={(event) =>
            this.handleInputChange(event, "dateData")
        }
        />
        <TextField
          value={billReference}
          label=""
          type="text"
          margin="normal"
          variant="outlined"
          placeholder="Enter Bill refence"
          fullWidth
          className="custom-input  "
          name="bill_reference"
          data-id="bill_reference"
          onChange={(event) =>
            this.handleInputChange(event, "billReference")
        }
        />
        <TextField
          value={amount}
          label=""
          type="number"
          margin="normal"
          variant="outlined"
          placeholder="Enter Amount"
          fullWidth
          className="custom-input  "
          name="amount"
          onChange={(event) =>
            this.handleInputChange(event, "amount")
        }
        />
        <Button className="custom-primary-button" onClick={() => this.handleSubmit()}>Proceed</Button>
      </div>
    )
  }


  render() {
    const COL_REFER = [
      { title: "Date", field: "dateData" },
      { title: "Bill reference", field: "billReference" },
      { title: "Amount", field: "amount" },
    ];
    let dataDump = this.state.dataTable;
    // const dataDump  = [{ name:"Juzar" },{ name:"BHORI" }];

    // console.log(dataDump)

    return (
<>
      <this.renderForm />



      <CustomTable options={
        {
          paginationType: "stepped",
          search: false,
          paging: true,
          filtering: false,
          showTitle: false,
          toolbar: true,
          pageSize: 50,
        }
      }
        columns={
          COL_REFER
        }

        data={
          dataDump
        }
        actions={[
          {
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event:any, rowData:any) => { this.removeData(rowData.tableData.id) }
          }
        ]}
      />
</>

    );
  }


}

export default HomeScreen;