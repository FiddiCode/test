import React, { useEffect, useState } from 'react'
import { CChart } from '@coreui/react-chartjs'
import axios from 'axios'


const Dashboard = () => {
  const [data,setData]=useState(null);

  useEffect(()=>{
        const fetchData =async()=>{
            const response=await axios.get("http://localhost:8080/api/v1/")
        }
  },[])
  
  return (
    <>
      <CChart
        type='line'
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: '2019',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              tooltipLabelColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
              label: '2020',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              tooltipLabelColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
            }
          ],
        }}
        options={{
          aspectRatio: 1.5,
          tooltips: {
            enabled: true
          }
        }}
      />
      </>
      )
}

export default Dashboard