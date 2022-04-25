import React from "react";
import { useGlobalContext } from "../InsuranceContext";

export default function SuccessFul() {
  const { nextStep } = useGlobalContext();

  const backToPrevStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <form id="wrapped" method="post" enctype="multipart/form-data">
        <input id="website" name="website" type="text" value="" />
        <div id="middle-wizard">
          <div class="submit step" id="end">
            {/* <!-- <h2 class="section_title text-center">Congratulation!</h2>
                                <p class="text-center"> You have successfully Registered your ward's details</p> --> */}
            <div class="wrapper">
              <div id="success">
                <h4>
                  <span>Congratulation!</span>
                </h4>
                <p>You have successfully Registered your details.</p>
              </div>
              <div class="registration-details">
                <h4 class="registration-details-fee">
                  <span>Registration Fee:</span> ₦10,000
                </h4>
                <div class="bank-info">
                  <div class="bank-info_account">
                    <h4 class="bank-info_account-name">
                      Anambra Compulsory third party insurance
                    </h4>
                  </div>
                </div>
              </div>

              <p class="mb-10">
                <b>Payment SuccessFul:</b>
              </p>
              <button
                type="submit"
                name="forward"
                className="forward"
                onClick={backToPrevStep}
              >
                Download Certificate
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
