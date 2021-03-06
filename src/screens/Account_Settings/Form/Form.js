import React, { Component } from "react";
import "../Account_Settings.css";
import { TextField, Checkbox } from "@material-ui/core";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";
const optionsGender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
const optionsCountry = [
  { value: "Afganistan", label: "Afghanistan" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "American Samoa", label: "American Samoa" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  { value: "Anguilla", label: "Anguilla" },
  { value: "Antigua & Barbuda", label: "Antigua & Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Aruba", label: "Aruba" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Belize", label: "Belize" },
  { value: "Benin", label: "Benin" },
  { value: "Bermuda", label: "Bermuda" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Bonaire", label: "Bonaire" },
  { value: "Bosnia & Herzegovina", label: "Bosnia & Herzegovina" },
  { value: "Botswana", label: "Botswana" },
  { value: "Brazil", label: "Brazil" },
  { value: "British Indian Ocean Ter", label: "British Indian Ocean Ter" },
  { value: "Brunei", label: "Brunei" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Burkina Faso", label: "Burkina Faso" },
  { value: "Burundi", label: "Burundi" },
  { value: "Cambodia", label: "Cambodia" },
  { value: "Cameroon", label: "Cameroon" },
  { value: "Canada", label: "Canada" },
  { value: "Canary Islands", label: "Canary Islands" },
  { value: "Cape Verde", label: "Cape Verde" },
  { value: "Cayman Islands", label: "Cayman Islands" },
  { value: "Central African Republic", label: "Central African Republic" },
  { value: "Chad", label: "Chad" },
  { value: "Channel Islands", label: "Channel Islands" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Christmas Island", label: "Christmas Island" },
  { value: "Cocos Island", label: "Cocos Island" },
  { value: "Colombia", label: "Colombia" },
  { value: "Comoros", label: "Comoros" },
  { value: "Congo", label: "Congo" },
  { value: "Cook Islands", label: "Cook Islands" },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Cote DIvoire", label: "Cote DIvoire" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Curaco", label: "Curacao" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  { value: "Denmark", label: "Denmark" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominica", label: "Dominica" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "East Timor", label: "East Timor" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Egypt", label: "Egypt" },
  { value: "El Salvador", label: "El Salvador" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea" },
  { value: "Eritrea", label: "Eritrea" },
  { value: "Estonia", label: "Estonia" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Falkland Islands", label: "Falkland Islands" },
  { value: "Faroe Islands", label: "Faroe Islands" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "French Guiana", label: "French Guiana" },
  { value: "French Polynesia", label: "French Polynesia" },
  { value: "French Southern Ter", label: "French Southern Ter" },
  { value: "Gabon", label: "Gabon" },
  { value: "Gambia", label: "Gambia" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Ghana", label: "Ghana" },
  { value: "Gibraltar", label: "Gibraltar" },
  { value: "Great Britain", label: "Great Britain" },
  { value: "Greece", label: "Greece" },
  { value: "Greenland", label: "Greenland" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guadeloupe", label: "Guadeloupe" },
  { value: "Guam", label: "Guam" },
  { value: "Guatemala", label: "Guatemala" },
  { value: "Guinea", label: "Guinea" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  { value: "Hawaii", label: "Hawaii" },
  { value: "Honduras", label: "Honduras" },
  { value: "Hong Kong", label: "Hong Kong" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "India", label: "India" },
  { value: "Iran", label: "Iran" },
  { value: "Iraq", label: "Iraq" },
  { value: "Ireland", label: "Ireland" },
  { value: "Isle of Man", label: "Isle of Man" },
  { value: "Israel", label: "Israel" },
  { value: "Italy", label: "Italy" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Japan", label: "Japan" },
  { value: "Jordan", label: "Jordan" },
  { value: "Kazakhstan", label: "Kazakhstan" },
  { value: "Kenya", label: "Kenya" },
  { value: "Kiribati", label: "Kiribati" },
  { value: "Korea North", label: "Korea North" },
  { value: "Korea Sout", label: "Korea South" },
  { value: "Kuwait", label: "Kuwait" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan" },
  { value: "Laos", label: "Laos" },
  { value: "Latvia", label: "Latvia" },
  { value: "Lebanon", label: "Lebanon" },
  { value: "Lesotho", label: "Lesotho" },
  { value: "Liberia", label: "Liberia" },
  { value: "Libya", label: "Libya" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Macau", label: "Macau" },
  { value: "Macedonia", label: "Macedonia" },
  { value: "Madagascar", label: "Madagascar" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Malawi", label: "Malawi" },
  { value: "Maldives", label: "Maldives" },
  { value: "Mali", label: "Mali" },
  { value: "Malta", label: "Malta" },
  { value: "Marshall Islands", label: "Marshall Islands" },
  { value: "Martinique", label: "Martinique" },
  { value: "Mauritania", label: "Mauritania" },
  { value: "Mauritius", label: "Mauritius" },
  { value: "Mayotte", label: "Mayotte" },
  { value: "Mexico", label: "Mexico" },
  { value: "Midway Islands", label: "Midway Islands" },
  { value: "Moldova", label: "Moldova" },
  { value: "Monaco", label: "Monaco" },
  { value: "Mongolia", label: "Mongolia" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Morocco", label: "Morocco" },
  { value: "Mozambique", label: "Mozambique" },
  { value: "Myanmar", label: "Myanmar" },
  { value: "Nambia", label: "Nambia" },
  { value: "Nauru", label: "Nauru" },
  { value: "Nepal", label: "Nepal" },
  { value: "Netherland Antilles", label: "Netherland Antilles" },
  { value: "Netherlands", label: "Netherlands (Holland, Europe)" },
  { value: "Nevis", label: "Nevis" },
  { value: "New Caledonia", label: "New Caledonia" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaragua", label: "Nicaragua" },
  { value: "Niger", label: "Niger" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "Niue", label: "Niue" },
  { value: "Norfolk Island", label: "Norfolk Island" },
  { value: "Norway", label: "Norway" },
  { value: "Oman", label: "Oman" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Palau Island", label: "Palau Island" },
  { value: "Palestine", label: "Palestine" },
  { value: "Panama", label: "Panama" },
  { value: "Papua New Guinea", label: "Papua New Guinea" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Phillipines", label: "Philippines" },
  { value: "Pitcairn Island", label: "Pitcairn Island" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Puerto Rico", label: "Puerto Rico" },
  { value: "Qatar", label: "Qatar" },
  { value: "Republic of Montenegro", label: "Republic of Montenegro" },
  { value: "Republic of Serbia", label: "Republic of Serbia" },
  { value: "Reunion", label: "Reunion" },
  { value: "Romania", label: "Romania" },
  { value: "Russia", label: "Russia" },
  { value: "Rwanda", label: "Rwanda" },
  { value: "St Barthelemy", label: "St Barthelemy" },
  { value: "St Eustatius", label: "St Eustatius" },
  { value: "St Helena", label: "St Helena" },
  { value: "St Kitts-Nevis", label: "St Kitts-Nevis" },
  { value: "St Lucia", label: "St Lucia" },
  { value: "St Maarten", label: "St Maarten" },
  { value: "St Pierre & Miquelon", label: "St Pierre & Miquelon" },
  { value: "St Vincent & Grenadines", label: "St Vincent & Grenadines" },
  { value: "Saipan", label: "Saipan" },
  { value: "Samoa", label: "Samoa" },
  { value: "Samoa American", label: "Samoa American" },
  { value: "San Marino", label: "San Marino" },
  { value: "Sao Tome & Principe", label: "Sao Tome & Principe" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Senegal", label: "Senegal" },
  { value: "Seychelles", label: "Seychelles" },
  { value: "Sierra Leone", label: "Sierra Leone" },
  { value: "Singapore", label: "Singapore" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Solomon Islands", label: "Solomon Islands" },
  { value: "Somalia", label: "Somalia" },
  { value: "South Africa", label: "South Africa" },
  { value: "Spain", label: "Spain" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Sudan", label: "Sudan" },
  { value: "Suriname", label: "Suriname" },
  { value: "Swaziland", label: "Swaziland" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Syria", label: "Syria" },
  { value: "Tahiti", label: "Tahiti" },
  { value: "Taiwan", label: "Taiwan" },
  { value: "Tajikistan", label: "Tajikistan" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Thailand", label: "Thailand" },
  { value: "Togo", label: "Togo" },
  { value: "Tokelau", label: "Tokelau" },
  { value: "Tonga", label: "Tonga" },
  { value: "Trinidad & Tobago", label: "Trinidad & Tobago" },
  { value: "Tunisia", label: "Tunisia" },
  { value: "Turkey", label: "Turkey" },
  { value: "Turkmenistan", label: "Turkmenistan" },
  { value: "Turks & Caicos Is", label: "Turks & Caicos Is" },
  { value: "Tuvalu", label: "Tuvalu" },
  { value: "Uganda", label: "Uganda" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Arab Erimates", label: "United Arab Emirates" },
  { value: "United States of America", label: "United States of America" },
  { value: "Uraguay", label: "Uruguay" },
  { value: "Uzbekistan", label: "Uzbekistan" },
  { value: "Vanuatu", label: "Vanuatu" },
  { value: "Vatican City State", label: "Vatican City State" },
  { value: "Venezuela", label: "Venezuela" },
  { value: "Vietnam", label: "Vietnam" },
  { value: "Virgin Islands (Brit)", label: "Virgin Islands (Brit)" },
  { value: "Virgin Islands (USA)", label: "Virgin Islands (USA)" },
  { value: "Wake Island", label: "Wake Island" },
  { value: "Wallis & Futana Is", label: "Wallis & Futana Is" },
  { value: "Yemen", label: "Yemen" },
  { value: "Zaire", label: "Zaire" },
  { value: "Zambia", label: "Zambia" },
  { value: "Zimbabwe", label: "Zimbabwe" },
];
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      contactNo: "",
      gender: "",
      picture: false,
      src: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  namehandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  contacthandler = (event) => {
    this.setState({
      contactNo: event.target.value,
    });
  };

  // genderhandler = (event) => {
  //   this.setState({
  //     gender: event.target.value,
  //   });
  // };

  handleSubmit = (event) => {
    alert(`${this.state.name} Updated Successfully !!!!`);
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      contactNo: "",
      gender: "",
    });
    event.preventDefault();
  };

  // handlePictureSelected(event) {
  //   var picture = event.target.files[0];
  //   var src     = URL.createObjectURL(picture);

  //   this.setState({
  //     picture: picture,
  //     src: src
  //   });
  // }

  // renderPreview() {
  //   if(this.state.src) {
  //     return (
  //       <img src={this.state.src}/>
  //     );
  //   } else {
  //     return (
  //       <p>
  //         No Preview
  //       </p>
  //     );
  //   }
  // }

  // upload() {
  //   var formData = new FormData();

  //   formData.append("file", this.state.picture);

  //   $.ajax({
  //     url: "/some/api/endpoint",
  //     method: "POST",
  //     data: formData,
  //     cache: false,
  //     contentType: false,
  //     processData: false,
  //     success: function(response) {
  //       // Code to handle a succesful upload
  //     }
  //   });
  // }
  // state = {
  //   selectedOption1: null,
  //   selectedOption2: null,
  // };
  // handleGender = selectedOption1 => {
  //   this.setState({ selectedOption1 });
  //   console.log(`Option selected:`, selectedOption1);
  // };
  // handleCountry = selectedOption2 => {
  //   this.setState({ selectedOption2 });
  //   console.log(`Option selected:`, selectedOption2);
  // };

  render() {
    const { selectedOption1 } = this.state;
    const { selectedOption2 } = this.state;
    const customStyles1 = {
      option: (provided, state) => ({
        ...provided,
        borderBottom: "0.5px rigid green",
        color: state.isSelected ? "lightblue" : "black",
        backgroundColor: state.isSelected ? "#1B1940" : "white",
      }),
      control: (provided) => ({
        ...provided,
        // marginTop: "5%",
      }),
    };
    const customStyles2 = {
      option: (provided, state) => ({
        ...provided,
        borderBottom: "0.5px rigid green",
        color: state.isSelected ? "lightblue" : "black",
        backgroundColor: state.isSelected ? "#1B1940" : "white",
      }),
      control: (provided) => ({
        ...provided,
        // marginTop: "5%",
      }),
    };
    return (
      <div id="lab">
        <section>
          <nav>
            <form onSubmit={this.handleSubmit}>
              <label id="l1">Name </label>{" "}
              <TextField
                className="text-field-ac"
                id="forminp"
                type="text"
                value={this.state.name}
                onChange={this.namehandler}
                placeholder="Enter Name"
                InputProps={{
                  underline: {
                    "&&&:before": {
                      borderBottom: "none",
                    },
                    "&&:after": {
                      borderBottom: "none",
                    },
                  },
                }}
              />
              <br />
              <label id="l2">Email </label>{" "}
              <TextField
                id="forminp"
                type="text"
                value={this.state.email}
                onChange={this.emailhandler}
                placeholder="Enter Email Address"
              />
              <br />
              <label id="l3">Contact No.</label>{" "}
              <TextField
                id="forminp"
                type="tel"
                value={this.state.contactNo}
                onChange={this.contacthandler}
                placeholder="Enter Contact Number"
              />
              <br />
              <label id="l4">Gender</label>
              <Select
                id="sel1"
                onChange={this.handleGender}
                defaultValue="Select Gender"
                value={selectedOption1}
                options={optionsGender}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 5,
                })}
                styles={customStyles2}
              />
              <label id="l5">Country</label>
              <Select
                id="sel2"
                onChange={this.handleCountry}
                defaultValue="Select Country"
                value={selectedOption2}
                options={optionsCountry}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 5,
                })}
                styles={customStyles1}
              />
              <br />
            </form>
          </nav>
          <article>
            <img
              className="face_image"
              src={process.env.PUBLIC_URL + "/default-profile.png"}
              alt="avatar"
            />

            <h1 className="change_picture_heading">Change Profile Pic</h1>
          </article>
        </section>
      </div>
    );
  }
}

export default Form;
