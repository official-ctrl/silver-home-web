import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "이름을 입력해주세요.").max(50),
  phone: z
    .string()
    .trim()
    .regex(/^01[016789]-?\d{3,4}-?\d{4}$/, "올바른 휴대폰 번호를 입력해주세요."),
  preferredDate: z.string().trim().min(1, "희망 날짜를 선택해주세요."),
  preferredTime: z.string().trim().min(1, "희망 시간을 선택해주세요."),
  message: z.string().trim().max(1000).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
