import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

function SigninForm({
  form,
  handleChangeValue,
  isShowPassword,
  setIsShowPassword,
}) {
  return (
    <>
      <form className="w-full flex flex-col items-center justify-start gap-2">
        <div className="w-3/4 px-4 py-2 rounded-lg bg-surface flex items-center justify-start gap-2 text-icon ">
          <Mail />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChangeValue}
            placeholder="ایمیل"
            className="w-full"
          />
        </div>

        <div className="w-3/4 px-4 py-2 rounded-lg bg-surface flex items-center justify-start gap-2 text-icon">
          <Lock />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChangeValue}
            placeholder="رمز عبور"
            className="w-full"
          />

          {isShowPassword ? (
            <span className="w-fit text-icon cursor-pointer">
              <Eye className="w-5 h-5" />
            </span>
          ) : (
            <span className="w-fit text-icon cursor-pointer">
              <EyeOff className="w-5 h-5" />
            </span>
          )}
        </div>
      </form>
    </>
  );
}

export default SigninForm;
