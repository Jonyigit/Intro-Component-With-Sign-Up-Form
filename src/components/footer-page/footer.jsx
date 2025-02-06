import { useForm } from "react-hook-form";
import stylefooter from "./footer.module.css";

export function Footer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    console.log(errors);

    const onSubmit = (data) => {
        alert(
            `Name: ${data.name} 
Email: ${data.email}
            `
        );
        reset();
    };
    return (
        <>
            <footer className={stylefooter.footer}>
                <div className={stylefooter.container}>
                    <div className={stylefooter.contactPage}>
                        <div className={stylefooter.content}>
                            <h1>Contact</h1>
                            <p>
                                I would love to hear about your project and how
                                I could help. Please fill in the form, and I’ll
                                get back to you as soon as possible.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                <input
                                    type="text"
                                    placeholder="NAME"
                                    className={
                                        errors.name
                                            ? stylefooter.errorInput
                                            : stylefooter.input
                                    }
                                    {...register("name", {
                                        required: "Sorry, invalid format here",
                                    })}
                                />
                                {errors.name && (
                                    <span className={stylefooter.errorText}>
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                            <label>
                                <input
                                    type="text"
                                    placeholder="EMAIL"
                                    className={
                                        errors.email
                                            ? stylefooter.errorInput
                                            : stylefooter.input
                                    }
                                    {...register("email", {
                                        required: "Sorry, invalid format here",
                                    })}
                                />
                                {errors.email && (
                                    <span className={stylefooter.errorText}>
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                            <textarea placeholder="MESSAGE"></textarea>
                            <button className={stylefooter.submitBtn}>
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                    <div className={stylefooter.footerNavbar}>
                        <h1>adamkeyes</h1>
                        <div className={stylefooter.icons}>
                            <img
                                src="./src/assets/icon/icon1.svg"
                                alt="githup icon"
                            />
                            <img src="./src/assets/icon/icon2.svg" alt="icon" />
                            <img
                                src="./src/assets/icon/icon3.svg"
                                alt="link icon"
                            />
                            <img
                                src="./src/assets/icon/icon4.svg"
                                alt="twitter icon"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
