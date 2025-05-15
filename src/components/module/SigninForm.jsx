import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

function SigninForm({
  form,
  handleChangeValue,
  isShowPassword,
  setIsShowPassword,
  handleSubmit,
}) {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center justify-start gap-2"
      >
        <div className="w-3/4 px-4 py-2 rounded-lg bg-surface flex items-center justify-start gap-2 text-icon ">
          <Mail />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChangeValue}
            placeholder="ایمیل"
            required
            className="w-full"
          />
        </div>

        <div className="w-3/4 px-4 py-2 rounded-lg bg-surface flex items-center justify-start gap-2 text-icon">
          <Lock />
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChangeValue}
            placeholder="رمز عبور"
            required
            className="w-full"
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
          className="w-3/6 text-nowrap border border-primary bg-primary px-4 py-1.5 sm:py-2 rounded-lg text-white hover:brightness-90 custom-transition cursor-pointer"
        >
          ورود
        </button>
      </form>
    </>
  );
}

export default SigninForm;
