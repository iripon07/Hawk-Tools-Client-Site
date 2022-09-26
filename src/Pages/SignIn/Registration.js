import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import PageTitle from "../Shared/PageTitle";

const Registration = () => {
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,  {sendEmailVerification: true});
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInError;
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    toast("Successfully account created");
    await updateProfile({ displayName: data.name });

    navigate("/");
  };

  if (gError || fbError || error || updatingError) {
    return (
      <div>
        signInError={" "}
        <p className="text-red-600 text-xs">
          {gError.message ||
            fbError?.message ||
            error?.message ||
            updatingError?.message}
        </p>
      </div>
    );
  }
  if (gLoading || fbLoading || loading || updating) {
    return <Loading></Loading>;
  }
  if (gUser || fbUser || user) {
    return console.log("logged in", gUser || fbUser || user);
  }

  return (
    <div className="flex justify-center items-center my-20">
      <PageTitle title="Registration"></PageTitle>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold uppercase text-primary text-center">
            registration
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label pb-0">
                <span className="label-text text-primary text-base">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label pt-0">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-xs text-red-600">
                    {errors.name?.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label pb-0">
                <span className="label-text text-primary text-base">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label pt-0">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-xs text-red-600">
                    {errors.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-xs text-red-600">
                    {errors.email?.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label pb-0">
                <span className="label-text text-primary text-base">
                  Password
                </span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Provide a valid Password",
                  },
                })}
                type="text"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label pt-0">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-xs text-red-600">
                    {errors.password?.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-xs text-red-600">
                    {errors.password?.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              style={{
                border: "1px solid green",
              }}
              className="max-w-xs w-full text-xl uppercase font-bold py-1 rounded-xl text-primary hover:bg-primary hover:text-white transform transition duration-500 hover:scale-105"
              type="submit"
            />
          </form>
          <p className="text-gray-500 text-sm mt-[-5px]">
            Already have an account?{" "}
            <span className="text-green-500">
              <Link to="/signin">Please sign in</Link>
            </span>
          </p>

          <div className="divider my-2">OR</div>

          <div className="card-actions justify-center">
            <button
              onClick={() => signInWithFacebook()}
              className="text-2xl font-semibold bg-[#1877F2] text-white flex justify-center items-center max-w-xs w-full py-2 rounded-xl transform transition duration-500 hover:scale-105"
            >
              <BsFacebook className="mr-1 w-10"></BsFacebook> Sign in with
              facebook
            </button>

            <button
              onClick={() => signInWithGoogle()}
              style={{
                border: "1px solid green",
              }}
              className="text-2xl font-semibold bg-white text-gray-500 flex justify-center items-center py-2 max-w-xs w-full rounded-xl transform transition duration-500 hover:scale-105"
            >
              <FcGoogle className="mr-1 w-10"></FcGoogle> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
