import axios from "axios";
import { Camera } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Complete = () => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const router = useRouter();
  const form = [
    {
      el: "input",
      title: "Name",
      name: "name",

      clas: "flex flex-col items-start gap-3 self-stretch w-full h-[62px]",
      na: "flex w-full h-[40px] px-2 py-3 items-center rounded-md border-[#E4E4E7] border-[1px] bg-white",
      placeholder: "Enter your name here",
    },
    {
      el: "text-area",
      title: "About",
      name: "about",
      clas: "flex flex-col items-start gap-2 self-stretch w-full h-[113px]",
      na: "flex w-full h-[131px] min-h-[80px] px-2 py-3 items-center rounded-md border-[#E4E4E7] border-[1px] bg-white",

      placeholder: "Write about yourself here",
    },
    {
      el: "input",
      name: "social",
      title: "Social media URL",
      clas: "flex flex-col items-start gap-3 self-stretch w-full h-[62px]",
      na: "flex w-full h-[40px] px-2 py-3 items-center rounded-md border-[#E4E4E7] border-[1px] bg-white",

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
    try {
      axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/profile/22`, {
        name: profile.name,
        about: profile.about,
        avatarImage: profile.image,
        socialMEdiaURL: profile.social,
        backgroundImage: "",
        successMessage: "",
        userId: 22,
      });
      router.push("/home");
    } catch (error) {
      console.log(error);
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
          className="text-transparent absolute top-8.5 size-[160px] justify-center items-center rounded-full cursor-pointer"
        ></input>
        <div className="flex size-[160px] justify-center items-center rounded-full border-[2px] border-dashed border-black bg-white">
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
                placeholder={val.placeholder}
              ></input>
            </div>
          ) : (
            <div key={i} className={val.clas}>
              <p>{val.title}</p>
              <textarea
                name={val.name}
                onChange={handleInput}
                className={val.na}
                placeholder={val.placeholder}
              ></textarea>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col w-full items-end justify-end gap-[10px]">
        <button
          onClick={createprofile}
          className="cursor-pointer flex w-[246px] h-[40px] px-4 py-2 justify-center items-center gap-2 rounded-md bg-black text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
