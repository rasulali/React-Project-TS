import { useHistory } from "react-router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";
const NewMeetups = () => {
  const history = useHistory();

  const addMeetupHandler = (meetupData: any) => {
    fetch("https://my-app-81dc3-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};
export default NewMeetups;
