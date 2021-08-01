import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddAmountForm from './AddAmountForm';
import TransactionModal from '../../models/TransactionModal';
import { debitCardActions } from '../../store/debitcard-Slice';

const WithdrawAmount = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const WithdrawAmountAmmountHandler = (TranscationData: TransactionModal) => { 
    dispatch(
      debitCardActions.withdrawamountTocard({
          name:TranscationData.name,
          cardNumber: TranscationData.cardNumber,
          ex_date: TranscationData.ex_date,
          cvv: TranscationData.cvv,
          amount: TranscationData.amount,
      })
    );
    history.push('/');
  };

  return <AddAmountForm typeTranscation= "Withdraw Amount" onAddTranscation={WithdrawAmountAmmountHandler} />;
};

export default WithdrawAmount;
