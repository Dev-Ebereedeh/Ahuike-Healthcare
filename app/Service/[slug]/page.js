import { servicesData } from "@/app/_components/ServicesList";
import Image from "next/image";
import Container from "@/app/_components/Container";

export default function page({ params }) {
  const serviceData = servicesData.find(
    (serviceData) => serviceData.link === params.slug
  );
  return (
    <>
     
      <Container>
      <h3 className="text-4xl font-semibold ">
            {serviceData.title}
          </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 p-3 md:p-16 ">
          
         
            
          
          <div className="col-span-1">
            <Image
              src={serviceData.imageUrl}
              alt="Doctor with Patient"
              width={800}
              height={500}
              className="object-cover"
            />{" "}
          </div>{" "}
          <div className="col-span-1 flex flex-col gap-4">
            {" "}
            <div>
              {" "}
              <h3 className="text-[22px] font-[family-name:var(--font-domainer)] font-bold">
                {" "}
                {serviceData.heading}{" "}
              </h3>{" "}
              <p className="text-gray-600 font-[family-name:var(--font-proxnovar)]">
                {" "}
                {serviceData.p1}{" "}
              </p>{" "}
              <p className="text-gray-600 font-[family-name:var(--font-proxnovar)]">
                {" "}
                {serviceData.p2}{" "}
              </p>
            </div>
            
              
              
              
            
          </div>{" "}
        </div>{" "}
      </Container>
    </>
  );
}
