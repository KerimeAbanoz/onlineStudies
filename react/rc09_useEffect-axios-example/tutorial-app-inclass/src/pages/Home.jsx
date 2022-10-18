import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    const data = await axios(url);
    console.log(data);
  };

  
  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
