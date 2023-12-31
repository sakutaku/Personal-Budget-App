import React from 'react';
import logo from "../../assets/images/Logo.png";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {useAppDispatch} from "../../app/hook";
import {setShowTr} from "../../store/transactionSlice";
import TransactionModal from "../../containers/TransactionModal/TransactionModal";

const Header = () => {
    const dispatch = useAppDispatch();
    const show = useSelector((state: RootState) => state.transactions.show);

    let modal: React.ReactNode = null;

    if(show) {
        modal = <TransactionModal/>;
    }

    const onAddClick = () => {
        dispatch(setShowTr(true));
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="Logo"/>
                    </Link>

                </div>
                <div className="header-btns">
                    <NavLink to={'/categories'} className="btn btn-category">Categories</NavLink>
                    <button className="btn btn-add" type="button" onClick={onAddClick}>Add Transaction</button>
                </div>
            </div>
            {modal}
        </header>
    );
};

export default Header;