import { doctorData, doctorData } from "@/app/_components/Docarray";
import Image from "next/image";
import Container from "@/app/_components/Container";
import Button from "@/app/_components/Button";
import Link from "next/link";

export default function page({ params }) {
  const doctorData = doctorData.find(
    (doctorData) => doctorData.link === params.slug
  );
  return (
    <>
      <Container>
        <h3 className="text-4xl font-semibold  md:mt-24 md:ml-24">{doctorData.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 p-3 md:p-16 ">
          <div className="col-span-1">
            <Image
              src={doctorData.imageUrl}
              alt="Doctor with Patient"
              width={800}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <div>
              <h3 className="text-[22] font-bold ">{doctorData.title}</h3>
              <p className="text-gray-600 ">{doctorData.description}</p>
             <Link href="/contact"> <Button text= "Book now "></Button></Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
