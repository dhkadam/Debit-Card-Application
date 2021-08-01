import { useSelector } from 'react-redux';
import React from 'react';
import StoreModal from '../../models/StoreModal';

const Dashboard = () => {

    const storedata = useSelector((state: any) => state.debitcard.items);
    return (
        <div> {storedata.length > 0 &&
            <table id="customers">
                <tr>
                    <th>Name</th>
                    <th>Card Number</th>
                    <th>Amount</th>
                    <th>Type</th>
                </tr>
                {storedata.map((item: any) => (
                    <tr key={item.cardNumber}>
                        <td>{item.name}</td>
                        <td>{item.cardNumber}</td>
                        <td>{item.amount}</td>
                        <td>{item.type}</td>
                    </tr>
                ))}
            </table>
        }
            {storedata.length == 0 && <span>No Records Found</span>}
        </div>
    );

};

export default Dashboard;