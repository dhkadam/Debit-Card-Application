import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './AddAmountForm.module.css';
import ICardProp from '../../models/CardProp';
const AddAmountForm = (props: ICardProp) => {

    const [isEntering, setIsEntering] = useState(false);
    const cardInputRef = useRef<HTMLInputElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);
    const cvvInputRef = useRef<HTMLInputElement>(null);
    const amountInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    // const dispatch = useDispatch();

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredcard = cardInputRef.current!.value;
        const entereddate = dateInputRef.current!.value;
        const enteredcvv = cvvInputRef.current!.value;
        const enteredamount = amountInputRef.current!.value;
        const enterdname = nameInputRef.current!.value;
        if (enteredcard.trim().length > 16) {
            alert("Card Number should be 16 digit");
            return;
        }
        if (entereddate.trim().length > 4) {
            alert("Expiration Date should be 4 digit");
            return;
        }
        if (enteredcvv.trim().length > 3) {
            alert("Cvv Number should be 3 digit");
            return;
        }
        if (enteredamount.trim().length > 6) {
            alert("Amount should not be greater than 100000");
            return;
        }
        if (Number(enteredamount.trim()) < 0) {
            alert("Amount should not be less than 0");
            return;
        }
        if (entereddate.trim().length == 4) {

            const exdate = entereddate.trim().slice(0, 2);
            if (Number(exdate) > 12) {
                alert("Expiration Date should be in MMYY formate");
                return;
            }

        }
        if (!enterdname.match(/^[a-zA-Z ]*$/)) {
            alert('Only alphabets are allowed in Name Field');
            return;
        }
        const senddata = {
            name: enterdname,
            cardNumber: enteredcard,
            ex_date: entereddate,
            cvv: enteredcvv,
            amount: enteredamount,
        };

        props.onAddTranscation(senddata);
    }
    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    return (
        <Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    'Are you sure you want to leave? All your entered data will be lost!'
                }
            />
            <label>{props.typeTranscation}</label>
            <Card>
                <form
                    onFocus={formFocusedHandler}
                    className={classes.form}
                    onSubmit={submitHandler}
                >
                    <div className={classes.control}>
                        <label htmlFor='card'>CARD NUMBER</label>
                        <input type='number' id='card' ref={cardInputRef} required />
                    </div>
                    <table>
                        <tr>
                            <td>  <div className={classes.control}>
                                <label htmlFor='exdate'>EXPIRATION DATE(MMYY)</label>
                                <input type='number' id='exdate' ref={dateInputRef} required />
                            </div> </td>
                            <td  >  <div className={classes.control}>
                                <label htmlFor='cvv'>CVV</label>
                                <input type='number' id='cvv' ref={cvvInputRef} className={classes.cvvcss} required />
                            </div> </td>
                        </tr>
                    </table>
                    <div className={classes.control}>
                        <label htmlFor='fullname'>NAME ON CARD</label>
                        <input type='text' id='fullname' ref={nameInputRef} maxLength={100} required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='amount'>{props.typeTranscation}</label>
                        <input type='number' id='amount' ref={amountInputRef} required />
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEnteringHandler} className='btn'>Submit Transaction</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
};

export default AddAmountForm;
