import axios from "axios";
import qs from "qs";

export const getAuth = async () => {

    const clientId = "fda9029f96de427c87d2ba5c364e2d48" ;
    const clientSecret = "055dd709199342ce87ca2f2b403e554d";

    const headers = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: clientId,
          password: clientSecret,
        },
      };
    const data = {
    grant_type: "client_credentials",
    };

    try {
    const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify(data),
        headers
    );
    window.localStorage.setItem("token", response.data.access_token);
    return response.data.access_token;
    } catch (error) {
    console.log(error);
    }
};
