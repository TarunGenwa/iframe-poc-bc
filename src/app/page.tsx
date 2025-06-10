
import IframeContainer from "@/components/IframeContainer";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-grow">
        <div className="container mx-auto px-0 ">
          <IframeContainer />
        </div>
        {/* <ContentSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}