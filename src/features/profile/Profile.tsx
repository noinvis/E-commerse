import { useAuth } from "../auth/service/useAuth";


const Profile = () => {
   const {getProfile} = useAuth()
  const { data } = getProfile();
  console.log(data);
    
  return (
    <div className="p-[30px]">
      <p className="text-center text-[32px] font-medium pb-4">Profile</p>
      <div className="bg-white w-full p-[45px] rounded-[14px]">
        <div className="grid place-items-center mx-auto size-[80px] bg-[#BC8E5B] rounded-full mb-[30px]">
          <p className="text-white text-[28px]">{data?.data?.fname.slice(0, 1)}</p>
        </div>
        <div className="w-[780px] mx-auto">
          <div className="grid grid-cols-2 gap-[45px]">
            <div className="flex flex-col gap-[45px]">
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="fname" className="text-[#ADADAD]">First Name</label>
                <input type="text" id="fname" className="bg-[#F5F6FA] p-4 outline-0 border border-[#D5D5D5] rounded-[4px]" defaultValue={data?.data?.fname}/>
              </div>
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="fname" className="text-[#ADADAD]">Your Email</label>
                <input type="text" id="fname" className="bg-[#F5F6FA] p-4 outline-0 border border-[#D5D5D5] rounded-[4px]" defaultValue={data?.data?.email}/>
              </div>
            </div>
            <div className="flex flex-col gap-[45px]">
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="fname" className="text-[#ADADAD]">Last Name</label>
                <input type="text" id="fname" className="bg-[#F5F6FA] p-4 outline-0 border border-[#D5D5D5] rounded-[4px]" defaultValue={data?.data?.lname}/>
              </div>
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="fname" className="text-[#ADADAD]">Your Role</label>
                <input type="text" id="fname" className="bg-[#F5F6FA] p-4 outline-0 border border-[#D5D5D5] rounded-[4px]" defaultValue={data?.data?.role}/>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[30px]">
            <button className="text-white rounded-2xl bg-[#BC8E5B] py-3 px-[80px] text-[18px] font-medium border-[1px] border-[#BC8E5B] hover:bg-white duration-300 hover:text-[#BC8E5B]">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
