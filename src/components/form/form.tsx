"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "./form.module.scss";

type IFormInput = {
  firstName: string;
  lastName: string;
  email: string;
};

const FormElement: FC = (): JSX.Element => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data: IFormInput): void => {
    console.log(data);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWraper}>
        <div className={styles.messege}>{errors.firstName?.message}</div>
        <label className={`${errors.firstName && styles.invalidLabel}`}>
          First Name
        </label>
        <input
          type="text"
          {...register("firstName")}
          className={`${errors.firstName ? styles.invalid : styles.input}`}
        />

        <div className={styles.messege}>{errors.lastName?.message}</div>
        <label className={`${errors.lastName && styles.invalidLabel}`}>
          Last Name
        </label>
        <input
          type="text"
          {...register("lastName")}
          className={`${errors.lastName ? styles.invalid : styles.input}`}
        />

        <div className={styles.messege}>{errors.email?.message}</div>
        <label className={`${errors.email && styles.invalidLabel}`}>
          Email
        </label>
        <input
          type="text"
          {...register("email")}
          className={`${errors.email ? styles.invalid : styles.input}`}
        />

        <button type="submit" className={styles.btn}>
          Send
        </button>
      </form>
    </>
  );
};
export default FormElement;
