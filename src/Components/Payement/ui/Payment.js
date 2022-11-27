import { Link } from "react-router-dom";
import "../assets/Payment.css";

const Payment = () => {
  return (
    <div className="container">
      <h3 className="bill_wrap">Pay Bill Here</h3>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
          <form>
            <div className="form-group first">
              <label>Card No.</label>
              <input
                type="number"
                name="cardnno"
                placeholder="12345-53213-53"
                className="form-control"
              />
            </div>
            <div className="form-group last mb-3">
              <label>Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                placeholder="e.g Ali  name on Card"
              />
            </div>
            <div className="form-group last mb-3">
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                className="form-control"
                placeholder="Your Description"
              />
            </div>
            <Link to="/">
              <button type="submit">Submit</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
