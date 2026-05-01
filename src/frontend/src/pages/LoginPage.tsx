import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useState } from "react";

// Subtle SVG data-nodes pattern embedded as data URI
const NODE_PATTERN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'>
  <circle cx='20' cy='20' r='2.5' fill='%23ffffff' opacity='0.18'/>
  <circle cx='100' cy='20' r='2.5' fill='%23ffffff' opacity='0.18'/>
  <circle cx='60' cy='60' r='2.5' fill='%23ffffff' opacity='0.18'/>
  <circle cx='20' cy='100' r='2.5' fill='%23ffffff' opacity='0.18'/>
  <circle cx='100' cy='100' r='2.5' fill='%23ffffff' opacity='0.18'/>
  <line x1='20' y1='20' x2='60' y2='60' stroke='%23ffffff' stroke-width='0.6' opacity='0.1'/>
  <line x1='100' y1='20' x2='60' y2='60' stroke='%23ffffff' stroke-width='0.6' opacity='0.1'/>
  <line x1='20' y1='100' x2='60' y2='60' stroke='%23ffffff' stroke-width='0.6' opacity='0.1'/>
  <line x1='100' y1='100' x2='60' y2='60' stroke='%23ffffff' stroke-width='0.6' opacity='0.1'/>
  <line x1='20' y1='20' x2='100' y2='20' stroke='%23ffffff' stroke-width='0.6' opacity='0.06'/>
  <line x1='20' y1='100' x2='100' y2='100' stroke='%23ffffff' stroke-width='0.6' opacity='0.06'/>
  <line x1='20' y1='20' x2='20' y2='100' stroke='%23ffffff' stroke-width='0.6' opacity='0.06'/>
  <line x1='100' y1='20' x2='100' y2='100' stroke='%23ffffff' stroke-width='0.6' opacity='0.06'/>
</svg>`;

const NODE_PATTERN_URL = `url("data:image/svg+xml,${NODE_PATTERN_SVG}")`;

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const newErrors: typeof errors = {};
    if (!username.trim()) newErrors.username = "اسم المستخدم مطلوب";
    if (!password.trim()) newErrors.password = "كلمة المرور مطلوبة";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username.trim());
    if (rememberMe) localStorage.setItem("rememberMe", "true");
    navigate({ to: "/" });
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      dir="rtl"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.30 0.10 262) 0%, oklch(0.38 0.12 248) 40%, oklch(0.32 0.08 255) 100%)",
      }}
    >
      {/* Background data-nodes pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: NODE_PATTERN_URL,
          backgroundSize: "120px 120px",
          opacity: 0.55,
        }}
      />

      {/* Radial glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, oklch(0.55 0.16 262 / 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-sm relative z-10">
        {/* Logo + Title above card */}
        <div className="flex flex-col items-center mb-7">
          {/* System logo */}
          <div className="mb-5 w-24 h-24 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-white/10">
            <img
              src="/assets/chatgpt_image_apr_16_2026_08_31_13_pm-019db10b-611a-7449-bc7c-8faa65017427.png"
              alt="شعار نظام مسار"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight drop-shadow-lg">
            نظام إدارة المشاريع
          </h1>
          <p
            className="text-sm mt-1.5 drop-shadow"
            style={{ color: "oklch(0.85 0.04 240)" }}
          >
            منصة إدارة المشاريع المؤسسية
          </p>
        </div>

        {/* Login card */}
        <Card
          className="border-0 rounded-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 24px 64px oklch(0.18 0.06 262 / 0.55), 0 4px 16px oklch(0.18 0.06 262 / 0.25)",
          }}
        >
          <CardContent className="p-8">
            <h2
              className="text-lg font-semibold text-center mb-1"
              style={{ color: "oklch(0.22 0.01 262)" }}
            >
              تسجيل الدخول
            </h2>
            <p className="text-sm text-center text-muted-foreground mb-6">
              أدخل بيانات الدخول الخاصة بك للمتابعة
            </p>

            <form onSubmit={handleLogin} noValidate className="space-y-5">
              {/* Username field */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="username"
                  className="text-sm font-medium text-foreground"
                >
                  اسم المستخدم
                </Label>
                <div className="relative">
                  <User
                    size={15}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                  <Input
                    id="username"
                    type="text"
                    placeholder="أدخل اسم المستخدم"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (errors.username)
                        setErrors((prev) => ({ ...prev, username: undefined }));
                    }}
                    className={`pr-9 text-right ${errors.username ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    autoComplete="username"
                    data-ocid="login.username.input"
                  />
                </div>
                {errors.username && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="login.username.field_error"
                  >
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Password field */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-foreground"
                  >
                    كلمة المرور
                  </Label>
                  <button
                    type="button"
                    className="text-xs font-medium transition-smooth"
                    style={{ color: "oklch(0.52 0.14 262)" }}
                    data-ocid="login.forgot_password.link"
                  >
                    نسيت كلمة المرور؟
                  </button>
                </div>
                <div className="relative">
                  <Lock
                    size={15}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="أدخل كلمة المرور"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        setErrors((prev) => ({ ...prev, password: undefined }));
                    }}
                    className={`pr-9 pl-9 text-right ${errors.password ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    autoComplete="current-password"
                    data-ocid="login.password.input"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                    aria-label={
                      showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
                    }
                    data-ocid="login.toggle_password.button"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {errors.password && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="login.password.field_error"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(v) => setRememberMe(!!v)}
                  data-ocid="login.remember_me.checkbox"
                />
                <Label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground cursor-pointer select-none"
                >
                  تذكرني
                </Label>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full font-semibold h-11 text-base rounded-xl transition-smooth"
                disabled={loading}
                data-ocid="login.submit_button"
                style={{
                  background: loading
                    ? undefined
                    : "linear-gradient(135deg, oklch(0.52 0.17 262) 0%, oklch(0.45 0.20 254) 100%)",
                  boxShadow: loading
                    ? undefined
                    : "0 4px 16px oklch(0.52 0.17 262 / 0.35)",
                }}
              >
                {loading ? (
                  <span className="flex items-center gap-2 justify-center">
                    <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    جاري تسجيل الدخول...
                  </span>
                ) : (
                  "تسجيل الدخول"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <p
          className="text-center text-xs mt-6 drop-shadow"
          style={{ color: "oklch(0.75 0.03 240)" }}
        >
          &copy; 2024 جميع الحقوق محفوظة
        </p>
      </div>
    </div>
  );
}
