import { Loader, Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

function SigninForm({
  form,
  handleChangeValue,
  isShowPassword,
  setIsShowPassword,
  handleSubmit,
  isPending,
}) {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center justify-start gap-4"
      >
        <div className="w-3/4 h-[38px] sm:h-[42px] px-4 py-2 rounded-lg bg-white flex items-center justify-start gap-2 text-icon ">
          <Mail className="text-primary" />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChangeValue}
            placeholder="ایمیل"
            required
            className="w-full placeholder:text-icon"
          />
        </div>

        <div className="w-3/4 h-[38px] sm:h-[42px] px-4 py-2 rounded-lg bg-white flex items-center justify-start gap-2 text-icon">
          <Lock className="text-primary" />
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChangeValue}
            placeholder="رمز عبور"
            required
            className="w-full placeholder:text-icon"
          />

          {isShowPassword ? (
            <span
              onClick={() =>
                setIsShowPassword((isShowPassword) => !isShowPassword)
              }
              className="w-fit text-icon cursor-pointer"
            >
              <Eye className="w-5 h-5" />
            </span>
          ) : (
            <span
              onClick={() =>
                setIsShowPassword((isShowPassword) => !isShowPassword)
              }
              className="w-fit text-icon cursor-pointer"
            >
              <EyeOff className="w-5 h-5" />
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`w-3/6 flex items-center justify-center text-nowrap border border-primary bg-primary ${
            isPending ? "brightness-90" : "brightness-100"
          } px-4 py-1.5 sm:py-2 rounded-lg text-white hover:brightness-90 custom-transition cursor-pointer`}
        >
          {isPending ? <Loader /> : "ورود"}
        </button>
      </form>
    </>
  );
}

export default SigninForm;
