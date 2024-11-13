import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative w-full max-w-[450px] mx-auto p-4">
        {children}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ lng: "pt" }, { lng: "en" }, { lng: "es" }];
}
