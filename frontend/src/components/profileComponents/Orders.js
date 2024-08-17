import React from 'react'

const Orders = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className='table-responsive'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Status </th>
                    <th>Order Date</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr className={"alert-success"}>
                <td>
                    <a href={`/`} className='link'>
                    1
                    </a>
                </td>
                <td>Paid</td>
                <td>DEC 12 2021</td>
                <td>$234</td>
                </tr>
                {/* CANCELLED  */}
                <tr>
                    <td>
                    <a href={`/`} className='link'>
                    2
                    </a>
                    </td>
                    <td>not paid</td>
                    <td>DEC 12 2021</td>
                    <td>$234</td>
                </tr>
            </tbody>
            
        </table>
      </div>
    </div>
  )
}

export default Orders
