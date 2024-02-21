import React, { useState } from "react"

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import "./SignUpStyles.css"
import Layout2 from "../../../Components/Layout/Layout2"

const SignUp = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()
  // Use of the hooks forr the register page

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")

  // const [email, setEmail] = useState("")

  // const [phone, setPhone] = useState("")

  // const [password, setPassword] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [accountType, setAccountType] = useState("student")

  function changeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Form submit function
  const submitHandler = async (e) => {
    // This stops the default behavior of javascript such as refreshed the website when we try to submit the form
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    setIsLoggedIn(true)
    toast.success("Account Created")
    const accountData = {
      ...formData,
    }

    const finalData = {
      ...accountData,
      accountType,
    }

    console.log("printing Final account data ")
    console.log(finalData)

    navigate("/dashboard")
  }
  return (
    <>
      <Layout2 title={"Sign up - Avail all the best offers"}>
        <div className="h">
          <div className="i">
            <h1 className="b">Sign Up to Discover Local Treasures</h1>

            <p className="c">
              <span className="d">Buy & Sell today, tomorrow and beyond</span>{" "}
              <span className="e">Empower</span> <br />
              <span className="e">Local Artisans</span>
            </p>

            {/* student-Instructor tab  */}
            <div className="a">
              <button
                className={`custom-button ${
                  accountType === "student" ? "student-theme" : ""
                }`}
                onClick={() => setAccountType("student")}
              >
                Student
              </button>

              <button
                className={`custom-button ${
                  accountType === "admin" ? "student-theme" : ""
                }`}
                onClick={() => setAccountType("admin")}
              >
                Admin
              </button>
            </div>

            {/* <div className="a">
              <button
                className={`custom-button ${
                  accountType === "student" ? "student-theme" : ""
                }`}
                onClick={() => setAccountType("student")}
              >
                Student
              </button>

              <button
                className={`custom-button ${
                  accountType === "admin" ? "student-theme" : ""
                }`}
                onClick={() => setAccountType("admin")}
              >
                Admin
              </button>
            </div> */}

            {/* Form Section */}
            <form onSubmit={submitHandler}>
              {/* first name and lastname  */}
              <div className="k">
                <label className="m">
                  <p className="f">
                    First Name<sup className="star">*</sup>
                  </p>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    className="g"
                    value={formData.firstName}
                    onChange={changeHandler}
                    required
                  />
                </label>

                <label className="m">
                  <p className="f">
                    {" "}
                    Last Name<sup className="star">*</sup>
                  </p>

                  <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter last name"
                    value={formData.lastName}
                    className="g"
                  />
                </label>
              </div>

              {/* email Add */}
              <label className="m">
                <p className="f">
                  Email Address<sup className="star">*</sup>
                </p>

                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  onChange={changeHandler}
                  placeholder="Enter email address"
                  value={formData.email}
                  className="g"
                />
              </label>

              {/* phone number */}
              <label className="m">
                <p className="f">
                  Phone Number<sup className="star">*</sup>
                </p>
              </label>

              <div className="k">
                <label className="m">
                  {/* <p className="f">
                    Phone Number<sup className="star">*</sup>
                  </p> */}
                  <input
                    type=""
                    id="countryCode"
                    name="countryCode"
                    value="+91"
                    readOnly
                  />
                  <input
                    required
                    type="text"
                    name="phonenumber"
                    onChange={changeHandler}
                    placeholder="12345 67890"
                    value={formData.phone}
                    className="r"
                  />
                </label>
              </div>

              {/* <div className="k">
                <label className="m">
                  <p className="f">
                    {" "}
                    Phone Number<sup className="star">*</sup>
                  </p>{" "}
                  <input
                    type=""
                    id="countryCode"
                    name="countryCode"
                    value="+91"
                    readOnly
                  />{" "}
                </label>

                <label className="m">
                  <input
                    type="text"
                    placeholder="12345 67890"
                    className="g"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </label>
              </div> */}

              {/* createPassword and confirm Password */}
              <div className="k">
                <label className="m">
                  <p className="f">
                    Create Password<sup className="star">*</sup>
                  </p>

                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    value={formData.password}
                    className="g"
                  />

                  <span
                    className="span"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                  </span>
                </label>

                <label className="m">
                  <p className="f">
                    Confirm Password<sup className="star">*</sup>{" "}
                  </p>

                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    value={formData.confirmpassword}
                    className="g"
                  />

                  <span
                    className="span"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                  </span>

                  {/* <Link to="#">
                    <p className="link">
                        Forgot Password
                    </p>
                  </Link> */}
                </label>
              </div>
              <button className="j">
                <Link to="/log-in">Create Account</Link>
              </button>
            </form>
          </div>

          <div className="right-side">
            {/* Image will be applied here for the right side as a background */}
            {/* <img
              src=""
              alt="Pattern background"
              // width={558}
              // height={504}
              loading="lazy"
              className="x"
            /> */}
            {/* <img
              src=""
              alt="clothes"
              // width={558}
              // height={490}
              loading="lazy"
              className="y"
            /> */}

            <div className="x"></div>

            <div className="y"></div>
          </div>
        </div>
      </Layout2>
    </>
  )
}

export default SignUp
