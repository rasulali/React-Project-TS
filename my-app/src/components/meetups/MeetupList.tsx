import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
const MeetupList = ({ meetups }: { meetups: any }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup: any) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};
export default MeetupList;
