/* eslint-disable style/arrow-parens */
/* eslint-disable style/comma-dangle */
import type { toast } from "#build/ui";
import type { AuthFormField } from "@nuxt/ui";

export const useAuthStore = defineStore("auth", () => {
  const toast = useToast();
  //   const user = ref<User | null>(null);

  const isAuthenticated = ref(false);
  const otpSent = ref(false);

  const fields: AuthFormField[] = [
    {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
      required: true,
      size: "xl",
    },
    {
      name: "email",
      type: "email",
      label: "Work Email",
      placeholder: "Enter your email",
      required: true,
      size: "xl",
      //   description: "Use your work email to easily collaborate with your team.",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
      size: "xl",
    },
    ...(otpSent.value
      ? [
          {
            name: "otp",
            type: "otp" as const,
            label: "OTP",
            length: 6,
            placeholder: "○",
            description: "Enter the one-time password we sent to your email.",
          },
        ]
      : []),
    {
      name: "remember",
      label: "Remember me",
      type: "checkbox",
    },
  ];

  const providers: {
    label: string;
    icon: string;
    onClick: () => void;
    size?: "xl" | "md" | "xs" | "sm" | "lg";
  }[] = [
    {
      size: "xl",
      label: "Microsoft",
      icon: "i-simple-icons-microsoft",
      onClick: () => {
        toast.add({ title: "Microsoft", description: "Login with Microsoft" });
      },
    },
    {
      label: "Google",
      icon: "i-simple-icons-google",
      onClick: () => {
        toast.add({ title: "Google", description: "Login with Google" });
      },
      size: "xl",
    },
    {
      size: "xl",
      label: "GitHub",
      icon: "i-simple-icons-github",
      onClick: () => {
        toast.add({ title: "GitHub", description: "Login with GitHub" });
      },
    },
  ];

  const signInFields: AuthFormField[] = fields.filter(
    (f) => f.name !== "name" && f.name !== "password" && f.name !== "remember"
  );
  const signUpFields: AuthFormField[] = fields.filter(
    (f) => f.name !== "remember"
  );
  return { isAuthenticated, providers, signInFields, signUpFields, otpSent };
});
