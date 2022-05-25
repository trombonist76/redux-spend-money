import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillionaires,selectBillionaire } from "../redux/billionairesSlice";
import Navbar from './Navbar';
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { setMoney } from "../redux/walletSlice";

export default function Billionaires() {
  const billionaires = useSelector((state) => state.billionaires.billionaires);
  const dispatch = useDispatch();
  const handleClick = (person) => {
    dispatch(selectBillionaire(person))
    dispatch(setMoney(person.archivedWorth))

  }

  useEffect(() => {
    dispatch(fetchBillionaires());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <section className="billionaires">
        {billionaires.map((billionaire, index) => (
          <div key={index} className="billionaire">
            <div className="imageWrapper">
              <img
                src={billionaire.person.squareImage}
                alt={billionaire.personName}
                className="billionaireImage"
              />
            </div>

            <div className="contentWrapper">
              <h3>{billionaire.personName}</h3>
              <div className="properties">
                <span>
                  <strong>Source:</strong> {billionaire.source}
                </span>
                <span>
                  <strong>Industry:</strong> {billionaire.industries}
                </span>
                <span>
                  <strong>Abouts:</strong> {billionaire.abouts}
                </span>
              </div>
              <div>
                <strong>{(billionaire.archivedWorth).toLocaleString()} $</strong>
              </div>
            </div>

            <div className="btnWrapper">
              <Link component={<button/>} onClick={()=>handleClick(billionaire)} to={`spendMoney/${billionaire.personName}`}>
                <FiShoppingCart fontSize={25} />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
