import React from 'react'
import './ReNewID.css'

export default function ReNewID() {
  return (
    <>
    <br />
    <header class="re-new-header">
        <h1>Re-new your ID Card</h1>
        <p>- - - Your new id card - - -</p>
    </header><br/>
        <div class="renewal-container">

            {/* <!------------------ Left Section -----------------> */}

            <div class="renewal-instructions">
                <h2>Instructions for Renewal</h2>
                <ul>
                    <li><i class="fa fa-check-circle"></i> Ensure you have your current CNIC details.</li>
                    <li><i class="fa fa-check-circle"></i> Upload a recent passport-size photo.</li>
                    <li><i class="fa fa-check-circle"></i> Fill out all mandatory fields in the form.</li>
                    <li><i class="fa fa-check-circle"></i> Attach proof of address if required.</li>
                    <li><i class="fa fa-check-circle"></i> Submit the form and pay the renewal fee online.</li>
                </ul>
            </div>

            {/* <!------------------ Right Section -----------------> */}
            
            <div class="renewal-form">
                <h2>Renewal Form</h2>
                <form action="/" method="POST">
                    <label for="full-name">Full Name</label>
                    <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required/>

                    <label for="cnic-number">CNIC Number</label>
                    <input type="text" id="cnic-number" name="cnic-number" placeholder="Enter your CNIC number" required/>

                    <label for="father-name">Father's Name:</label>
                    <input type="text" id="father-name" name="father-name" placeholder="Enter your father's name" required/>

                    <label for="cnic">CNIC of Parent/Guardian:</label>
                    <input type="text" id="cnic" name="cnic" placeholder="Enter CNIC of parent or guardian" required/>

                    <label for="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required/>

                    <label for="postel-address">Postel Address:</label>
                    <textarea id="postel-address" name="address" placeholder="Enter your postel address" rows="3" required></textarea>

                    <label for="Permanent-address">Permanent Address:</label>
                    <textarea id="Permanent-address" name="address" placeholder="Enter your Permanent address" rows="3" required></textarea>

                    <label for="photo">Upload Passport-Size Photo</label>
                    <input type="file" id="photo" name="photo" required/>

                    <label for="fee-slip">Fee Slip:</label>
                    <input type="file" id="fee-slip" name="fee-slip" required/>

                    <button type="submit" class="submit-btn">Submit Renewal</button>
                </form>
            </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}
