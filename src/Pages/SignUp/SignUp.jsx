import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {createUser} = useContext(AuthContext)


  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email,data.password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
    })
  }


  


  return (
    <>
    <Helmet>
            <title>Suger Bistro | Sign Up</title>
        </Helmet>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name",{ required: true })}
                placeholder="name"
                className="input input-bordered"
                // required
              />
              {errors.name && <span className="text-red-600 mt-2">*Name is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email",{required: true})}
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && <span className="text-red-600 mt-2">*Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
              
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
