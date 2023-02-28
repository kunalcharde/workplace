import { Button, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./style.css";
import Autocomplete from "@mui/material/Autocomplete";
import CountrySelect from "../../../Constants/countries";

import { db } from "../../../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { userContext } from "../../../Context/userContext";
import React, { useContext, useState } from "react";
import toastMessage from "../../utils/toastMessage";
import { useNavigate } from "react-router-dom";
import { companySize, industryType } from "../../../Constants";
import LinkIcon from "@mui/icons-material/Link";
import UploadFile from "../../Common/UploadFile";
import InputAdornment from "@mui/material/InputAdornment";

const EmployerOnboarding = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(userContext);
  const [companyData, setcompanyData] = useState({
    companyName: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    industryType: "",
    companySize: "",
    location: "",
    twitter: "",
    facebook: "",
    website: "",
    linkedin: "",
    companyTagline: "",
    companybio: "",
    logo: "",
  });

  const submitData = async (e) => {
    e.preventDefault();
    console.log(companyData);

    // // push data to firebase to collection userInfo
    const userId = state.user.email;
    // setDoc(doc ref, data)
    // doc(db ref, collection name, doc id)
    try {
      await setDoc(doc(db, "userInfo", userId), {
        ...companyData,
        userId,
        userType: "employer",
      });
      toastMessage("data saved successfully", "success");
      // redirect to profile page
      dispatch({
        type: "AddUSERINFO",
        payload: {
          ...companyData,
          userId,
          userType: "employer",
        },
      });
      navigate("/employer/profile");
    } catch (err) {
      console.log(err);
      toastMessage("something went wrong", "error");
    }
  };

  return (
    <div className="candidate-onboarding-container">
      <form onSubmit={submitData}>
        <div className="logout-btn">
          <Button variant="outlined" sx={{ margin: "2rem 2rem 0 0" }}>
            Logout
          </Button>
        </div>
        <div className="candidate-onboarding-form">
          <h3>Setup Your Profile</h3>
          <Grid container spacing={2} sm={8} xs={10}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setcompanyData({
                    ...companyData,
                    companyName: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="flex">
                <CountrySelect />
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  required
                  size="Normal"
                  fullWidth
                  onChange={(e) =>
                    setcompanyData({ ...companyData, phone: e.target.value })
                  }
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Email"
                disable
                variant="outlined"
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setcompanyData({ ...companyData, email: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={industryType}
                // sx={{ width: 300 }}
                onChange={(e, newValue) =>
                  setcompanyData({ ...companyData, industryType: newValue })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Industry Type"
                    required
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={companySize}
                // sx={{ width: 300 }}
                onChange={(e, newValue) =>
                  setcompanyData({ ...companyData, companySize: newValue })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Company Size"
                    required
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Your Name"
                disable
                variant="outlined"
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setcompanyData({ ...companyData, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Your Role"
                disable
                variant="outlined"
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setcompanyData({ ...companyData, role: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Location"
                disable
                variant="outlined"
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setcompanyData({ ...companyData, location: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Website"
                variant="outlined"
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setcompanyData({ ...companyData, website: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Linkedin"
                variant="outlined"
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setcompanyData({ ...companyData, linkedin: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Facebook"
                variant="outlined"
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setcompanyData({ ...companyData, facebook: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Twitter"
                variant="outlined"
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setcompanyData({ ...companyData, twitter: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-basic"
                label="Company Tagline"
                disable
                variant="outlined"
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setcompanyData({
                    ...companyData,
                    companyTagline: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-flexible"
                label="Company Bio"
                multiline
                minRows={4}
                fullWidth
                onChange={(e) =>
                  setcompanyData({ ...companyData, companybio: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <label>Company Logo*</label>
              <Box
                xs={12}
                sm={12}
                sx={{
                  border: "1.2px dashed black",
                  height: "8rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <UploadFile
                  type="image"
                  onUpload={(url) =>
                    setcompanyData({ ...companyData, logo: url })
                  }
                  value={companyData.logo}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                m: "2rem 0",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ background: "#26d7ab" }}
              >
                Complete Setup
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default EmployerOnboarding;
