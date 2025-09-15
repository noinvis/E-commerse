import { Button } from "antd";
import { useAuth } from "../auth/service/useAuth";


const Profile = () => {
   const {getProfile} = useAuth()
  const { data } = getProfile();
  console.log(data);
    
  return (
    <div className="p-4">
      <h2>Profile</h2>
      <p>{data?.data?.fname}</p>
      <p>{data?.data?.lname}</p>
      <p>{data?.data?.address}</p>
      <Button>Update</Button>
    </div>
  );
};

export default Profile;
