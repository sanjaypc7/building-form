import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const YourComponent = () => {
  const [tableData, setTableData] = useState([
    {
      orderId: '',
      itemNr: '',
      materialId: '',
      matDescription: '',
      currentQty: '',
      previousQty: '',
      qtyDiff: '',
      orderComment: '',
      date1: '',
      date2: '',
      date3: ''
    }
  ]);

  const [remarks, setRemarks] = useState('');
  const [prefBy, setPrefBy] = useState('');
  const [chkBy, setChkBy] = useState('');
  const [approvedBy, setApprovedBy] = useState('');
  const [buildingId, setBuildingId] = useState('');
  const [buildingName, setBuildingName] = useState('');

  const handleInputChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };

  const handleAddRow = () => {
    const requiredFields = ['orderId', 'itemNr', 'materialId', 'matDescription', 'currentQty', 'previousQty', 'qtyDiff', 'orderComment'];
    const isFieldsValid = requiredFields.every((field) => tableData[tableData.length - 1][field].trim() !== '');

    if (!isFieldsValid) {
      toast.error('Please fill in all required fields in the table.');
      return;
    }

    const newRow = {
      orderId: '',
      itemNr: '',
      materialId: '',
      matDescription: '',
      currentQty: '',
      previousQty: '',
      qtyDiff: '',
      orderComment: '',
      date1: '',
      date2: '',
      date3: ''
    };

    setTableData([...tableData, newRow]);
  };

  const handleRemoveRow = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const handlePrefByChange = (event) => {
    setPrefBy(event.target.value);
  };

  const handleChkByChange = (event) => {
    setChkBy(event.target.value);
  };

  const handleApprovedByChange = (event) => {
    setApprovedBy(event.target.value);
  };

  const handleBuildingIdChange = (event) => {
    setBuildingId(event.target.value);
  };

  const handleBuildingNameChange = (event) => {
    setBuildingName(event.target.value);
  };

  return (
    <div>
      <div>
        <h1 style={{ color: 'black', fontWeight: 'bold', marginLeft: '20px' }}>Order Materials</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <form style={{ marginLeft: '20px' }}>
            <label htmlFor="orderListId">Order List ID:</label>
            <input type="text" id="orderListId" name="orderListId" style={{ width: '150px', height: '20px' }} className="form-control" />
          </form>

          <form style={{ marginLeft: '20px' }}>
            <label htmlFor="buildingId">Building ID:</label>
            <input
              style={{ height: '20px' }}
              type="text"
              id="buildingId"
              name="buildingId"
              className="form-control"
              value={buildingId}
              onChange={handleBuildingIdChange}
            />
          </form>

          <form>
            <label htmlFor="buildingName">Building Name:</label>
            <input
              style={{ height: '20px' }}
              type="text"
              id="buildingName"
              name="buildingName"
              className="form-control"
              value={buildingName}
              onChange={handleBuildingNameChange}
            />
          </form>

          <form style={{ marginRight: '20px' }}>
            <label htmlFor="buildingAddress">Building Address:</label>
            <input type="text" id="buildingAddress" name="buildingAddress" className="form-control" style={{ width: '150px', height: '20px' }} />
          </form>
        </div>

        <form style={{ marginLeft: '20px' }}>
          <label htmlFor="orderDescription">Order Description:</label>
          <textarea id="orderDescription" name="orderDescription" className="form-control" style={{ width: '500px' }} />
        </form>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="table table-hover" style={{ marginTop: '20px' }}>
          <thead>
            <tr className="table-warning">
              <th>Order ID</th>
              <th>Item Nr</th>
              <th>Material ID</th>
              <th>Mat. Description</th>
              <th>Current Qty</th>
              <th>Previous Qty</th>
              <th>Qty Diff</th>
              <th>Order Comment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr className="table-warning" key={index}>
                <td>
                  <input

                    className="form-control"
                    type="text"
                    value={row.orderId}
                    onChange={(e) => handleInputChange(index, 'orderId', e.target.value)}
                    style={{ width: '80px', height: '20px' }}
                    required={index === tableData.length - 1}
                  />
                </td>
                <td>
                  <input
                    style={{ height: '20px' }}
                    className="form-control"
                    type="text"
                    value={row.itemNr}
                    onChange={(e) => handleInputChange(index, 'itemNr', e.target.value)}
                    required={index === tableData.length - 1}
                  />
                </td>
                <td>
                  <input

                    className="form-control"
                    type="text"
                    value={row.materialId}
                    onChange={(e) => handleInputChange(index, 'materialId', e.target.value)}
                    style={{ width: '120px', height: '20px' }}
                    required={index === tableData.length - 1}
                  />
                </td>
                <td>
                  <input
                    style={{ height: '20px' }}
                    className="form-control"
                    type="text"
                    value={row.matDescription}
                    onChange={(e) => handleInputChange(index, 'matDescription', e.target.value)}
                    required={index === tableData.length - 1}
                  />
                </td>
                <td>
                  <input
                    style={{ height: '20px' }}
                    className="form-control"
                    type="text"
                    value={row.currentQty}
                    onChange={(e) => handleInputChange(index, 'currentQty', e.target.value)}
                    required={index === tableData.length - 1}
                  />
                </td>
                <td>
                  <input
                    style={{ height: '20px' }}
                    className="form-control"
                    type="text"
                    value={row.previousQty}
                    onChange={(e) => handleInputChange(index, 'previousQty', e.target.value)}
                    required={index === tableData.length - 1}
                  />
                </td>
                <td>
                  <input
                    style={{ height: '20px' }}
                    className="form-control"
                    type="text"
                    value={row.qtyDiff}
                    onChange={(e) => handleInputChange(index, 'qtyDiff', e.target.value)}
                    required={index === tableData.length - 1}
                  />
                </td>
                <td>
                  <input
                    style={{ height: '20px' }}
                    className="form-control"
                    type="text"
                    value={row.orderComment}
                    onChange={(e) => handleInputChange(index, 'orderComment', e.target.value)}
                    required={index === tableData.length - 1}
                  />
                </td>
                <td>
                  {index === tableData.length - 1 ? (
                    <button className="btn btn-success" onClick={handleAddRow} style={{ height: '50px' }}>Add</button>
                  ) : (
                    <button className="btn btn-danger" onClick={() => handleRemoveRow(index)}>Remove</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginLeft: '20px' }}>
        <label htmlFor="remarks">Remarks:</label>
        <input

          className="form-control"
          type="text"
          id="remarks"
          name="remarks"
          value={remarks}
          onChange={handleRemarksChange}
          style={{ width: '500px', height: '20px' }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
        <div style={{ marginRight: '20px', marginLeft: '20px' }}>
          <label htmlFor="prefBy">Pref. By:</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="prefBy"
            name="prefBy"
            value={prefBy}
            onChange={handlePrefByChange}
            style={{ width: '200px', height: '20px' }}
          />
        </div>
        <div style={{ marginRight: '20px' }}>
          <label htmlFor="approvedBy">Approved By:</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="approvedBy"
            name="approvedBy"
            value={approvedBy}
            onChange={handleApprovedByChange}
            style={{ width: '200px', height: '20px' }}
          />
        </div>
        <div style={{ marginRight: '20px' }}>
          <label htmlFor="chkBy">Chk. By:</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="chkBy"
            name="chkBy"
            value={chkBy}
            onChange={handleChkByChange}
            style={{ width: '200px', height: '20px' }}
          />
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>Building ID:</label>
          <br />
          <span style={{ width: '200px', display: 'inline-block', border: '1px solid #ccc', padding: '5px' }}>
            {buildingId}
          </span>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>Building Name:</label>
          <br />
          <span style={{ width: '200px', display: 'inline-block', border: '1px solid #ccc', padding: '5px' }}>
            {buildingName}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
        <div style={{ marginRight: '20px', marginLeft: '20px' }}>
          <label htmlFor="date1">Date :</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="date1"
            name="date1"
            value={tableData[0].date1}
            onChange={(e) => handleInputChange(0, 'date1', e.target.value)}
            style={{ width: '200px', height: '20px' }}
          />
          <br />
          <button className="btn btn-primary">Send for Chk</button>
        </div>
        <div style={{ marginRight: '20px' }}>
          <label htmlFor="date2">Date :</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="date2"
            name="date2"
            value={tableData[0].date2}
            onChange={(e) => handleInputChange(0, 'date2', e.target.value)}
            style={{ width: '200px', height: '20px' }}
          />
          <br />
          <button className="btn btn-primary">Send for App</button>
        </div>
        <div>
          <label htmlFor="date3">Date :</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="date3"
            name="date3"
            value={tableData[0].date3}
            onChange={(e) => handleInputChange(0, 'date3', e.target.value)}
            style={{ width: '200px', height: '20px' }}
          />
          <br />
          <button className="btn btn-primary">Approve</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3%', marginLeft: '10%' }}>
          <button className="btn btn-danger" style={{ marginRight: '10px', height: '50px' }}>Delete</button>
          <button className="btn btn-primary" style={{ marginRight: '10px', height: '50px' }}>Cancel</button>
          <button className="btn btn-success" style={{ marginRight: '10px', height: '50px' }}>Save</button>
        </div>
      </div>
      <ToastContainer />
    </div>

  );
};

export default YourComponent;
