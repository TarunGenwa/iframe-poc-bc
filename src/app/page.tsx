import Footer from "@/components/Footer";
import IframeContainer from "@/components/IframeContainer";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow">
        <div className="container mx-auto px-0 ">
          <h2 className="text-3xl text-center font-bold sticky top-0 bg-white dark:bg-[blue] py-4 z-10"></h2>
          <IframeContainer />
        </div>
        {/* <ContentSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}