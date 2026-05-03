"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpPage = () => {
  const [isShowPassword, setShaowPassword] = useState(false);

  const handelGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegForm = async (formData) => {
    const { name, image, email, password } = formData;
    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image,
      callbackURL: "/login",
    });
    if (error) {
      console.log(error);
      alert(error.message);
    } else {
      redirect("/login");
    }
  };

  return (
    <div className="my-20 bg-base-200 border-base-300 rounded-box w-xs mx-auto  border p-4">
      <form onSubmit={handleSubmit(handelRegForm)}>
        <fieldset className="fieldset relative">
          <h2 className="text-center text-3xl font-semibold">Create Account</h2>
          <p className="text-center font-semibold">Register to get started</p>

          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Enter Your Name" {...register("name", { required: "name is required" })} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}

          <label className="label">Image URL</label>
          <input type="url" className="input" placeholder="Enter Your Image URL" {...register("image")} />
          {errors.image && <span className="text-red-500">{errors.image.message}</span>}

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Enter Your Email" {...register("email", { required: "email is required" })} />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}

          <label className="label">Password</label>
          <input
            type={isShowPassword ? "text" : "password"}
            className="input"
            placeholder="Enter Your Password"
            {...register("password", { required: "password is required" })}
          />
          <span className="absolute right-3 top-79 text-lg" onClick={() => setShaowPassword(!isShowPassword)}>
            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>

      <div className="divider">OR</div>

      <button onClick={handelGoogle} className="btn w-full bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
          </g>
        </svg>
        Continue with Google
      </button>

      <p className="text-center mt-2">
        Allready have an account ?{" "}
        <span className="text-blue-400">
          <Link href={"/login"}>Login</Link>
        </span>
      </p>
    </div>
  );
};

export default SignUpPage;
