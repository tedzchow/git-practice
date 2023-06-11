import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Inputgroup from "../common/Inputgroup";
import { useNavigate } from "react-router-dom";
import {
  add_exp,
  read_exp,
  update_exp,
  del_exp,
} from "../redux/action/expActions";
import Selectbar from "../common/Selectbar";
import Table from "./Table.component";
import Modal from "./Modal.component";

const Expense = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [deleteid, setDeleteid] = useState(0);
  const [editid, setEditid] = useState(0);
  const [dateedit, setDateedit] = useState(new Date());
  const [amountedit, setAmountedit] = useState("");
  const [descriptionedit, setDescriptionedit] = useState("");
  const user = useSelector((state) => state.auth.user);
  const exps = useSelector((state) => state.exp.exp);
  const isauth = useSelector((state) => state.auth.isauth);
  useEffect(() => {
    dispatch(read_exp(user.id));
    if (!isauth) {
      navigate("/");
    }
    //eslint-disable-next-line
  }, []);
  const add = () => {
    const newexp = {
      date: date,
      amount: amount,
      description: description,
      id: user.id,
    };
    setDate("");
    setDescription("");
    setAmount("");
    dispatch(add_exp(newexp));
  };
  const edit = (item) => {
    setEditid(item._id);
    setDescriptionedit(item.description);
    setAmountedit(item.amount);
    setDateedit(item.date);
  };
  const update = () => {
    const updateexp = {
      date: dateedit,
      amount: amountedit,
      description: descriptionedit,
      id: user.id,
      _id: editid,
    };
    dispatch(update_exp(updateexp, editid));
    dispatch(read_exp(user.id));
    setEditid(0);
  };
  const del = () => {
    dispatch(del_exp(deleteid));
    dispatch(read_exp(user.id));
    setDeleteid(0);
  };
  return (
    <>
      <div className="container d-flex justify-content-between mt-4">
        <Inputgroup
          type="date"
          label="Date:"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></Inputgroup>
        <Inputgroup
          type="Number"
          label="Amount:"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></Inputgroup>
        <Selectbar
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Selectbar>
        <button
          type="button"
          className="btn btn-primary btn-sm add mt-4"
          onClick={() => add()}
        >
          Add
        </button>
      </div>
      <Table
        exps={exps}
        editid={editid}
        setDateedit={setDateedit}
        setAmountedit={setAmountedit}
        description={description}
        setDescription={setDescription}
        update={update}
        edit={edit}
        setDeleteid={setDeleteid}
      />
      <Modal del={del} />
    </>
  );
};
export default Expense;
