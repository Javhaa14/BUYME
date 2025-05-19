import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Camera, CircleX, X } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/Authcontext";

export const Complete = ({ stepper }: any) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState({
    name: "",
    about: "",
    image: "",
    social: "",
  });
  const form = [
    {
      el: "input",
      title: "Name",
      name: "name",

      clas: "flex flex-col items-start self-stretch w-full h-[86px]",
      na: `flex w-full h-[40px] px-2 py-3 items-center rounded-md border-[1px] bg-white ${
        error.name ? "border-[#EF4444]" : "border-[#E4E4E7]"
      }`,
      placeholder: "Enter your name here",
    },
    {
      el: "text-area",
      title: "About",
      name: "about",
      clas: "flex flex-col items-start self-stretch w-full h-[177px]",
      na: `flex w-full h-[131px] min-h-[80px] px-2 py-3 items-center rounded-md  ${
        error.about ? "border-[#EF4444]" : "border-[#E4E4E7]"
      } border-[1px] bg-white`,

      placeholder: "Write about yourself here",
    },
    {
      el: "input",
      name: "social",
      title: "Social media URL",
      clas: "flex flex-col items-start self-stretch w-full h-[86px]",
      na: `flex w-full h-[40px] px-2 py-3 items-center rounded-md  ${
        error.social ? "border-[#EF4444]" : "border-[#E4E4E7]"
      } border-[1px] bg-white`,

      placeholder: "https://",
    },
  ];
  const [profile, setProfile] = useState({
    image: "",
    name: "",
    about: "",
    social: "",
  });
  const handleimg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_unsigned_preset");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.secure_url) {
        setProfile((prev) => ({
          ...prev,
          image: data.secure_url,
        }));
      } else {
        console.error("Cloudinary upload failed", data);
      }
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(profile);

  const createprofile = async () => {
    const newErrors = {
      name: "",
      about: "",
      image: "",
      social: "",
    };

    if (profile.name === "") newErrors.name = "Please enter name";
    if (profile.image === "") newErrors.image = "Please upload an image";
    if (profile.about === "")
      newErrors.about = "Please enter info about yourself";
    if (profile.social === "") newErrors.social = "Please enter social link";

    setError(newErrors);

    const hasError = Object.values(newErrors).some((e) => e !== "");
    if (hasError) return;

    try {
      const profileResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/profile/create`,
        {
          name: profile.name,
          about: profile.about,
          avatarImage: profile.image,
          socialMEdiaURL: profile.social,
          backgroundImage: "",
          successMessage: "",
        },
        {
          withCredentials: true,
        }
      );

      setUser(profileResponse.data.mes);
      stepper();
      // router.push("/home");
    } catch (error) {
      console.error("Failed to create profile:", error);
    }
  };

  return (
    <div className="text-[#09090B] overflow-scroll flex w-[510px] max-w-[672px] flex-col items-start gap-6 border-[1px] border-black rounded-xl p-10 ">
      <div className="flex flex-col items-start gap-[1px]">
        <p className=" text-[24px] font-semibold">Complete your profile page</p>
      </div>
      <div className="flex flex-col items-start gap-3 relative">
        <p className="text-[14px] font-medium">Add photo</p>
        <input
          onChange={handleimg}
          type="file"
          className={`text-transparent absolute top-8.5 size-[160px] justify-center items-center rounded-full cursor-pointer`}></input>

        <div
          className={`flex size-[160px] justify-center items-center rounded-full border-dashed ${
            error.image
              ? "border-[#EF4444] border-[1px]"
              : "border-black border-[0px]"
          } bg-white`}>
          {profile.image ? (
            <img
              src={profile.image}
              alt="Profile preview"
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            <Camera />
          )}
        </div>
        {error.image && (
          <div className="flex gap-2 items-center">
            <CircleX className="text-[#EF4444] size-[14px]" />
            <span className="text-[#EF4444] text-[12px]">{error.image}</span>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col items-start gap-3 text-[#09090B] text-[14px]">
        {form.map((val, i) => {
          return val.el == "input" ? (
            <div key={i} className={val.clas}>
              <p>{val.title}</p>
              <input
                name={val.name}
                onChange={handleInput}
                className={val.na}
                placeholder={val.placeholder}></input>
              {val.name === "name" && error.name && (
                <div className="flex gap-2 items-center">
                  <CircleX className="text-[#EF4444] size-[14px]" />
                  <span className="text-[#EF4444] text-[12px]">
                    {error.name}
                  </span>
                </div>
              )}
              {val.name === "social" && error.social && (
                <div className="flex gap-2 items-center">
                  <CircleX className="text-[#EF4444] size-[14px]" />
                  <span className="text-[#EF4444] text-[12px]">
                    {error.social}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div key={i} className={val.clas}>
              <p>{val.title}</p>
              <textarea
                name={val.name}
                onChange={handleInput}
                className={val.na}
                placeholder={val.placeholder}></textarea>
              {val.name === "about" && error.about && (
                <div className="flex gap-2 items-center">
                  <CircleX className="text-[#EF4444] size-[14px]" />
                  <span className="text-[#EF4444] text-[12px]">
                    {error.about}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col w-full items-end justify-end gap-[10px]">
        <button
          onClick={createprofile}
          className="cursor-pointer flex w-[246px] h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-md bg-black text-white">
          Continue
        </button>
      </div>
    </div>
  );
};
