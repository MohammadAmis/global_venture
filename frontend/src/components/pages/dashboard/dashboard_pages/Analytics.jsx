import { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from '../charts/BarChart';

const Analytics = () => {
  const [paymentDatasets, setPaymentDatasets] = useState(
    [
      { payment_method: 'COD', counts: [10, 15, 20] },
      { payment_method: 'UPI', counts: [5, 25, 30] },
      { payment_method: 'Card', counts: [8, 18, 28] },
    ]
    
  );


  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('/api/admin/payment-method');
        // setPaymentDatasets(response.data); // Send raw API data
      } catch (error) {
        console.error('Error fetching payment method data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <BarChart paymentData={paymentDatasets} />
    </div>
  );
};

export default Analytics;
