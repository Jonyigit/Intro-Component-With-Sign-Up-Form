import { useForm } from "react-hook-form";

export function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert(`
            First name: ${data.firstName}
            Last name: ${data.lastName}
            Email address: ${data.emailAdress}
            Pasword: ${data.password}

            😎
            `);
    };

    return (
        <div className="form-container">
            <div className="title">
                <p>
                    <span>Try it free 7 days</span> then $20/mo. thereafter
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input
                        type="text"
                        placeholder="First Name"
                        {...register("firstName", {
                            required: "First Name cannot be empty",
                        })}
                        className={errors.firstName ? "error" : ""}
                    />
                    <img
                        src="/src/assets/icon/error-icon.svg"
                        alt="error-icon"
                        className={errors.firstName ? "error-icon" : ""}
                    />
                    {errors.firstName && (
                        <span>{errors.firstName.message}</span>
                    )}
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName", {
                            required: "Last Name cannot be empty",
                        })}
                        className={errors.lastName ? "error" : ""}
                    />
                    <img
                        src="/src/assets/icon/error-icon.svg"
                        alt="error-icon"
                        className={errors.lastName ? "error-icon" : ""}
                    />
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Email Address"
                        {...register("emailAdress", {
                            required: "Looks like this is not an email",
                        })}
                        className={errors.emailAdress ? "error" : ""}
                    />
                    <img
                        src="/src/assets/icon/error-icon.svg"
                        alt="error-icon"
                        className={errors.emailAdress ? "error-icon" : ""}
                    />
                    {errors.emailAdress && (
                        <span>{errors.emailAdress.message}</span>
                    )}
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password cannot be empty",
                        })}
                        className={errors.password ? "error" : ""}
                    />
                    <img
                        src="/src/assets/icon/error-icon.svg"
                        alt="error-icon"
                        className={errors.password ? "error-icon" : ""}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </label>
                <label className="btn-box">
                    <button className="submit-btn">
                        CLAIM YOUR FREE TRIAL
                    </button>
                    <p>
                        By clicking the button, you are agreeing to our
                        <span>Terms and Services</span>
                    </p>
                </label>
            </form>
        </div>
    );
}
