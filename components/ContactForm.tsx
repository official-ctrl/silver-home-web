"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { contactSchema } from "@/lib/validations/contact";

const TIME_SLOTS = [
  "오전 10:00",
  "오전 11:00",
  "오후 1:00",
  "오후 2:00",
  "오후 3:00",
  "오후 4:00",
];

type FormState = {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "focus-visible:ring-2 focus-visible:ring-[#4a7c59] focus-visible:ring-offset-0 focus-visible:border-[#4a7c59]";

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const showDetailsStep = values.name.trim().length > 0 && values.phone.trim().length > 0;

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof FormState;
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "제출 중 오류가 발생했습니다.");
      }

      setStatus("success");
      setValues(INITIAL_STATE);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "제출 중 오류가 발생했습니다."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white p-8 shadow-sm"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            className={fieldClassName}
            required
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">연락처</Label>
          <Input
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="010-1234-5678"
            value={values.phone}
            onChange={handleChange("phone")}
            aria-invalid={Boolean(errors.phone)}
            className={fieldClassName}
            required
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {showDetailsStep && (
          <>
            <div className="flex flex-col gap-2">
              <Label htmlFor="preferredDate">희망 날짜</Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={values.preferredDate}
                onChange={handleChange("preferredDate")}
                aria-invalid={Boolean(errors.preferredDate)}
                className={fieldClassName}
                required
              />
              {errors.preferredDate && (
                <p className="text-sm text-red-600">{errors.preferredDate}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="preferredTime">희망 시간</Label>
              <Select
                value={values.preferredTime || null}
                onValueChange={(value) =>
                  setValues((prev) => ({
                    ...prev,
                    preferredTime: (value as string) ?? "",
                  }))
                }
              >
                <SelectTrigger
                  id="preferredTime"
                  className={`w-full ${fieldClassName}`}
                >
                  <SelectValue placeholder="시간을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  {TIME_SLOTS.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.preferredTime && (
                <p className="text-sm text-red-600">{errors.preferredTime}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">문의 내용 (선택)</Label>
              <Textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange("message")}
                aria-invalid={Boolean(errors.message)}
                className={fieldClassName}
                rows={3}
              />
              {errors.message && (
                <p className="text-sm text-red-600">{errors.message}</p>
              )}
            </div>
          </>
        )}

        {status === "success" && (
          <Alert>
            <AlertDescription>
              상담 신청이 접수되었습니다. 빠르게 연락드리겠습니다.
            </AlertDescription>
          </Alert>
        )}
        {status === "error" && (
          <Alert variant="destructive">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-12 rounded-full bg-[#4a7c59] text-base text-white hover:bg-[#3d6649]"
        >
          {status === "submitting" ? "제출 중..." : "상담 예약하기"}
        </Button>
      </div>
    </form>
  );
}
