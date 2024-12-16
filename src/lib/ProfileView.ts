import { IoIosPhonePortrait } from "react-icons/io";
import IMAGES from "../../public/images";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoKeyOutline } from "react-icons/io5";
import { LuFlagTriangleLeft } from "react-icons/lu";
import { profileViewType } from "@/types/ProfileViewType";

const ProfileView: profileViewType[] = [
    {
        id: 0,
        logo: IMAGES.AVATAR,
        name: "salman",
        tagline: "salman",
        insideData: [
            {
                id: 0,
                heading: "Phone No",
                Icon: IoIosPhonePortrait,
                subheading: "03000000300",
            },
            {
                id: 1,
                heading: "Email",
                Icon: TfiEmail,
                subheading: "salman@gmail.com",
            },
            {
                id: 2,
                heading: "Website",
                Icon: AiOutlineGlobal,
                subheading: "www.google.com",
            },
            {
                id: 3,
                heading: "Address",
                Icon: IoKeyOutline,
                subheading: "Faisalabad",
            },
            {
                id: 4,
                heading: "Country",
                Icon: LuFlagTriangleLeft,
                subheading: "Pakistan",
            },
        ]
    },
]
export default ProfileView;