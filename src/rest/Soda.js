import axios from "axios";

export const Soda = {
    url: "",
    resultSet: [],

    all: (setValue, setFlag) => {

        axios
            .get(Soda.url)
            .then((response) =>{
                setValue(response.data);
                setFlag(true);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    show: (setValue, id) => {
        axios
        .get(Soda.url + "/" + id)
        .then((response) =>{
            setValue(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
};

export default Soda;