import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';

const app = express();
app.use(cors());
app.use(bodyParser.json());

//------------- MongoDB connection -------------------
const url = "mongodb+srv://NadraProject:Nadra%40123@cluster0.8emf5.mongodb.net/Nadra?retryWrites=true&w=majority";                                                  
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

//-------------------------- Define CNIC Schema -----------------------------------
const cnicSchema = new mongoose.Schema({
    fullName: String,
    fatherName: String,
    dateOfBirth: Date,
    parentCnic: String,
    postalAddress: String,
    permanentAddress: String,
});
const CNIC = mongoose.model("CNIC", cnicSchema);

//------------------- Define NICOP Schema ------------------------------
const nicopSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    dateOfBirth: Date,
    countryOfResidence: String,
    cnicNicopNumber: String,
    additionalComments: String,
});
const NICOP = mongoose.model("NICOP", nicopSchema);

//------------------------ Define FRC Schema -------------------------------------
const frcSchema = new mongoose.Schema({
    fullName: String,
    cnic: String,
    guardianName: String,
    guardianCnic: String,
    totalMembers: Number,
    email: String,
});
const FRC = mongoose.model("FRC", frcSchema);

//------------- Define Lost CNIC Schema --------------------------
const lostCnicSchema = new mongoose.Schema({
    cnicNumber: String,
    fullName: String,
    contactNumber: String,
    address: String,
});
const LostCNIC = mongoose.model("LostCNIC", lostCnicSchema);

//-------------------------------- Define Contact Schema -------------------------
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", contactSchema);

//---------------------------- Define Complain Schema ----------------------
const complainSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    complaint: String,
    createdAt: { type: Date, default: Date.now },
});
const Complain = mongoose.model("Complain", complainSchema);

//----------------------- Define User Schema for Signup and Login -------------------------------
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
});
const User = mongoose.model("User", userSchema);

//--------------------- API endpoint for user signup -------------------------------
app.post("/api/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        //-------------------- Check if the email already exists --------------------
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered" });
        }

        //----------------------- Hash the password -----------------------------
        const hashedPassword = await bcrypt.hash(password, 10);

        //---------------------------- Create new user -----------------------------
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "An error occurred while registering the user." });
    }
});

//--------------------- API endpoint for user login -----------------------------
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        //------------------------ Find the user by email -----------------------
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        //--------------------- Compare the password ---------------------------
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        //------------------- If login is successful -------------------------
        res.status(200).json({ message: "Login successful!" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "An error occurred while logging in." });
    }
});

//------------------------ API endpoints for CNIC forms -----------------------
app.post("/api/cnic", async (req, res) => {
    try {
        const newCNIC = new CNIC(req.body);
        await newCNIC.save();
        res.status(201).json({ message: "CNIC application submitted successfully!" });
    } catch (error) {
        console.error("Error saving CNIC application:", error);
        res.status(500).json({ message: "An error occurred while submitting the CNIC application." });
    }
});

app.get("/api/cnic/:parentCnic", async (req, res) => {
    const { parentCnic } = req.params;
    try {
        const cnicData = await CNIC.findOne({ parentCnic: parentCnic });
        if (cnicData) {
            res.status(200).json(cnicData);
        } else {
            res.status(404).json({ message: "No data found for the given CNIC." });
        }
    } catch (error) {
        console.error('Error fetching CNIC data:', error);
        res.status(500).json({ message: "An error occurred while fetching the CNIC data." });
    }
});
//-------------------- API endpoint for NICOP form ------------------------------
app.post("/api/nicop", async (req, res) => {
    try {
        const newNICOP = new NICOP(req.body);
        await newNICOP.save();
        res.status(201).json({ message: "NICOP application submitted successfully!" });
    } catch (error) {
        console.error("Error saving NICOP application:", error);
        res.status(500).json({ message: "An error occurred while submitting the NICOP application." });
    }
});

app.get("/api/nicop/:cnicNicopNumber", async (req, res) => {
    const { cnicNicopNumber } = req.params;
    try {
        const nicopData = await NICOP.findOne({ cnicNicopNumber: cnicNicopNumber });
        if (nicopData) {
            res.status(200).json(nicopData);
        } else {
            res.status(404).json({ message: "No data found for the given CNIC/NICOP number." });
        }
    } catch (error) {
        console.error('Error fetching NICOP data:', error);
        res.status(500).json({ message: "An error occurred while fetching the NICOP data." });
    }
});
//------------------------- API endpoint for FRC form ---------------------------
app.post("/api/frc", async (req, res) => {
    const { fullName, cnic, guardianName, guardianCnic, totalMembers, email } = req.body;
    try {
        const newFRC = new FRC({
            fullName,
            cnic,
            guardianName,
            guardianCnic,
            totalMembers,
            email,
        });
        await newFRC.save();
        res.status(201).json({ message: "FRC application submitted successfully!" });
    } catch (error) {
        console.error("Error saving FRC application:", error);
        res.status(500).json({ message: "An error occurred while submitting the FRC application." });
    }
});

app.get("/api/frc/:cnic", async (req, res) => {
    const { cnic } = req.params;
    try {
        const frcData = await FRC.findOne({ cnic: cnic });
        if (frcData) {
            res.status(200).json(frcData);
        } else {
            res.status(404).json({ message: "No data found for the given FRC CNIC." });
        }
    } catch (error) {
        console.error('Error fetching FRC data:', error);
        res.status(500).json({ message: "An error occurred while fetching the FRC data." });
    }
});
//----------------------- API endpoint for Lost CNIC form ------------------------------
app.post("/api/report-lost-cnic", async (req, res) => {
    try {
        const { cnicNumber, fullName, contactNumber, address } = req.body;
        const newLostCNIC = new LostCNIC({
            cnicNumber,
            fullName,
            contactNumber,
            address,
        });
        await newLostCNIC.save();
        res.status(201).json({ message: "Lost CNIC reported successfully!" });
    } catch (error) {
        console.error("Error reporting lost CNIC:", error);
        res.status(500).json({ message: "An error occurred while reporting the lost CNIC." });
    }
});

//-------------------------- API endpoint for Contact Us form -------------------------
app.post("/api/contact", async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: "Message submitted successfully!" });
    } catch (error) {
        console.error("Error saving contact message:", error);
        res.status(500).json({ message: "An error occurred while submitting the message." });
    }
});

//------------------------- API endpoint for Complaint form ------------------------------
app.post("/api/complain", async (req, res) => {
    try {
        const { fullName, email, complaint } = req.body;
        const newComplain = new Complain({
            fullName,
            email,
            complaint,
        });
        await newComplain.save();
        res.status(201).json({ message: "Complaint submitted successfully!" });
    } catch (error) {
        console.error("Error saving complaint:", error);
        res.status(500).json({ message: "An error occurred while submitting the complaint." });
    }
});

//-------------------------- Start the server ------------------------------
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));