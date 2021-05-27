

import React from 'react';
import CustomTable from '../common/CustomTable/CustomTable'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from "@material-ui/core/Icon";

class HomeScreen extends React.Component<any, {
  name: string,
  dataTable:any
}> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      dataTable: [] 
    }
  }

  handleSubmit = () =>{
    const {name,dataTable} =this.state;
    let dataT = [...dataTable];
    dataT.push({name:name});

    this.setState({
      dataTable:dataT,
      name:''
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
    this.setState({
      name:value,
    })
  }
  renderForm = () => {
    const {name} = this.state;
    return (
      <div >

        <TextField
          value={name}
          label=""
          type="text"
          margin="normal"
          variant="outlined"
          fullWidth
          className="custom-input disabled "
          name="company_name"
          data-id="company_name"
          onChange={(event) =>
            this.handleInputChange(event, "lastName")
        }
        />
        <Button className="custom-primary-button" onClick={() => this.handleSubmit()}>Proceed</Button>
      </div>
    )
  }


  render() {
    const COL_REFER = [
      { title: "Name", field: "name" },
    ];
    let dataDump = this.state.dataTable;
    // const dataDump  = [{ name:"Juzar" },{ name:"BHORI" }];

    console.log(dataDump)

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