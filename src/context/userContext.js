// React
import { createContext, useContext, useState } from "react";

// Packages
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [patients, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  // useState(() => {
  //   setLoading(true);
  //   const unsubscribe = onAuthStateChanged(auth, (res) => {
  //       res ? setUser(res) : setUser(null)
  //       setError("");
  //       setLoading(false);
  //   });
  //   return unsubscribe;
  // }, []);

  // const signInUser = (email, password) => {
  //   setLoading(true);
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((res) => navigate("/dashboard"))
  //     .catch((err) => setError(err.code))
  //     .finally(() => setLoading(false));
  // };

  const getPatient = async (data) => {
    setLoading(true);
    console.log("JSON Data TO Sent", data);
    try {
      const options = {
        url: "http://192.168.182.173:3000/admin/login",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: data,
      };
      axios(options).then((res) => {
        setLoading(true);
        if (res.status === 201){
          const patients = res.data;
          console.log("Admin Response", patients);
          setUser(true);
          setPatient({ patients });
          navigate("/dashboard");
        }
      }).catch((err) => setError(err.code))
      .finally(() => setLoading(false));
    } catch (e) {
      console.error(e);
    }
  };


  const enrollPatient = async (data) => {
    setLoading(true);
    console.log("JSON Data TO Sent", data);
    try {
      const options = {
        url: "http://192.168.182.173:3000/register/patient",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: data,
      };
      axios(options).then((res) => {
        const patient = res.data;
        console.log("Patient Register Response", patient);
        alert(JSON.stringify(patient));
      }).catch((err) => setError(err.code))
      .finally(() => setLoading(false));
    } catch (e) {
      console.error(e);
    }
  };

  const enrollDoctor = async (data) => {
    setLoading(true);
    console.log("JSON Data TO Sent", data);
    try {
      const options = {
        url: "http://192.168.182.173:3000/register/doctor",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: data,
      };
      axios(options).then((res) => {
        const doctor = res.data;
        console.log("Doctor Register Response", doctor);
        alert(JSON.stringify(doctor));
      }).catch((err) => setError(err.code))
      .finally(() => setLoading(false));
    } catch (e) {
      console.error(e);
    }
  };

  const logoutUser = () => {
    console.log("out");
    setUser(false);
  };

  const contextValue = {
    user,
    patients,
    enrollPatient,
    enrollDoctor,
    loading,
    error,
    getPatient,
    logoutUser,
  };
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
