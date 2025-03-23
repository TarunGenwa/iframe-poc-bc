import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IframeContainer from "@/components/IframeContainer";
import ContentSection from "@/components/ContentSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow">
        <div className="container mx-auto px-2 py-8">
          <h2 className="text-3xl text-center font-bold mb-6">BolaVIP Mock IFrame Header</h2>
          <p className="mb-8 text-lg text-gray-700">
            {/* This application embeds a child iframe from localhost:3000 and listens for height adjustments via postMessage. */}
          </p>
          <IframeContainer />
        </div>
        {/* <ContentSection /> */}
      </main>
      <Footer />
    </div>
  );
}