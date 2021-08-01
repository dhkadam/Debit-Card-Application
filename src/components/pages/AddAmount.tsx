import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddAmountForm from './AddAmountForm';
import TransactionModal from '../../models/TransactionModal';
import { debitCardActions } from '../../store/debitcard-Slice';

const AddAmount = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const addAmmountHandler = (TrascationData: TransactionModal) => {
    dispatch(
      debitCardActions.addAmountToCard({
        name: TrascationData.name,
        cardNumber: TrascationData.cardNumber,
        ex_date: TrascationData.ex_date,
        cvv: TrascationData.cvv,
        amount: TrascationData.amount,
      })
    );
    history.push('/');
  };
  return <AddAmountForm typeTranscation="Add Amount" onAddTranscation={addAmmountHandler} />;
};

export default AddAmount;
