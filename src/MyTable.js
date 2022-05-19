import React from 'react';
import MaterialTable from 'material-table';


export default function MyTable() {
  return (
    <div>
      <MaterialTable
        columns={
          [
            { title: 'Id', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Email', field: 'email' },
            { title: 'Gender', field: 'gender' },
            { title: 'IP Address', field: 'ip_address' }
          ]
        }
        title={'User Data'}
        // data={customers}
        options={{  
          headerStyle: { 
            background: '#282c34',
            color: 'white',
          },
          rowStyle: { 
            background: 'white',
            color: '#282c34'
          }
        }
        }
        localization={{
          pagination: {
            nextAriaLabel: 'next',
            previousAriaLabel: 'prev'
          } 
        }}
      />
    </div>
  );
}