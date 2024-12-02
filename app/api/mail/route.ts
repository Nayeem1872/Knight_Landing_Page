import { mailOptions, transporter } from "@/components/nodemailer";
import { NextResponse } from "next/server";


export async function POST(req:any, res:any) {
  if (req.method === "POST") {
    const { email, subject, text} = await req.json();

    // if (!email  !subject  !message) {
    //   return NextResponse.json({ message: "Internal server error" });
    // }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: subject,
        text: text,
      });

      return NextResponse.json({ success: true });
    } catch (err) {
      return NextResponse.json({ message: err.message });
    }
  }
  return NextResponse.json({ message: "Bad request" });
}