import { Footer } from "@/components/Footer";
import { InputArea } from "@/components/InputArea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#3B82F6]">
      <InputArea />
      <Footer />
    </main>
  );
}
